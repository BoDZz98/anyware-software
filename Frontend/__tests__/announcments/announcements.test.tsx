import { render, screen } from "@testing-library/react";
import AnnouncementsPage from "@/app/announcments/page";
import React from "react";
import { useSelector } from "react-redux";
import { mockState } from "@/vitestSetup";
import userEvent from "@testing-library/user-event";

describe("testing announcements Page", () => {
  test(" testing announcements page renders correctly", () => {
    // @ts-expect-error aaa
    (useSelector as jest.Mock).mockReturnValue(mockState.data.announcments);

    render(<AnnouncementsPage />);
    screen.debug();
    // Check announcements cards renders
    const announcementsCard = screen.getAllByTestId("announcementsCard");
    expect(announcementsCard.length).toBe(1);
  });

  test("Testing the add announcement icon button", async () => {
    render(<AnnouncementsPage />);

    // Retrieve the IconButton using its aria-label
    const button = screen.getByRole("button", { name: /add/i });

    await userEvent.click(button);

    // Assert that the create dialog appeared with the proper title
    const dialog = screen.getByTestId("announcement-dialog");
    expect(dialog).toBeInTheDocument();

    const dialogTitle = screen.getByText(/Create Announcement/i);
    expect(dialogTitle).toBeInTheDocument();
  });

  test("Testing the edit announcement icon button", async () => {
    render(<AnnouncementsPage />);

    // Retrieve the IconButton using its aria-label
    const button = screen.getByRole("button", { name: /edit/i });

    await userEvent.click(button);

    // Assert that the edit dialog appeared with the proper title
    const dialog = screen.getByTestId("announcement-dialog");
    expect(dialog).toBeInTheDocument();

    const dialogTitle = screen.getByText(/update Announcement/i);
    expect(dialogTitle).toBeInTheDocument();
  });
});
