module.exports = function (sequelize, DataTypes) {

    var Users = sequelize.define("Users", {
        username: {
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
        }

    })

    return Users

}
