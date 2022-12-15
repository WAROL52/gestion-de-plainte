import { DataTypes } from "sequelize";

export class PlaignantModel {
  nom = {
    type: DataTypes.STRING,
    allowNull: false,
  };
  prenom = {
    type: DataTypes.STRING,
    allowNull: false,
  };
  adresse={
    type: DataTypes.STRING,
  }
  email = {
    type: DataTypes.STRING,
  };
  cin={
    type: DataTypes.STRING,
    allowNull: false,
    unique:true
  }
  tel1={
    type: DataTypes.STRING,
  }
  tel2={
    type: DataTypes.STRING,
  }

  createdAt = {
    type: DataTypes.DATE,
    allowNull: true,
  };
  updatedAt = {
    type: DataTypes.DATE,
    allowNull: true,
  };
}