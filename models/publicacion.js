const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('publicacion', {
    idpublicacion: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    titulo: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    descripcion: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    fechacreacion: {
      type: DataTypes.DATE,
      allowNull: true
    },
    urlimg: {
      type: DataTypes.STRING(500),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'publicacion',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idpublicacion" },
        ]
      },
    ]
  });
};
