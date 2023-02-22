const { Department, Position, Employee } = require('../models');
const {Sequelize} = require('sequelize');

class Controller {
    static async getDepartment(req, res, next) {
        try {
            const data = await Department.findAll({
                attributes: {
                    exclude: ['createdAt', 'updatedAt']
                }
            })
            res.status(200).json(data)
        } catch (error) {
            next(error)
        }
    }

    static async getDepartmentById(req, res, next) {
        try {
            const data = await Department.findByPk(req.params.id, {
                attributes: {
                    exclude: ['createdAt', 'updatedAt']
                },
                include: [Position]
            })
            if (!data) {
                throw {name: 'NotFound'}
            }
            res.status(200).json(data)
        } catch (error) {
            next(error)
        }
    }

    static async createDepartment(req, res, next) {
        try {
            let { nama_department } = req.body
            const data = await Department.create({
                nama_department
            })
            res.status(201).json({id: data.id, nama_department: data.nama_department})
        } catch (error) {
            next(error)
        }
    }

    static async updateDepartment(req, res, next) {
        try {
            let { nama_department } = req.body
            const department = await Department.findByPk(req.params.id)
            if (!department) {
                throw {name: 'NotFound'}
            }
            const data = await Department.update({
                nama_department
            }, {
                where: {
                    id: req.params.id
                }
            })
            res.status(200).json({message: `Department with the name ${department.nama_department} successfully updated`})
        } catch (error) {
            next(error)
        }
    }

    static async deleteDepartment(req, res, next) {
        try {
            const department = await Department.findByPk(req.params.id)
            if (!department) {
                throw {name: 'NotFound'}
            }
            const data = await Department.destroy({
                where: {
                    id: req.params.id
                }
            })
            res.status(200).json({message: `Department with the name ${department.nama_department} successfully deleted`})
        } catch (error) {
            next(error)
        }
    }

}

module.exports = Controller