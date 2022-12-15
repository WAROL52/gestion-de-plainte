import { DataTypes } from "sequelize";

export class ServiceCntModel {
  position = {
    type: DataTypes.INTEGER,
    allowNull: true,
    unique: true,
  };
  serviceName = {
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
