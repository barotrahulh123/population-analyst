const { Sequelize, Model } = require('sequelize');

class State extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        description: Sequelize.TEXT,
      },
      {
        sequelize,
        timestamps: true,
      }
    );

    return this;
  }

  static associate(models) {
    this.hasMany(models.User, {
      foreignKey: 'stateId',
      as: 'users',
    });
  }

}

module.exports = State;
