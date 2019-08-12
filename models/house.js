module.exports = function (sequelize, DataTypes) {
  var House = sequelize.define("House", {
    houseName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    user:{
      type: DataTypes.STRING,
      allowNull: false,
    }
  });

  return House;
};
