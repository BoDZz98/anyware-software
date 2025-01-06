"use client";
import { Button, List, Stack } from "@mui/material";
import React, { useEffect } from "react";
import QuizCard from "./quiz-card";
import { announcementObj, quizObj } from "@/types/types";
import AnnouncementsCard from "./announcements-card";
import Link from "next/link";
import { getData } from "@/util/api-services";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { dataAction } from "@/store/data-slice";

/* <Box> */
const text =
  "Here we are, are you ready to fight? Dont worry, we prepared some tips to be ready for your exams.";
const text2 = "Nothing happens until somthing moves - Albert Einstein";
const anyText = "Any text any text any text";

const Dashboard = () => {
  const dispatch = useDispatch();

  const { quizzes, announcments } = useSelector(
    (state: RootState) => state.data
  );

  useEffect(() => {
    const fetchData = async () => {
      const { quizzes, announcements } = await getData();

      dispatch(dataAction.setAnnouncments(announcements));
      dispatch(dataAction.setQuizzes(quizzes));
      // setQuizzes(quizzes);
    };
    fetchData();
  }, [dispatch]);
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
            <Link href="/announcments" className="text-cyan-500">
              All
            </Link>
          </Stack>
          <p className="text-gray-300 text-sm">{anyText}</p>
          {/* Announcments Content --------------------------------------------------------------- */}
          <List>
            {announcments &&
              announcments
                .map((announcment: announcementObj) => (
                  <AnnouncementsCard
                    key={announcment._id}
                    announcment={announcment}
                  />
                ))
                .splice(0, 3)}
          </List>
        </Stack>
        {/* Quiz */}
        <Stack className="p-4 w-1/3 rounded-lg bg-white shadow-md">
          {/* Top ---------------------------- */}
          <Stack direction="row" className="justify-between font-bold text-lg">
            <h1 className=" text-gray-500">{"What's due"}</h1>
            <Link href="/quiz" className="text-cyan-500 ">
              All
            </Link>
          </Stack>
          <p className="text-gray-300 text-sm">{anyText}</p>
          {/* Quiz Content */}
          {quizzes &&
            quizzes
              .map((quiz: quizObj) => <QuizCard key={quiz._id} quiz={quiz} />)
              .slice(0, 2)}
          {/* <QuizCard />
          <Divider />

          <QuizCard /> */}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Dashboard;
