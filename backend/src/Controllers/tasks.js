
const taskController = {};
import taskModel from "../Models/task.js";

// SELECT
taskController.gettasks = async (req, res) => {
  const task = await taskModel.find();
  res.json(task);
};

// INSERT
taskController.createtasks = async (req, res) => {
  const { title, description, completed } = req.body;
  const newtasks = new taskModel({ title, description, completed });
  await newtasks.save();
  res.json({ message: "task save" });
};

// DELETE
taskController.deletetask = async (req, res) => {
const deletedtask = await taskModel.findByIdAndDelete(req.params.id);
  if (!deletedtask) {
    return res.status(404).json({ message: "task dont find" });
  }
  res.json({ message: "task deleted" });
};

// UPDATE
taskController.updatetask = async (req, res) => {

  const { title, description, completed  } = req.body;

  await taskModel.findByIdAndUpdate(
    req.params.id,
    {
        title, 
        description, 
        completed
    },
    { new: true }
  );

  res.json({ message: "task update" });
};

export default taskController;