import { DataTypes } from "sequelize";

export class TypeDePlaignantModel {
  typeName = {
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
