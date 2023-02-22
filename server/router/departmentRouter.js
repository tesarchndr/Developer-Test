const express = require('express');
const router = express.Router();
const Controller = require('../controllers/departmentController')

router.get('/', Controller.getDepartment)
router.post('/', Controller.createDepartment)
router.put('/:id', Controller.updateDepartment)
router.get('/:id', Controller.getDepartmentById)
router.delete('/:id', Controller.deleteDepartment)

module.exports = router;