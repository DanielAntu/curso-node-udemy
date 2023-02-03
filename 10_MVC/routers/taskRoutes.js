const express = require('express')
const router = express.Router()

const TaskController = require('../controllers/TaslController')

router.get('/add', TaskController.createTask)
router.post('/add', TaskController.createTaskSave)
router.post('/remove', TaskController.removeTask)
router.get('/', TaskController.showTasks)

module.exports = router