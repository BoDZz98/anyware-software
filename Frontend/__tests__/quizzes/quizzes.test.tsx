import { render, screen } from "@testing-library/react";
import QuizzesPage from "@/app/quiz/page";
import { mockState } from "@/vitestSetup";
import { useSelector } from "react-redux";
import React from "react";
import userEvent from "@testing-library/user-event";

describe("testing quizzes Page", () => {
  test(" testing announcements page renders correctly", () => {
    // @ts-expect-error aaa
    (useSelector as jest.Mock).mockReturnValue(mockState.data.quizzes);

    render(<QuizzesPage />);

    // Check Quiz cards renders
    const quizzesCard = screen.getAllByTestId("quizzesCard");
    expect(quizzesCard.length).toBe(1);
  });

  test("Testing the add quiz icon button", async () => {
    render(<QuizzesPage />);

    // Retrieve the IconButton using its aria-label
    const button = screen.getByRole("button", { name: /add/i });

    await userEvent.click(button);

    // Assert that the create dialog appeared with the proper title
    const dialog = screen.getByTestId("quiz-dialog");
    expect(dialog).toBeInTheDocument();

    const dialogTitle = screen.getByText(/Create Quiz/i);
    expect(dialogTitle).toBeInTheDocument();
  });

  test("Testing the edit quiz icon button", async () => {
    render(<QuizzesPage />);

  
    // Retrieve the IconButton using its aria-label
    const button = screen.getByRole("button", { name: /edit/i });

    await userEvent.click(button);

    // Assert that the create dialog appeared with the proper title
    const dialog = screen.getByTestId("quiz-dialog");
    expect(dialog).toBeInTheDocument();

    const dialogTitle = screen.getByText(/update Quiz/i);
    expect(dialogTitle).toBeInTheDocument();
  });
});
