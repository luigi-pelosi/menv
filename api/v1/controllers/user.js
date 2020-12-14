const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const User = require('../models/user')
const { roles } = require('../roles')

async function hash(password) {
    return await bcrypt.hash(password, 10)
}
async function validate(password, hashed) {
    return await bcrypt.compare(password, hashed)
}

const register = async (req, res, next) => {
    try {
        const { firstname, lastname, email, password, role } = req.body
        const hashed = await hash(password)
        const user = new User({
            firstname,
            lastname,
            email,
            password: hashed,
            role
        })
        const token = jwt.sign(
            { userId: user.id },
            process.env.VUE_APP_JWT_SECRET,
            { expiresIn: '1d'}
        )
        user.token = token
        await user.save()

        res.json({
            data: user,
            token
        })
    } catch (error) {
        next(error)
    }
}

const login = async (req, res, next) => {
    try {
        const { email, password } = req.body
        const user = await User.findOne({ email })
        if (user) {
            const isPasswordValid = await validate(password, user.password)
            if (isPasswordValid) {
                const token = jwt.sign(
                    { userId: user.id },
                    process.env.VUE_APP_JWT_SECRET,
                    { expiresIn: '1d' }
                )
                await User.findByIdAndUpdate(user.id, { token })
                return res.status(200).json({
                    data: {
                        firstname: user.firstname,
                        lastname: user.lastname,
                        email,
                        role: user.role
                    },
                    token
                })
            }
            return res.status(500).send('Utente inesistente o password errata! E2')
        }
        return res.status(500).send('Utente inesistente o password errata! E1')
    } catch (error) {
        next(error)
    }
}

const getAll = async (req, res, next) => {
    const users = await User.find({})
    res.status(200).json(users)
}

const get = async (req, res, next) => {
    try {
        const userId = req.params.userId
        const user = await User.findById(userId)
        if (user) {
            return req.status(200).json(user)
        }

        return res.status(500).send('Nessun utente trovato!')
    } catch (error) {
        next(error)
    }
}

const update = async (req, res, next) => {
    try {
        const data = req.body
        const userId = req.params.userId
        await User.findByIdAndUpdate(userId, data)
        const user = await User.findById(userId)
        if (user) {
            return req.status(200).json({
                data: user,
                message: 'Utente aggiornato con successo'
            })
        }

        return res.status(500).send('Utente non aggiornato!')
    } catch (error) {
        next(error)
    }
}

const remove = async (req, res, next) => {
    try {
        const userId = req.params.userId
        await User.findByIdAndDelete(userId)
        return req.status(200).json({
            data: null,
            message: 'Utente eliminato con successo'
        })
    } catch (error) {
        next(error)
    }
}

const grant = (action, resource) => {
    return async (req, res, next) => {
        try {
            const is = roles.can(req.user.role)[action](resource)
            if (is.granted) {
                return next()
            }
            return res.status(401).json({
                message: 'Non hai i permessi necessari per accedere/modificare questa risorsa'
            })
        } catch (error) {
            next(error)
        }
    }
}

const proceed = async (req, res, next) => {
    try {
        const user = res.locals.loggedIn
        if (user) {
            req.user = user
            return next()
        }

        return res.status(401).json({
            message: 'Devi essere loggato per poter accedere a questa risorsa'
        })
    } catch (error) {
        next(error)
    }
}

module.exports = {
    register,
    login,
    getAll,
    get,
    update,
    remove,
    grant,
    proceed
}