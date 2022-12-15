import { DataTypes, Sequelize } from "sequelize";
import { UserModel } from "./UserModel.js";
import path, { dirname, join } from "path";
import { fileURLToPath } from "url";
import { ContentModel } from "./ContentModel.js";
import { PlainteModel } from "./PlainteModel.js";
import { ServiceCntModel } from "./ServiceCntModel.js";
import { TypeDePlaignantModel } from "./typeDePlaignantModel.js";
import { PlaignantModel } from "./plaignantModel.js";
import { ModeReceptionModel } from "./ModeReceptionModel.js";
import { Categories_demploi_visees_par_la_plainte_Model } from "./Categories_demploi_visees_par_la_plainte_Model.js";
import { MotifsPlainteModel } from "./MotifsPlainteModel.js";
const __dirname = dirname(fileURLToPath(import.meta.url));
// Option 3: Passing parameters separately (other dialects)
// const sequelize = new Sequelize("gestion_de_plainte", "root", "", {
//   host: "localhost",
//   dialect:
//     "mysql" /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */,
// });
console.log(__dirname);

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: join(__dirname, "database.sqlite3"),
});
try {
  await sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

const Content = sequelize.define("Content", new ContentModel());
const User = sequelize.define("User", new UserModel()); 

const Plaignant=sequelize.define("Plaignant", new PlaignantModel());
const Plainte=sequelize.define("Plainte", new PlainteModel());
const MotifsPlainte=sequelize.define("MotifsPlainte", new MotifsPlainteModel());
const Categories_demploi=sequelize.define("Categories_demploi_visees_par_la_plainte", new Categories_demploi_visees_par_la_plainte_Model());
const ModeReception=sequelize.define("ModeReception", new ModeReceptionModel());
const ServiceCnt=sequelize.define("ServiceCnt", new ServiceCntModel());
const TypeDePlaignant=sequelize.define("TypeDePlaignant", new TypeDePlaignantModel());

const option={
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE'
}
Plaignant.hasMany(Plainte,option)
Plainte.hasMany(TypeDePlaignant,option)
Plainte.hasMany(ModeReception,option)
Plainte.hasMany(Categories_demploi,option)
Plainte.hasMany(MotifsPlainte,option)
Plainte.belongsToMany(ServiceCnt,{through:"ServiceCntParPlainte"})
const dbModel = (request, reply, done) => {
  
  reply.models = {
    User,
    Content,
    Plainte,
    ServiceCnt
  };
  // const view("templates/index.ejs", { user: null })
  const view = reply.view;
  reply.template = async (path, data = {}) => {
    if (typeof data != "object") {
      data = {};
    }
    console.log("(path)->", path);
    console.log(data.recap);
    const contents = await Content.findAll();
    const currentPushed = [];
    data.recap??={}
    const recapValue=(name,defaultValue="")=>data.recap[name]||defaultValue ;
    return reply.view(path, {
      getContent: (title, value = "...") => {
        const content = contents.find((e) => e.title == title);
        if (content) {
          if (content.value != value) {
            content.value = value;
            content.save();
            return value;
          }
          return content.value;
        }
        if (!currentPushed.find((_title) => _title == title)) {
          console.log(".........>> ", title, value);
          currentPushed.push(title);
          Content.create({ title, value }).then((value) => {
            contents.push(value);
          });
        }
        return value;
      },
      models: reply.models,
      ...data,
      recapitulatifs: [
        {
          titre: "Identité du plaignant :",
          data: [
            { titre: "Nom:", value: recapValue("nom")},
            { titre: "Prenom:", value:recapValue("prenom") },
            { titre: "Télephone:", value: recapValue("tel1")},
            { titre: "Email:", value: recapValue("email") },
            { titre: "Type de plaignant:", value: recapValue("type_de_plaignant") },
            { titre: "CIN:", value: recapValue("cin") },
            { titre: "Adresse:", value: recapValue("adresse") },
            {
              titre: "Services CNT sollicité par le plaignant:",
              value: recapValue("adresse").split(","),
            },
          ],
        },
        {
          titre: "Réception de la plainte et dates importantes :",
          data: [
            { titre: "Date de receptioin de la plainte:", value: "Thu Dec 15 2022" },
            { titre: "Date de la 1ere communication:", value: "Thu Dec 15 2022" },
            { titre: "Date de fermeture:", value: "Thu Dec 15 2022" },
            {
              titre: "Mode de reception:",
              value: [
                "Télephone",
                "email"
              ],
            },
            { titre: "Nom et unité administrative du responsable du traitement de la plainte:", text: "bla bla bla..." },
          ],
        },
        {
          titre: "Détails de la plainte sur la qualité de service :",
          data: [
            { titre: "Version des faits detaillée du client:", text: "bla bla bla..." },
            {
              titre: "Unités administratives et catégories d'emploi visées par la plainte:",
              value: [
                "Préposé aux renseignements",
                "Médiateur",
                "Avocat"
              ],
            },
            { titre: "", text: "bla bla bla..." },
          ],
        },
        {
          titre: "Motifs de la plainte:",
          data: [
            {
              titre: "Motifs de la plainte:",
              value: [
                "Préposé aux renseignements",
                "suivi et retours d'appels",
                "Protection confidentialité et renseignement personnels"
              ],
            }
          ],
        },
      ],
    });
  };
  done();
};
export { sequelize, dbModel };
