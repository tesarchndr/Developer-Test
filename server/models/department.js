'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Department extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Department.hasMany(models.Position, {foreignKey: 'id_department'})
    }
  }
  Department.init({
    nama_department: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Department',
  });
  return Department;
};