import { configureStore } from "@reduxjs/toolkit";
import Home from "../../app/page";
import { render, screen } from "@testing-library/react";
import React, { ReactNode } from "react";
import authSlice from "@/store/auth-slice";
import { Provider } from "react-redux";
import { vitest } from "vitest";
import { useRouter } from "next/navigation";
import userEvent from "@testing-library/user-event";

describe("testing homePage", () => {
  const store = configureStore({
    reducer: { auth: authSlice.reducer },
  });
  const customRender = (ui: ReactNode) => {
    return render(<Provider store={store}>{ui}</Provider>);
  };
  const pushMock = vitest.fn();
  (useRouter as jest.Mock).mockReturnValue({
    push: pushMock,
  });
  test("testing homepage renders correctly", () => {
    customRender(<Home />);

    // checkin top bar is not rendered
    const topBar = screen.queryByText(/welcome /i);
    const loginBttn = screen.getByRole("button", { name: /login/i });

    expect(loginBttn).toBeInTheDocument();
    expect(topBar).not.toBeInTheDocument();
  });
  test("Testing the login bttn", async () => {
    const user = userEvent.setup();
    customRender(<Home />);

    const loginBttn = screen.getByRole("button", { name: /login/i });

    await user.click(loginBttn);
    // Expect the to be directed to the dashboard page
    expect(pushMock).toHaveBeenCalledWith("/dashboard");
  });
});
