import { quizObj } from "@/types/types";
import { HourglassEmpty } from "@mui/icons-material";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";
import React from "react";

type QuizCardProps = { quiz: quizObj };

const QuizCard = ({ quiz }: QuizCardProps) => {
  return (
    <Card sx={{ maxWidth: 345 }} className="shadow-none">
      {/* <CardHeader
        avatar={<HourglassEmpty className="text-cyan-500" />}
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        title="Unit 2 Quiz"
      /> */}

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
      </CardContent>
    </Card>
  );
};

export default QuizCard;
