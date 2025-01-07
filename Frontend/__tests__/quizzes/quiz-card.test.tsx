import { render, screen } from "@testing-library/react";
import QuizCard from "@/components/dashboard/quiz-card";

import React from "react";

describe("testing quiz card", () => {
  const quiz = {
    _id: "1",
    title: "Quiz 1",
    course: "Math",
    topic: "Algebra",
    dueDate: "20/1/2025",
  };

  test("testing quiz card renders correctly", () => {
    render(<QuizCard quiz={quiz} />);

    // Assert that all fields are rendered
    const quizTitle = screen.getByText(/Quiz 1/i);
    const quizCourse = screen.getByText(/Math/i);
    const quizTopic = screen.getByText(/Algebra/i);
    const quizDueDate = screen.getByText(/20\/1\/2025/i);

    expect(quizTitle).toBeInTheDocument();
    expect(quizCourse).toBeInTheDocument();
    expect(quizTopic).toBeInTheDocument();
    expect(quizDueDate).toBeInTheDocument();
  });
});
