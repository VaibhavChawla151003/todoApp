const taskModel = require('../models/taskModel')
const moment = require('moment');

const getAllTask = async (req,res) =>{
    try{
       const task = await taskModel.find({
        userid:req.body.userid,
    });
         res.status(200).json(task);
       }
    catch(error){
       console.log(error)
       res.status(500).json(error);
    }
};

const deleteTask = async(req,res) =>{
    try{
        await taskModel.findOneAndDelete({ _id: req.body.taskId});
        res.status(200).send('Task Deleted');
    }catch(error){
        console.log(error)
        res.status(500).json(error);
    }
};

const editTask = async(req,res) =>{
    try{
        await taskModel.findOneAndUpdate({ _id: req.body.taskId},
            req.body.payload
        );
        res.status(200).send('Edit Successfully');
    }catch(error){
        console.log(error)
        res.status(500).json(error);
    }
};

const addTask = async(req,res) =>{
    try{
        const newTask = new taskModel(req.body);
        await newTask.save();
        res.status(201).send('Task Created')
    }catch(error){
        console.log(error)
        res.status(500).json(error);
    }
}

module.exports = {getAllTask,addTask,editTask,deleteTask}