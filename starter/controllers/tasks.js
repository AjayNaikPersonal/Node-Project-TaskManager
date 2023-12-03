const Task = require('../models/task')

const getAllTasks =async (req,res)=>{
    const tasks = await Task.find({})
    res.status(200).json({ tasks })
}

const createTask = async (req,res) =>{
    try {
        const task = await Task.create(req.body)
        res.status(201).json({task})
    } catch (error) {
        res.status(500).json(error)
    }
}

const getSingleTask =async (req,res)=>{
    try {
        const {id:taskID} = req.params
        const task = await Task.findOne({_id:taskID});
        if(!task){
            return res.status(404).json({msg:"id not found"})
        }
        res.status(201).json({task})

    } catch (error) {
        res.status(404).json(error)
    }
}

const updateTask =async (req,res) =>{
    try {
        const {id:taskID} = req.params
        const task = await Task.findOneAndUpdate({_id:taskID},  req.body);
        if(!task){
            return res.status(404).json({msg:"id not found"})
        }
        res.status(200).json({ task })

    } catch (error) {
        res.status(404).json(error)
    }
}

const deleteTask =async (req,res) =>{
    try {
        const {id:taskID} = req.params
        const task = await Task.findOneAndDelete({_id:taskID});
        if(!task){
            return res.status(404).json({msg:"id not found"})
        }
        res.status(200).json({task})

    } catch (error) {
        res.status(404).json(error)
    }
}


module.exports = {
    getAllTasks,
    createTask,
    getSingleTask,
    updateTask,
    deleteTask
}