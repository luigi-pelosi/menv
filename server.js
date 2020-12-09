const db = require('./api/v1/config/db')
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')
const path = require('path')
const routes = require('./api/v1/routes')
const app = express()
const PORT = process.env.PORT || 3000

require("dotenv").config({ path: path.join(__dirname, "./.env") })
mongoose.connect(db.url, db)
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(async (req, res, next) => {
    const User = require('./api/v1/models/user')
    if (req.headers["x-access-token"]) {
        const accessToken = req.headers["x-access-token"]
        const { userId, exp } = await jwt.verify(accessToken, process.env.VUE_APP_JWT_SECRET)
        if (exp < Date.now().valueOf() / 1000) {
            return res.status(401).json({ error: "JWT token has expired, please login to obtain a new one" })
        }
        res.locals.loggedIn = await User.findById(userId)
        next()
    } else {
        next()
    }
});
app.use('/', routes)
app.listen(PORT, () => { console.log('Server is listening on Port:', PORT) })