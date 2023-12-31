import Sequelize, { Model } from "sequelize";
import bcrypt from "bcryptjs";

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        username: Sequelize.STRING,
        password: Sequelize.VIRTUAL, //When it is VIRTUAL it does not exist in the database
        password_hash: Sequelize.STRING,
        stateId: Sequelize.INTEGER
      },
      {
        sequelize,
        timestamps: true, //If it's false do not add the attributes (updatedAt, createdAt).
      }
    );

    this.addHook("beforeSave", async (user) => {
      if (user.password) {
        user.password_hash = await bcrypt.hash(user.password, 8);
      }
    });
    

    return this;
  }

  static associate(models) {
    this.belongsTo(models.State, {
      foreignKey: 'stateId',
      as: 'state',
    });
  }
  
  checkPassword(password) {
    return bcrypt.compare(password, this.password_hash);
  }
}


export default User;
