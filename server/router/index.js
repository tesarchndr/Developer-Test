const express = require('express');
const router = express.Router();
const departmentRouter = require('./departmentRouter')
const positionRouter = require('./positionRouter')
const employeeRouter = require('./employeeRouter')

router.use('/department', departmentRouter)
router.use('/position', positionRouter)
router.use('/employee', employeeRouter)

module.exports = router;
