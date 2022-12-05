import { Dashboard, NAV_ITEMS } from "../controllers/dashboardController.js";
const pathRoute=(path="")=>"/dashboard"+path

export function dashboardRoote(fastify,opt,done) {
    fastify.get('/user/dashboard',Dashboard.index)
    NAV_ITEMS.map(element=>{
        element.liens.map(lien=>{
            lien.items.map(item=>{
                fastify.get(item.href,Dashboard[item.controller]||(()=>"salu"))
                
            })
        })
    })
    // done()
}