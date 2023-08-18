const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('usuario_evento', {
    usuario_idusuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'usuario',
        key: 'idusuario'
      }
    },
    evento_idevento: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'evento',
        key: 'idevento'
      }
    }
  }, {
    sequelize,
    tableName: 'usuario_evento',
    timestamps: false,
    indexes: [
      {
        name: "fk_table1_usuario2_idx",
        using: "BTREE",
        fields: [
          { name: "usuario_idusuario" },
        ]
      },
      {
        name: "fk_table1_evento3_idx",
        using: "BTREE",
        fields: [
          { name: "evento_idevento" },
        ]
      },
    ]
  });
};
