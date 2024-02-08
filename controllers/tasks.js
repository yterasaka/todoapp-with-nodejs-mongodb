const getAllTasks = (req, res) => {
  res.send("タスクを全て取得しました");
};
const createTask = (req, res) => {
  res.send("タスクを新規作成しました");
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
