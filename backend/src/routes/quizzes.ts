import { Router } from "express";
import {
  createQuiz,
  deleteQuiz,
  getQuizzes,
  updateQuiz,
} from "../controllers/quizzes";

const router = Router();

router.get("/getquizzes", getQuizzes);
router.post("/createQuiz", createQuiz);
router.patch("/updateQuiz", updateQuiz);
router.delete("/deleteQuiz", deleteQuiz);

export default router;
