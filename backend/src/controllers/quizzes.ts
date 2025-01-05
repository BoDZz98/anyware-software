import { Request, Response } from "express";
import Quiz, { quizObj } from "../models/quizModel";

export const createQuiz = async (req: Request, res: Response) => {
  const newQuiz = req.body as quizObj;
  console.log(newQuiz);
  try {
    const createdQuiz = await Quiz.create(newQuiz);
    return res.status(201).json({ message: "Quiz created", createdQuiz });
  } catch (error) {
    console.log("error in Quiz controller, createReview");
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
  const { quizId, newQuiz } = (await req.body) as {
    quizId: string;
    newQuiz: quizObj;
  };
  try {
    await Quiz.findByIdAndUpdate(quizId, newQuiz);

    return res.status(201).json({ message: "Quiz updated" });
  } catch (error) {
    console.log("error in Quiz controller, updateQuiz");
    return res.status(500).json({ message: "Error updating Quiz" });
  }
};

export const deleteQuiz = async (req: Request, res: Response) => {
  const quizId = await req.body as string;
  // console.log(reviewId, email);

  try {
    await Quiz.findByIdAndDelete(quizId);

    return res.status(201).json({ message: "Quiz deleted" });
  } catch (error) {
    console.log("error in Quiz controller, deleteQuiz");
    return res.status(500).json({ message: "Error deleting Quiz" });
  }
};
