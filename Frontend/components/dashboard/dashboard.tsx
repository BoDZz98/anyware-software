import {
  Avatar,
  Button,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
} from "@mui/material";
import React from "react";
import QuizCard from "./quiz-card";

/* <Box> */
const text =
  "Here we are, are you ready to fight? Dont worry, we prepared some tips to be ready for your exams.";
const text2 = "Nothing happens until somthing moves - Albert Einstein";
const anyText = "Any text any text any text";
const Dashboard = () => {
  return (
    <Stack spacing={3} className="p-5">
      <Stack spacing={2} className="p-8 rounded-lg bg-white shadow-md">
        <h1 className="text-4xl font-bold text-cyan-500">Exams Time</h1>
        <p className="text-gray-500">{text}</p>
        <p className="text-gray-300 font-serif">{text2}</p>
        <Button
          variant="contained"
          className="w-fit font-bold px-8 py-4 bg-gradient-to-l from-cyan-500 via-cyan-600 to-customBlue"
        >
          View exams tips
        </Button>
      </Stack>
      <Stack direction="row" spacing={3}>
        {/* Announcments */}
        <Stack className="p-4 w-2/3 h-fit rounded-lg bg-white shadow-md">
          {/* Top --------------------------------------------------------------- */}
          <Stack direction="row" className="justify-between font-bold text-lg">
            <h1 className="text-gray-500">Announcements</h1>
            <h1 className="text-cyan-500">All</h1>
          </Stack>
          <p className="text-gray-300 text-sm">{anyText}</p>
          {/* Announcments Content --------------------------------------------------------------- */}
          <List>
            <ListItem>
              <ListItemAvatar>
                <Avatar />
              </ListItemAvatar>
              <ListItemText
                primary="Photos"
                secondary="Jan 9, 2014"
                className=" w-1/3"
                slotProps={{
                  primary: { className: "text-gray-900" },
                  secondary: { className: "text-gray-400" },
                }}
              />
              <p className="text-gray-400 pl-3 border-l-4"> {text}</p>
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar />
              </ListItemAvatar>
              <ListItemText
                primary="Photos"
                secondary="Jan 9, 2014"
                className=" w-1/3"
                slotProps={{
                  primary: { className: "text-gray-900" },
                  secondary: { className: "text-gray-400" },
                }}
              />
              <p className="text-gray-400 pl-3 border-l-4"> {text}</p>
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar />
              </ListItemAvatar>
              <ListItemText
                primary="Photos"
                secondary="Jan 9, 2014"
                className=" w-1/3"
                slotProps={{
                  primary: { className: "text-gray-900" },
                  secondary: { className: "text-gray-400" },
                }}
              />
              <p className="text-gray-400 pl-3 border-l-4"> {text}</p>
            </ListItem>
          </List>
        </Stack>
        {/* Quiz */}
        <Stack className="p-4 w-1/3 rounded-lg bg-white shadow-md">
          {/* Top ---------------------------- */}
          <Stack direction="row" className="justify-between font-bold text-lg">
            <h1 className=" text-gray-500">{"What's due"}</h1>
            <h1 className="text-cyan-500 ">All</h1>
          </Stack>
          <p className="text-gray-300 text-sm">{anyText}</p>
          {/* Quiz Content */}
          <QuizCard />
          <Divider />

          <QuizCard />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Dashboard;
