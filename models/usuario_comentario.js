const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('usuario_comentario', {
    usuario_idusuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'usuario',
        key: 'idusuario'
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
    tableName: 'usuario_comentario',
    timestamps: false,
    indexes: [
      {
        name: "fk_table1_usuario4_idx",
        using: "BTREE",
        fields: [
          { name: "usuario_idusuario" },
        ]
      },
      {
        name: "fk_usuario_comentario_comentario1_idx",
        using: "BTREE",
        fields: [
          { name: "comentario_idcomentario" },
        ]
      },
    ]
  });
};
