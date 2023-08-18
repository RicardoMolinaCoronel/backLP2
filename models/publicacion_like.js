const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('publicacion_like', {
    publicacion_idpublicacion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'publicacion',
        key: 'idpublicacion'
      }
    },
    like_idlike: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'like',
        key: 'idlike'
      }
    }
  }, {
    sequelize,
    tableName: 'publicacion_like',
    timestamps: false,
    indexes: [
      {
        name: "fk_table1_publicacion_idx",
        using: "BTREE",
        fields: [
          { name: "publicacion_idpublicacion" },
        ]
      },
      {
        name: "fk_table1_like1_idx",
        using: "BTREE",
        fields: [
          { name: "like_idlike" },
        ]
      },
    ]
  });
};
