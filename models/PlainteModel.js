import { DataTypes } from "sequelize";

export class PlainteModel {

  date_de_reception_de_la_plainte={
    type: DataTypes.DATEONLY,
  }
  date_de_la_1ere_communication={
    type: DataTypes.DATEONLY,
  }
  date_de_fermeture={
    type: DataTypes.DATEONLY,
  }

  nom_et_unite_administrative_du_responsable_du_traitement_de_la_plainte={
    type: DataTypes.TEXT,
  }
  version_des_faits_detaillee_du_client={
    type: DataTypes.STRING,
  }
  unites_administratives={
    type: DataTypes.TEXT,
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