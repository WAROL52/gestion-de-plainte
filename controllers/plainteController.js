export class Plainte {
  static async index(request, reply) {
    const user = request.session.get("user");
    if (user) {
      return reply.view("templates/dashboard.ejs", { user, NAV_ITEMS });
    }
    return reply.redirect("/");
  }
  static async depotPlainte(request, reply) {
    const user = request.session.get("user");
    return reply.view("templates/plainte.ejs", { user });
  }
  static async progrssionPlainte(request, reply) {
    const user = request.session.get("user");
    return reply.view("templates/plainteProgression.ejs", { user })
  }
}
