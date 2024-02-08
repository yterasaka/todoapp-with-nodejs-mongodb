const Task = require("../models/Task");

const getAllTasks = (req, res) => {
  res.send("タスクを全て取得しました");
};
const createTask = async (req, res) => {
  try {
    const createTask = await Task.create(req.body);
    res.status(200).json(createTask);
  } catch (error) {
    res.status(500).json(error);
  }
};
const getSingleTask = (req, res) => {
  res.send("ある特定のタスクを取得しました");
};
const updateTasks = (req, res) => {
  res.send("ある特定のタスクを更新しました");
};
const deleteTasks = (req, res) => {
  res.send("ある特定のタスクを削除しました");
};

module.exports = {
  getAllTasks,
  createTask,
  getSingleTask,
  updateTasks,
  deleteTasks,
};
