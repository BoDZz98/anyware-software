import { render, screen } from "@testing-library/react";
import AnnouncmentDialog from "@/components/dialogs/announcement-dialog";

import React from "react";
import { vi } from "vitest";
import userEvent from "@testing-library/user-event";

describe("testing announcment dialog", () => {
  const announcementObj = {
    _id: "announcment 1",
    title: "School managment",
    subTitle: "managments",
    topic: "anyyyyyyyyyyyyyyyyyyyyyy",
  };

  const handleCloseMock = vi.fn();
  test("testing announcements dialog renders correctly", () => {
    render(
      <AnnouncmentDialog
        open={true}
        // oldValue={announcementObj}
        handleClose={handleCloseMock}
      />
    );

    // Assert that all fields are rendered
    const announcmentTitle = screen.getByLabelText("Title");
    const announcmentTSubtitle = screen.getByLabelText(/Subtitle/i);
    const announcmentTopic =
      screen.getByPlaceholderText(/Let's talk about.../i);

    expect(announcmentTitle).toBeInTheDocument();
    expect(announcmentTSubtitle).toBeInTheDocument();
    expect(announcmentTopic).toBeInTheDocument();

    // assert the action buttons are rendered
    const createButton = screen.getByRole("button", { name: /create/i });
    const cancelButton = screen.getByRole("button", { name: /cancel/i });

    expect(createButton).toBeInTheDocument();
    expect(cancelButton).toBeInTheDocument();
  });

  test("testing announcements card renders correctly, with oldValue prop", () => {
    render(
      <AnnouncmentDialog
        open={true}
        oldValue={announcementObj}
        handleClose={handleCloseMock}
      />
    );

    // Assert that all fields are rendered, with the rigt values
    const announcmentTitleField = screen.getByDisplayValue(/School managment/i);
    const announcmentTSubtitleField = screen.getByDisplayValue(/managments/i);
    const announcmentTopicField = screen.getByDisplayValue(
      /anyyyyyyyyyyyyyyyyyyyyyy/i
    );

    expect(announcmentTitleField).toBeInTheDocument();
    expect(announcmentTSubtitleField).toBeInTheDocument();
    expect(announcmentTopicField).toBeInTheDocument();

    const saveButton = screen.getByRole("button", { name: /save/i });
    expect(saveButton).toBeInTheDocument();
  });

  test("testing the action buttons", async () => {
    const user = userEvent.setup();
    render(<AnnouncmentDialog open={true} handleClose={handleCloseMock} />);

    // assert the action buttons are rendered
    const cancelButton = screen.getByRole("button", { name: /cancel/i });

    await user.click(cancelButton);

    expect(handleCloseMock).toHaveBeenCalled();
  });
});
