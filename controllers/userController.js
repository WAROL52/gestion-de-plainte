import bcrypt from "bcrypt";
import { sendEmail } from "../tools/mailer.js";
import { templateEmail } from "../tools/templateMsg.js";

const salt = bcrypt.genSaltSync(10);

export class User {
  static async register(request, reply) {
    if (request.method == "GET") {
      return reply.template("templates/register.ejs", { user: null });
    }

    if (request.body.motdepasse1 != request.body.motdepasse2) {
      return reply.template("templates/register.ejs", {
        msgInfo: JSON.stringify(request.body),
        formBody: request.body,
      });
    }
    request.body.motdepasse = bcrypt.hashSync(request.body.motdepasse1, salt);
    delete request.body.motdepasse1;
    delete request.body.motdepasse2;
    const UserModel = reply.models.User;
    // const msg=templateEmail()
    // sendEmail(
    //     "confirmation de mots de passe",
    //     msg,
    //     request.body.email
    //   );
    UserModel.create(request.body);
    return reply.redirect("/login");
  }
  static async login(request, reply) {
    if (request.method == "POST") {
      const user = await reply.models.User.findOne({
        where: {
          email: request.body.email,
        },
      });
      if (
        user &&
        bcrypt.compareSync(request.body.motdepasse, user.motdepasse)
      ) {
        request.session.set("user", user);
        return reply.redirect("/user/dashboard");
      }
      return reply.template("templates/login.ejs", {
        msgError:
          "L'adresse e-mail ou le mot de passe que vous avez entré n'est pas valide",
      });
    }
    return reply.template("templates/login.ejs", { user: null });
  }
  static async logout(request, reply) {
    request.session.delete();
    return reply.redirect("/login");
  }
  static async forgotPassword(request, reply) {
    if (request.method == "POST") {
      return reply.redirect("/login");
    }
    return reply.template("templates/forgot-password.ejs", { user: null });
  }
  static async settings(request, reply) {
    return reply.template("templates/index.ejs", { user: null });
  }
  static async profile(request, reply) {
    const user=request.session.get('user')
    if(user){
      return reply.template("templates/profileUser.ejs", { user });
    }
    return reply.redirect('/')
  }
}
