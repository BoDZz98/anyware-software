import { render, screen } from "@testing-library/react";
import AnnouncmentCard from "@/components/dashboard/announcements-card";

import React from "react";

describe("testing announcment card", () => {
  const announcementObj = {
    _id: "announcment 1",
    title: "School managment",
    subTitle: "managments",
    topic: "anyyyyyyyyyyyyyyyyyyyyyy",
  };

  test("testing announcements card renders correctly", () => {
    render(<AnnouncmentCard announcment={announcementObj} />);

    // Assert that all fields are rendered
    const announcmentTitle = screen.getByText(/School managment/i);
    const announcmentTSubtitle = screen.getByText(/managments/i);
    const announcmentTopic = screen.getByText(/anyyyyyyyyyyyyyyyyyyyyyy/i);

    expect(announcmentTitle).toBeInTheDocument();
    expect(announcmentTSubtitle).toBeInTheDocument();
    expect(announcmentTopic).toBeInTheDocument();
  });
});
