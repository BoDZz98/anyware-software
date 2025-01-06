import { Request, Response } from "express";
import Quiz, { quizObj } from "../models/quizModel";

export const createQuiz = async (req: Request, res: Response) => {
  const newQuiz = req.body as quizObj;
  try {
    await Quiz.create(newQuiz);
    const quizzes = await Quiz.find();
    return res.status(201).json({ message: "Quiz created", quizzes });
  } catch (error) {
    console.log("error in Quiz controller, createQuiz");
    return res.status(500).json({ message: "Error creating Quiz" });
  }
};

export const getQuizzes = async (req: Request, res: Response) => {
  try {
    const quizzes = await Quiz.find();
    // console.log(quizzes);
    return res.status(201).json({ quizzes });
  } catch (error) {
    console.log("error in Quizzes controller, getQuizzes");
    return res.status(500).json({ message: "Error fetching Quizzes" });
  }
};

export const updateQuiz = async (req: Request, res: Response) => {
  const newQuiz = req.body as quizObj;

  try {
    await Quiz.findByIdAndUpdate(newQuiz._id, newQuiz);
    const quizzes = await Quiz.find();

    return res.status(201).json({ message: "Quiz updated", quizzes });
  } catch (error) {
    console.log("error in Quiz controller, updateQuiz");
    return res.status(500).json({ message: "Error updating Quiz" });
  }
};

export const deleteQuiz = async (req: Request, res: Response) => {
  const { quizId } = req.body as { quizId: string };
  try {
    await Quiz.findByIdAndDelete(quizId);
    const quizzes = await Quiz.find();

    return res.status(201).json({ message: "Quiz deleted", quizzes });
  } catch (error) {
    console.log("error in Quiz controller, deleteQuiz");
    return res.status(500).json({ message: "Error deleting Quiz" });
  }
};
