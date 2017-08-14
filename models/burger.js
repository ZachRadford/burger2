


module.exports = function(sequelize, DataTypes) {
    var Burgers = sequelize.define("burgers", {
            burger_name: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {                 
                    len: [1, 144]
                }
            },
            devoured: {
                type: DataTypes.BOOLEAN,
                defaultValue: false
            },
            currTime: DataTypes.DATE
        });
  return Burgers;
};