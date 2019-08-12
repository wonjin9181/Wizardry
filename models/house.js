module.exports = function (sequelize, DataTypes) {
  var House = sequelize.define("House", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    },
    clubId:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    username:{
      type: DataTypes.STRING,
      allowNull: false,
    }
  });

  return House;
};
