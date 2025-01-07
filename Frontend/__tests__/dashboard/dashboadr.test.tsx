import { render, screen } from "@testing-library/react";
import DashboardPage from "@/app/dashboard/page";
import React from "react";
import { useSelector } from "react-redux";
import { mockState } from "@/vitestSetup";

describe("Testing the dashboard page", () => {
  test("testing dashboard renders correctly", () => {
    // @ts-expect-error aaa
    (useSelector as jest.Mock).mockReturnValue(mockState.data);

    render(<DashboardPage />);

    // screen.debug();
    const loginBttn = screen.getByRole("button", { name: /View exams tips/i });
    expect(loginBttn).toBeInTheDocument();

    // Check announcments are rendered
    const announcementsCard = screen.getAllByTestId("announcementsCard");
    expect(announcementsCard.length).toBe(1);

    // Check quizzes are rendered
    const quizzesCard = screen.getAllByTestId("quizzesCard");
    expect(quizzesCard.length).toBe(1);
  });
});
