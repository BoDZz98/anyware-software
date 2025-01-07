"use client";
import { RootState } from "@/store";
import { authAction } from "@/store/auth-slice";
import { Button, Stack } from "@mui/material";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import React from 'react';

export default function Home() {
  const router = useRouter();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);

  const handleLogin = () => {
    dispatch(authAction.login());
    router.push("/dashboard"); // Redirect to dashboard after login
  };

  const handleLogout = () => {
    dispatch(authAction.logout());
    router.push("/"); // Redirect to home after logout
  };

  return (
    <Stack
      className="gap-y-4 h-screen"
      sx={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1 className="text-4xl font-bold text-cyan-500">Home Page</h1>

      {isLoggedIn ? (
        <Button
          variant="contained"
          className="font-bold px-12 py-3 bg-gradient-to-l from-cyan-500 via-cyan-600 to-customBlue"
          onClick={handleLogout}
        >
          Logout
        </Button>
      ) : (
        <Button
          variant="contained"
          className="font-bold px-12 py-3 bg-gradient-to-l from-cyan-500 via-cyan-600 to-customBlue"
          onClick={handleLogin}
        >
          Login
        </Button>
      )}
    </Stack>
  );
}
