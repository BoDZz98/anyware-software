import { dataAction } from "@/store/data-slice";
import { quizObj } from "@/types/types";
import { createQuiz, updateQuiz } from "@/util/api-services";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { FloatingLabel } from "flowbite-react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

type QuizDialogProps = {
  open: boolean;
  handleClose: () => void;
  oldValue?: quizObj;
};
const QuizDialog = (props: QuizDialogProps) => {
  const { open, handleClose, oldValue } = props;
  const dispatch = useDispatch();

  const title = oldValue ? "Update Quiz" : "Create Quiz";

  const [inputs, setInputs] = useState({
    title: oldValue ? oldValue.title : "",
    course: oldValue ? oldValue.course : "",
    topic: oldValue ? oldValue.topic : "",
    dueDate: oldValue ? oldValue.dueDate : "",
  });

  const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries(
      formData.entries()
    ) as unknown as quizObj;
    const newQuiz = {
      title: formJson.title,
      course: formJson.course,
      topic: formJson.topic,
      dueDate: formJson.dueDate,
    };

    let allQuizzes;
    // If we are updating call the update function
    if (oldValue) {
      allQuizzes = await updateQuiz(oldValue._id!, newQuiz);
    } else {
      allQuizzes = await createQuiz(newQuiz);
    }
    dispatch(dataAction.setQuizzes(allQuizzes));
    handleClose();
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      data-testid='quiz-dialog'
      PaperProps={{
        component: "form",
        onSubmit: submitHandler,
      }}
    >
      <DialogTitle className="font-bold">{title}</DialogTitle>
      <DialogContent className="px-20 ">
        <p className="h-3"></p>
        <FloatingLabel
          required
          id="title"
          name="title"
          type="text"
          variant="outlined"
          label="Title"
          value={inputs.title}
          onChange={(e) => setInputs({ ...inputs, title: e.target.value })}
        />
        <FloatingLabel
          required
          id="course"
          name="course"
          type="text"
          variant="outlined"
          label="Course"
          value={inputs.course}
          onChange={(e) => setInputs({ ...inputs, course: e.target.value })}
        />
        <FloatingLabel
          required
          id="topic"
          name="topic"
          variant="outlined"
          label="topic"
          value={inputs.topic}
          onChange={(e) => setInputs({ ...inputs, topic: e.target.value })}
        />
        <FloatingLabel
          required
          id="dueDate"
          name="dueDate"
          variant="outlined"
          label="Due Date"
          value={inputs.dueDate}
          onChange={(e) => setInputs({ ...inputs, dueDate: e.target.value })}
        />
      </DialogContent>
      <DialogActions>
        <Button
          size="large"
          className="font-bold"
          color="error"
          onClick={handleClose}
        >
          Cancel
        </Button>
        <Button size="large" className="font-bold" type="submit">
          {oldValue ? "Save" : "Create"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default QuizDialog;
