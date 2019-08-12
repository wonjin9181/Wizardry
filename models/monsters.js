module.exports = function (sequelize, DataTypes) {
  var Monsters = sequelize.define("Monsters", {
    monsterName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 50]
      }
    },

    strength: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 50]
      }
    },
    monsterDescription: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1,100]
      }
    },
    monsterImg: {
      type: DataTypes.STRING,
      allowNull: false
    },
  });


  return Monsters;
};
