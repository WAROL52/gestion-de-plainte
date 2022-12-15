export class Plainte {
  static async index(request, reply) {
    const user = request.session.get("user");
    if (user) {
      return reply.template("templates/dashboard.ejs", { user, NAV_ITEMS });
    }
    return reply.redirect("/");
  }
  static async depotPlainte(request, reply) {
    // if(request.method="post")
    if(request.method=="POST"){
      // console.log(await request.file());
      return {
        ponse:"warol"
      }
    }
    const user = request.session.get("user");
    return reply.template("templates/plainte.ejs", { user });
  }
  static async progrssionPlainte(request, reply) {
    const user = request.session.get("user");
    return reply.template("templates/plainteProgression.ejs", { user })
  }
}
