const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('evento_like', {
    evento_idevento: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'evento',
        key: 'idevento'
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
    tableName: 'evento_like',
    timestamps: false,
    indexes: [
      {
        name: "fk_table1_evento1_idx",
        using: "BTREE",
        fields: [
          { name: "evento_idevento" },
        ]
      },
      {
        name: "fk_table1_like2_idx",
        using: "BTREE",
        fields: [
          { name: "like_idlike" },
        ]
      },
    ]
  });
};
