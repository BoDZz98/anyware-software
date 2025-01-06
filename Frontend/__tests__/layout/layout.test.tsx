import RootLayout from "@/app/layout";
import { render, screen } from "@testing-library/react";
import React from "react";
import { vitest } from "vitest";
import { useRouter } from "next/router";

describe("testing layout", () => {
  const pushMock = vitest.fn();
  (useRouter as jest.Mock).mockReturnValue({
    push: pushMock,
  });
  test("testing layout renders correctly ", () => {
    // customRender(<DashboardPage />);
    render(
      <RootLayout>
        <p>children</p>
      </RootLayout>
    );

    // Checking children is rendered
    const children = screen.getByText(/children/i);
    expect(children).toBeInTheDocument();

    // Checking all links are rendered
    const listItems = screen.getAllByRole("link");
    expect(listItems.length).toBe(6);
  });
  test("Testing the links navigate correctly", async () => {
    render(
      <RootLayout>
        <p>children</p>
      </RootLayout>
    );

    const dashboardLink = screen.getByRole("link", { name: /dashboard/i });
    expect(dashboardLink).toHaveAttribute("href", "/dashboard");
  });
});
