const { Department, Position, Employee } = require('../models')
const {Sequelize} = require('sequelize')

class Controller {
    static async getEmployee(req, res, next) {
        try {
            const data = await Employee.findAll({
                attributes: {
                    exclude: ['createdAt', 'updatedAt']
                },
                include: [{
                    model: Position,
                    attributes: {
                        exclude: ['createdAt', 'updatedAt']
                    },
                    include: [{
                        model: Department,
                        attributes: {
                            exclude: ['createdAt', 'updatedAt']
                        }
                    }]
                }]
            })
            res.status(200).json(data)
        } catch (error) {
            next(error)
        }
    }

    static async getEmployeeById(req, res, next) {
        try {
            const data = await Employee.findByPk(req.params.id, {
                attributes: {
                    exclude: ['createdAt', 'updatedAt']
                },
                include: [{
                    model: Position,
                    attributes: {
                        exclude: ['createdAt', 'updatedAt']
                    },
                    include: [{
                        model: Department,
                        attributes: {
                            exclude: ['createdAt', 'updatedAt']
                        }
                    }]
                }]
            })
            if (!data) {
                throw {name: 'NotFound'}
            }
            res.status(200).json(data)
        } catch (error) {
            next(error)
        }
    }

    static async createEmployee(req, res, next) {
        try {
            let { nama, id_jabatan, age, gender, tanggal_lahir, alamat } = req.body
            const data = await Employee.create({ 
                nama, 
                id_jabatan, 
                age,
                gender,
                tanggal_lahir,
                alamat 
            })
            res.status(201).json({id: data.id, nama: data.nama, age: data.age, gender: data.gender, tanggal_lahir: data.tanggal_lahir, alamat: data.alamat})
        } catch (error) {
            next(error)
        }
    }

    static async updateEmployee(req, res, next) {
        try {
            let { nama, id_jabatan, age, gender, tanggal_lahir, alamat } = req.body
            const employee = await Employee.findByPk(req.params.id)
            if (!employee) {
                throw {name: 'NotFound'}
            }
            const data = await Employee.update({
                nama,
                id_jabatan, 
                age, 
                gender, 
                tanggal_lahir, 
                alamat
            }, {
                where: {
                    id: req.params.id
                },
                returning: true
            })
            res.status(200).json({message: `Employee with id ${req.params.id} has been updated`})
        } catch (error) {
            next(error)
        }
    }

    static async deleteEmployee(req, res, next) {
        try {
            const employee = await Employee.findByPk(req.params.id)
            if (!employee) {
                throw {name: 'NotFound'}
            }
            const data = await Employee.destroy({
                where: {
                    id: req.params.id
                }
            })
            res.status(200).json({message: `Employee with id ${req.params.id} has been deleted`})
        } catch (error) {
            next(error)
        }
    }

}

module.exports = Controller