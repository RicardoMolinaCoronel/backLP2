const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('evento_comentario', {
    evento_idevento: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'evento',
        key: 'idevento'
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
    tableName: 'evento_comentario',
    timestamps: false,
    indexes: [
      {
        name: "fk_table1_evento2_idx",
        using: "BTREE",
        fields: [
          { name: "evento_idevento" },
        ]
      },
      {
        name: "fk_table1_comentario1_idx",
        using: "BTREE",
        fields: [
          { name: "comentario_idcomentario" },
        ]
      },
    ]
  });
};
