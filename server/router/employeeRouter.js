const express = require('express')
const router = express.Router()
const Controller = require('../controllers/employeeController')

router.get('/', Controller.getEmployee)
router.post('/', Controller.createEmployee)
router.get('/:id', Controller.getEmployeeById)
router.put('/:id', Controller.updateEmployee)
router.delete('/:id', Controller.deleteEmployee)

module.exports = router

