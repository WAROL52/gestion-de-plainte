import { User } from "../controllers/userController.js"




export function userRoote(fastify,opt,done) {

    fastify.get('/forgot-password',User.forgotPassword)
    fastify.post('/forgot-password',User.forgotPassword)

    fastify.get('/register',User.register)
    fastify.post('/register',User.register)

    fastify.post('/login',User.login)
    fastify.get('/login',User.login)

    fastify.get('/logout',User.logout)


    fastify.get('/user/settings',User.settings)
    fastify.get('/user/profile',User.profile)
    
    // done()
}