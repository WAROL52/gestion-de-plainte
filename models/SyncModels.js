import { Sequelize, Model, DataTypes } from "sequelize"
import { sequelize } from "./dbConfig.js";
console.log(`
DEBUT Sync
`);
// console.log(sequelize.models);
// Object.values(models).map((model)=>{
//     return sequelize.define(model.tableName,new model(),model.options)
// });

(async () => {
  await sequelize.sync({force:true});
  console.log(`
FIN Sync
`);
})();