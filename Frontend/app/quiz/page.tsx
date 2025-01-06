"use client";
import { AddBox } from "@mui/icons-material";
import { IconButton, Stack } from "@mui/material";
import React, { useState } from "react";
import Masonry from "@mui/lab/Masonry";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import QuizCard from "@/components/dashboard/quiz-card";
import { quizObj } from "@/types/types";
import QuizDialog from "@/components/dialogs/quiz-dialog";

const QuizPage = () => {
  const quizzes = useSelector((state: RootState) => state.data.quizzes);

  const [createDialog, setCreateDialog] = useState(false);

  const handleClickOpen = () => setCreateDialog(true);
  const handleClose = () => setCreateDialog(false);

  return (
    <Stack spacing={3} className="p-5 w-3/4 ">
      <Stack
        spacing={2}
        direction="row"
        sx={{ justifyContent: "space-between" }}
      >
        <h1 className="text-4xl font-bold text-cyan-500">All Quizzes</h1>
        <IconButton
          aria-label="add"
          className="text-cyan-500"
          size="large"
          onClick={() => handleClickOpen()}
        >
          <AddBox fontSize="large"/>
        </IconButton>
      </Stack>
      <Masonry columns={3} spacing={2}>
        {quizzes.map((quiz: quizObj) => (
          <QuizCard key={quiz._id} quiz={quiz} updatable />
        ))}
      </Masonry>
      {/* Dialog---------------------------------------------------- */}
      <QuizDialog open={createDialog} handleClose={handleClose.bind(null)} />
    </Stack>
  );
};

export default QuizPage;
