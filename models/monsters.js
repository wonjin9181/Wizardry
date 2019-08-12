module.exports = function (sequelize, DataTypes) {
  var Monsters = sequelize.define("Monsters", {
    clubName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 50]
      }
    },

    clubMaker: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 50]
      }
    },
    clubDescription: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1,100]
      }
    },
    clubLocation: {
      type: DataTypes.STRING,
      allowNull: true
    },
    password:{
      type: DataTypes.STRING,
      allowNull: false
    },
  

  });


  return Monsters;
};
