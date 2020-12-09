const AC = require('accesscontrol')
const AccessControl = new AC()

const roles = (function() {
    AccessControl.grant('basic')
        .readOwn('profile')
        .updateOwn('profile')

    AccessControl.grant('manager')
        .extend('basic')

    AccessControl.grant('administrative')
        .extend('basic')

    AccessControl.grant('director')
        .extend('manager')
        .extend('administrative')
        .readAny('profile')
        .updateAny('profile')
        .deleteAny('profile')

    AccessControl.grant('superadmin')
        .extend('director')

    return AccessControl
})

module.exports.roles = roles()