import { Dashboard, NAV_ITEMS } from "../controllers/dashboardController.js";
const pathRoute=(path="")=>"/dashboard"+path

export function dashboardRoote(fastify,opt,done) {
    fastify.get('/user/dashboard',Dashboard.index)
    fastify.get("/publications",Dashboard.publications)
    NAV_ITEMS.map(element=>{
        element.liens.map(lien=>{
            lien.items.map(item=>{
                fastify.get(item.href,Dashboard[item.controller]||(()=>"dashboard pas encore fait. 404"))
                
            })
        })
    })
    // done()
}