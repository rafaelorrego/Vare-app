const Task = require('../models/taskModel');

exports.createTask = async (req, res) => {
    const { name, description, userEmail } = req.body;
    try {
        const newTask = new Task({ name, description, userEmail });
        await newTask.save();
        res.status(201).json(newTask);
    } catch (error) {
        res.status(500).json({ error: 'Error creating task' });
    }
};

exports.getTasks = async (req, res) => {
    const { userEmail } = req.query;
    try {
        const tasks = await Task.find({ userEmail });
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching tasks' });
    }
};

exports.updateTask = async (req, res) => {
    const { id } = req.params;
    const { name, description, done } = req.body;
    try {
        const task = await Task.findByIdAndUpdate(id, { name, description, done }, { new: true });
        if (!task) {
            return res.status(404).json({ error: 'Task not found' });
        }
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ error: 'Error updating task' });
    }
};

exports.deleteTask = async (req, res) => {
    const { id } = req.params;
    try {
        const task = await Task.findByIdAndDelete(id);
        if (!task) {
            return res.status(404).json({ error: 'Task not found' });
        }
        res.status(200).json({ message: 'Task deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error deleting task' });
    }
};
