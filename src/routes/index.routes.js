import { Router } from "express";
import {renderTask, addTask, renderTaskEdit, editTask, deleteTask, toggleTask} from '../controllers/tasks.controller';

const router = Router();

router.get("/", renderTask);

router.post('/tasks/add', addTask);

router.get("/about", (req, res) => {
  res.render("about");
});

router.get("/task/:id/edit", renderTaskEdit);
router.post('/task/:id/edit', editTask);

router.get('/task/:id/delete', deleteTask);
router.get('/task/:id/toggleDone', toggleTask);
export default router;
