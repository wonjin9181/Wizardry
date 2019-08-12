module.exports = function (sequelize, DataTypes) {
    var Character = sequelize.define("Character", {
      characterName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      house:{
          type: DataTypes.STRING,
          allowNull: false,
      },
      characterImg:{
          type: DataTypes.STRING,
          allowNull: false
      }
    });
  
    return Character;
  };