const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Reply extends Model {}

Reply.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    text: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    comment_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'comment', 
            key: 'id'
        }
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'user',
            key: 'id'
        }
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'reply',
  }
);


module.exports = Reply