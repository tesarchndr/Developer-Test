const {Department, Position} = require('../models')
const {Sequelize} = require('sequelize')

class Controller {
    static async getPosition(req, res, next) {
        try {
            const data = await Position.findAll({
                attributes: {
                    exclude: ['createdAt', 'updatedAt']
                },
                include: [Department]
            })
            res.status(200).json(data)
        } catch (error) {
            next(error)
        }
    }

    static async getPositionById(req, res, next) {
        try {
            const data = await Position.findByPk(req.params.id, {
                attributes: {
                    exclude: ['createdAt', 'updatedAt']
                },
                include: [Department]
            })
            if (!data) {
                throw {name: 'NotFound'}
            }
            res.status(200).json(data)
        } catch (error) {
            next(error)
        }
    }

    static async createPosition(req, res, next) {
        try {
            let { nama_jabatan, id_department } = req.body
            const data = await Position.create({
                nama_jabatan,
                id_department
            })
            res.status(201).json({id: data.id, nama_jabatan: data.nama_jabatan, id_department: data.id_department})
        } catch (error) {
            next(error)
        }
    }

    static async updatePosition(req, res, next) {
        try {
            let { nama_jabatan, id_department } = req.body
            const position = await Position.findByPk(req.params.id)
            if (!position) {
                throw {name: 'NotFound'}
            }
            const data = await Position.update({
                nama_jabatan,
                id_department
            }, {
                where: {
                    id: req.params.id
                }
            })
            res.status(200).json({message: `Position with id ${req.params.id} updated`})
        } catch (error) {
            next(error)
        }
    }

    static async deletePosition(req, res, next) {
        try {
            const position = await Position.findByPk(req.params.id)
            if (!position) {
                throw {name: 'NotFound'}
            }
            const data = await Position.destroy({
                where: {
                    id: req.params.id
                }
            })
            res.status(200).json({message: `Position with id ${req.params.id} deleted`})
        } catch (error) {
            next(error)
        }
    }
}

module.exports = Controller
