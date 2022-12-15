import { DataTypes } from "sequelize";

export class UserModel {
  nom = {
    type: DataTypes.STRING,
    allowNull: false,
  };
  prenom = {
    type: DataTypes.STRING,
    allowNull: false,
  };
  email = {
    type: DataTypes.STRING,
    allowNull: false,
    unique:true
  };
  motdepasse = {
    type: DataTypes.STRING,
    allowNull: false,
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
