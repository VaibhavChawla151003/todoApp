const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    userid:{
        type:String,
        required:true
    }, 
    title: {
        type: String,
        required: [true, 'title is required'],
    },
},{timestamps:true})

const taskModel = mongoose.model('tasks', taskSchema);
module.exports = taskModel;