import { Plainte } from "../controllers/plainteController.js";

export function plainteRoote(fastify,opt,done) {
    fastify.get('/plainte',Plainte.depotPlainte)
    fastify.get('/progression-plainte',Plainte.progrssionPlainte)
}