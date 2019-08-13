module.exports = function (sequelize, DataTypes) {

    var Users = sequelize.define("Users", {
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1,20]
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1,20]
            }
        },
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
    })

    return Users

}
