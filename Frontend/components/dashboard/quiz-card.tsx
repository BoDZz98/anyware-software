import { dataAction } from "@/store/data-slice";
import { quizObj } from "@/types/types";
import { deleteQuiz } from "@/util/api-services";
import { Delete, Edit, HourglassEmpty } from "@mui/icons-material";
import { Button, Card, CardContent, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import QuizDialog from "../dialogs/quiz-dialog";

type QuizCardProps = { quiz: quizObj; updatable?: boolean };

const QuizCard = ({ quiz, updatable }: QuizCardProps) => {
  const dispatch = useDispatch();
  const [updateDialog, setUpdateDialog] = useState(false);

  const handleClickOpen = () => setUpdateDialog(true);
  const handleClose = () => setUpdateDialog(false);

  const deleteHandler = async (quizId: string) => {
    const allQuizzes = await deleteQuiz(quizId);
    dispatch(dataAction.setQuizzes(allQuizzes));
  };

  return (
    <Card sx={{ maxWidth: 345 }} className="shadow-none">
      <CardContent>
        <Typography
          variant="subtitle1"
          sx={{ color: "#6b7280 ", fontSize: "1.5rem" }}
        >
          <HourglassEmpty className="text-cyan-500" />
          {quiz.title}
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: "#9ca3af ", fontSize: "1.2rem" }}
        >
          Course: {quiz.course} <br />
          Topic: {quiz.topic} <br />
          Due to: {quiz.dueDate}
        </Typography>
        <Button
          variant="outlined"
          className="w-full border-2 mt-5 font-bold rounded-xl border-cyan-500 text-cyan-500 "
        >
          Start Quiz
        </Button>
        {updatable && (
          <Stack direction="row" className="mt-2 justify-between gap-x-2">
            <Button
              variant="text"
              color="error"
              className="w-full"
              startIcon={<Delete />}
              onClick={() => deleteHandler(quiz._id!)}
            >
              Delete
            </Button>
            <Button
              variant="text"
              className="text-cyan-500 w-full"
              startIcon={<Edit />}
              onClick={() => handleClickOpen()}
            >
              Edit
            </Button>
            <QuizDialog
              open={updateDialog}
              oldValue={quiz}
              handleClose={handleClose.bind(null)}
            />
          </Stack>
        )}
      </CardContent>
    </Card>
  );
};

export default QuizCard;
