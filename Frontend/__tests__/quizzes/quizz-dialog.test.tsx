import { render, screen } from "@testing-library/react";
import QuizDialog from "@/components/dialogs/quiz-dialog";
import React from "react";
import { vi } from "vitest";
import userEvent from "@testing-library/user-event";

describe("testing quiz dialog", () => {
  const quiz = {
    _id: "1",
    title: "Quiz 1",
    course: "Math",
    topic: "Algebra",
    dueDate: "20/1/2025",
  };

  const handleCloseMock = vi.fn();
  test("testing quiz dialog renders correctly", () => {
    render(
      <QuizDialog
        open={true}
        // oldValue={announcementObj}
        handleClose={handleCloseMock}
      />
    );

    // Assert that all fields are rendered
    const quizTitle = screen.getByLabelText(/Title/i);
    const quizCourse = screen.getByLabelText(/Course/i);
    const quizTopic = screen.getByLabelText(/topic/i);
    const quizDueDate = screen.getByLabelText(/Due Date/i);

    expect(quizTitle).toBeInTheDocument();
    expect(quizCourse).toBeInTheDocument();
    expect(quizTopic).toBeInTheDocument();
    expect(quizDueDate).toBeInTheDocument();

    // assert the action buttons are rendered
    const createButton = screen.getByRole("button", { name: /create/i });
    const cancelButton = screen.getByRole("button", { name: /cancel/i });

    expect(createButton).toBeInTheDocument();
    expect(cancelButton).toBeInTheDocument();
  });

  test("testing announcements card renders correctly, with oldValue prop", () => {
    render(
      <QuizDialog open={true} oldValue={quiz} handleClose={handleCloseMock} />
    );

    // Assert that all fields are rendered, with the rigt values
    const quizTitleField = screen.getByDisplayValue(/Quiz 1/i);
    const quizCourseField = screen.getByDisplayValue(/math/i);
    const quizTopicField = screen.getByDisplayValue(/algebra/i);
    const quizDueDateField = screen.getByDisplayValue(/20\/1\/2025/i);

    expect(quizTitleField).toBeInTheDocument();
    expect(quizCourseField).toBeInTheDocument();
    expect(quizTopicField).toBeInTheDocument();
    expect(quizDueDateField).toBeInTheDocument();

    const saveButton = screen.getByRole("button", { name: /save/i });
    expect(saveButton).toBeInTheDocument();
  });

  test("testing the action buttons", async () => {
    const user = userEvent.setup();
    render(<QuizDialog open={true} handleClose={handleCloseMock} />);

    // assert the action buttons are rendered
    const cancelButton = screen.getByRole("button", { name: /cancel/i });

    await user.click(cancelButton);

    expect(handleCloseMock).toHaveBeenCalled();
  });
});
