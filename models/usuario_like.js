const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('usuario_like', {
    usuario_idusuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'usuario',
        key: 'idusuario'
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
    tableName: 'usuario_like',
    timestamps: false,
    indexes: [
      {
        name: "fk_table1_usuario3_idx",
        using: "BTREE",
        fields: [
          { name: "usuario_idusuario" },
        ]
      },
      {
        name: "fk_table1_like3_idx",
        using: "BTREE",
        fields: [
          { name: "like_idlike" },
        ]
      },
    ]
  });
};
