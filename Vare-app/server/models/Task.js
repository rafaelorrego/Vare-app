const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    done: {
        type: Boolean,
        default: false,
    },
    userEmail: {
        type: String,
        required: true,
    },
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
