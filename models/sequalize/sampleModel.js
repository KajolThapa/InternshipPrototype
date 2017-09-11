'use strict';

module.exports = function(db, DataTypes) {
  var Level = db.define('Level', {
      id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    Level_Category: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
  }, {
    tableName: 'levels',
    timestamps: true,
    classMethods: {
      associate: function(models) {
        Level.hasMany(models.User);
      }
    }
  });

  return Level;
};
