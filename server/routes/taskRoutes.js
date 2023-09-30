const express = require('express');
const { addTask, getAllTask ,editTask,deleteTask} = require('../controllers/taskCtrl');


//router object
const router = express.Router();

//routes
//add task POST method
router.post('/add-task',addTask)

//edit task POST method
router.post('/edit-task',editTask)

//delete task POST method
router.post('/delete-task',deleteTask)

//get task
router.post("/get-task",getAllTask)
module.exports = router;