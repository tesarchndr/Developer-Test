const express = require('express')
const router = express.Router()
const Controller = require('../controllers/positionController')

router.get('/', Controller.getPosition)
router.post('/', Controller.createPosition)
router.get('/:id', Controller.getPositionById)
router.put('/:id', Controller.updatePosition)
router.delete('/:id', Controller.deletePosition)

module.exports = router
