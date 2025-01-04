"use client";
import { Mail, Notifications, Search } from "@mui/icons-material";
import { Avatar, Badge, BadgeProps, Stack, styled } from "@mui/material";
import React from "react";

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
  return (
    <Stack
      direction="row"
      className="px-5 py-6 bg-white"
      // spacing={2}
      sx={{ justifyContent: "space-between" }}
    >
      <h1 className="text-3xl font-bold text-gray-500 ">Welcome user</h1>
      <Stack direction="row"  className=" w-2/5" spacing={2} sx={{ alignItems: "center" }}>
        <div className="w-4/5 relative">
          <div className="absolute top-3 flex items-center ps-3 pointer-events-none">
            <Search className="text-gray-500"/>
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

        <Avatar sx={{ bgcolor: " #06b6d4 " }}>A</Avatar>
      </Stack>
    </Stack>
  );
};

export default TopBar;
