const Task = require('../models/Task');

exports.getTasks = async (req, res) => {
    const tasks = await Task.find({ user: req.user.userId });
    res.json(tasks);
};

exports.createTask = async (req, res) => {
    const { title, description, priority } = req.body;
    const task = new Task({ title, description, priority, user: req.user.userId });
    await task.save();
    res.json(task);
};

exports.updateTask = async (req, res) => {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(task);
};

exports.deleteTask = async (req, res) => {
    await Task.findByIdAndDelete(req.params.id);
    res.json({ message: "Task deleted" });
};
