import { dashboardRoote } from "./dashboardRoute.js"
import { plainteRoote } from "./plainteRoute.js"
import { userRoote } from "./userRoute.js"


function home(fastify) {
    
    fastify.get('/',(request, reply) =>{
        const user=request.session.get("user")
        return reply.view("templates/index.ejs",{user})
    })
}

const routes={
    home,
    userRoote,
    plainteRoote,
    dashboardRoote
}

const startRouter=async (fastify,_options)=> {
    Object.values(routes).map(route=>route(fastify,_options))
}


export {
     startRouter
}