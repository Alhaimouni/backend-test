'use strict';

function createComentModel(sequelize, DataTypes) {
  return (
    sequelize.define('comment', {
      content: { type: DataTypes.STRING, allowNull: false },
      postId: { type: DataTypes.INTEGER, allowNull: false },
      userId: { type: DataTypes.INTEGER, allowNull: false },
    })
  )
}
module.exports = { createComentModel };
