import { DataTypes, Sequelize } from "sequelize";
import { UserFactory } from "./userFactory.js";
import path, { dirname, join } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url)); 
// Option 3: Passing parameters separately (other dialects)
// const sequelize = new Sequelize("gestion_de_plainte", "root", "", {
//   host: "localhost",
//   dialect:
//     "mysql" /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */,
// });
console.log(__dirname);

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: join(__dirname,'database.sqlite3')
});
try {
  await sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}


const UserModel = sequelize.define(
  "User",new UserFactory,
  {
    // Other model options go here
  }
);
const dbModel=(request, reply, done)=>{
  reply.models={
    User:UserModel
  }
  
  done() 
} 
export { sequelize ,dbModel};