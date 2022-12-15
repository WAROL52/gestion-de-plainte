import { DataTypes } from "sequelize";

export class MotifsPlainteModel {
  position = {
    type: DataTypes.INTEGER,
    allowNull: true,
    unique: true,
  };
  motifs = {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
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