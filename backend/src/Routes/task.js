import express from "express";
import taskController from "../Controllers/tasks.js";

const router = express.Router();

router
  .route("/")
  .get(taskController.gettasks)
  .post(taskController.createtasks);

router
  .route("/:id")
  .put(taskController.updatetask)
  .delete(taskController.deletetask);

export default router;