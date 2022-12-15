
import { DataTypes } from "sequelize";

export class Categories_demploi_visees_par_la_plainte_Model {
  position = {
    type: DataTypes.INTEGER,
    allowNull: true,
    unique:true
  };
  categorieName = {
    type: DataTypes.STRING,
    allowNull: false,
    unique:true
  };
  description = {
    type: DataTypes.STRING,
  };

  createdAt = {
    type: DataTypes.DATE,
    allowNull: true,
  };
  updatedAt = {
    type: DataTypes.DATE,
    allowNull: true,
  };
}