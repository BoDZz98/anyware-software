"use client";
import { RootState } from "@/store";
import { authAction } from "@/store/auth-slice";
import { Logout, Mail, Notifications, Search } from "@mui/icons-material";
import {
  Avatar,
  Badge,
  BadgeProps,
  IconButton,
  Stack,
  styled,
} from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: 3,
    top: 6,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
    backgroundColor: "#06b6d4 ",
  },
}));

const TopBar = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);

  const handleLogout = () => {
    dispatch(authAction.logout());
    router.push("/"); // Redirect to home after logout
  };

  if (isLoggedIn) {
    return (
      <Stack
        direction="row"
        className="px-5 py-6 bg-white"
        // spacing={2}
        sx={{ justifyContent: "space-between" }}
      >
        <h1 className="text-3xl font-bold text-gray-500 ">
          Welcome Abdelrahman
        </h1>
        <Stack
          direction="row"
          className=" w-2/5"
          spacing={2}
          sx={{ alignItems: "center" }}
        >
          <div className="w-4/5 relative">
            <div className="absolute top-3 flex items-center ps-3 pointer-events-none">
              <Search className="text-gray-500" />
            </div>
            <input
              type="search"
              className="block w-full p-3 ps-10 text-sm text-gray-500 border border-gray-300   focus:ring-cyan-500 focus:border-cyan-500 rounded-full"
              placeholder="Search "
            />
          </div>
          <StyledBadge badgeContent={1} color="primary" overlap="circular">
            <Notifications fontSize="large" className="text-cyan-500 " />
          </StyledBadge>

          <StyledBadge badgeContent={2}>
            <Mail fontSize="large" className="text-cyan-500 " />
          </StyledBadge>
          <Avatar sx={{ bgcolor: " #06b6d4 " }}>AE</Avatar>

          <IconButton className="text-cyan-500 " size="large">
            <Logout fontSize="inherit" onClick={handleLogout} />
          </IconButton>
        </Stack>
      </Stack>
    );
  }
};

export default TopBar;
