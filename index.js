import Fastify from "fastify";
import { startRouter } from "./routers/rooter.js";
import fastifyView from "@fastify/view";
import fastifyStatic from "@fastify/static";
import ejs from "ejs";
import path, { dirname, join } from "path";
import { fileURLToPath } from "url";
import { dbModel, sequelize } from "./models/dbConfig.js";
import fastifyFormBody from '@fastify/formbody'
import fastifySecureSession from '@fastify/secure-session' 
import { readFileSync } from "fs";
const __dirname = dirname(fileURLToPath(import.meta.url)); 
const fastify = Fastify({
  logger: true,
}); 

fastify.register(dbModel)
fastify.register(fastifyFormBody)
fastify.register(fastifyStatic, {
  root: join (__dirname,"public"),
  prefix: "/", // optional: default '/'
});
fastify.register(fastifySecureSession, {
  // the name of the session cookie, defaults to 'session'
  cookieName: 'session',
  // adapt this to point to the directory where secret-key is located
  key:readFileSync(join(__dirname,'secret-key')),
  cookie: {
    path: '/'
    // options for setCookie, see https://github.com/fastify/fastify-cookie
  }
})
fastify.addHook('preHandler',dbModel)
// fastify.register(fastifyStatic, {
//   root: __dirname + "\\public",
//   prefix: "/public/", // optional: default '/'
// });
fastify.register(fastifyStatic, {
  root: path.join(__dirname, "./node_modules/bootstrap/dist/css/"),
  prefix: "/bootstrap/css/",
  decorateReply: false,
});
fastify.register(fastifyStatic, {
  root: path.join(__dirname, "./node_modules/bootstrap/dist/js/"),
  prefix: "/bootstrap/js/",
  decorateReply: false,
});
fastify.register(fastifyView, {
  engine: {
    ejs,
  },
});

fastify.register(startRouter);

// Run the server!
fastify.listen({ port: 3000 }, function (err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  // Server is now listening on ${address}
});
 