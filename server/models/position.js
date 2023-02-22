'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Position extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Position.belongsTo(models.Department, {foreignKey: 'id_department'})
      Position.hasMany(models.Employee, {foreignKey: 'id_jabatan'})
    }
  }
  Position.init({
    id_department: DataTypes.INTEGER,
    nama_jabatan: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Position',
  });
  return Position;
};