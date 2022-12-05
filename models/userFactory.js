import { DataTypes } from "sequelize";

export class UserFactory {
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
