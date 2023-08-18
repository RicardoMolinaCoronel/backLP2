const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('publicacion_comentario', {
    publicacion_idpublicacion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'publicacion',
        key: 'idpublicacion'
      }
    },
    comentario_idcomentario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'comentario',
        key: 'idcomentario'
      }
    }
  }, {
    sequelize,
    tableName: 'publicacion_comentario',
    timestamps: false,
    indexes: [
      {
        name: "fk_table1_publicacion1_idx",
        using: "BTREE",
        fields: [
          { name: "publicacion_idpublicacion" },
        ]
      },
      {
        name: "fk_table1_comentario2_idx",
        using: "BTREE",
        fields: [
          { name: "comentario_idcomentario" },
        ]
      },
    ]
  });
};
