const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('usuario_publicacion', {
    usuario_idusuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'usuario',
        key: 'idusuario'
      }
    },
    publicacion_idpublicacion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'publicacion',
        key: 'idpublicacion'
      }
    }
  }, {
    sequelize,
    tableName: 'usuario_publicacion',
    timestamps: false,
    indexes: [
      {
        name: "fk_table1_usuario1_idx",
        using: "BTREE",
        fields: [
          { name: "usuario_idusuario" },
        ]
      },
      {
        name: "fk_table1_publicacion2_idx",
        using: "BTREE",
        fields: [
          { name: "publicacion_idpublicacion" },
        ]
      },
    ]
  });
};
