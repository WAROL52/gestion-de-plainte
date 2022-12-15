import { Plainte } from "../controllers/plainteController.js";

export function plainteRoote(fastify,opt,done) {
    fastify.get('/plainte',Plainte.depotPlainte)
    fastify.post('/plainte',Plainte.depotPlainte)
    fastify.get('/progression-plainte',Plainte.progrssionPlainte)
    fastify.post('/recapitulatif',(req,res)=>res.template("templates/components/recapitulatif.ejs",req.body))
}