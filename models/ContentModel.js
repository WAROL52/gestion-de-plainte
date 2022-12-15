import { DataTypes } from "sequelize";

export class ContentModel {
  id = {
    type: DataTypes.INTEGER,
    primaryKey:true,
    autoIncrement:true
  };
  title = {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  };
  value = {
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