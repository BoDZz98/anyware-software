import { announcementObj } from "@/types/types";
import { Avatar, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import React from "react";

type AnnouncementsCardprops = {
  announcment: announcementObj;
};

const AnnouncementsCard = ({ announcment }: AnnouncementsCardprops) => {
  return (
    <ListItem className="">
      <ListItemAvatar>
        <Avatar />
      </ListItemAvatar>
      <ListItemText
        primary={announcment.title}
        secondary={announcment.subTitle}
        className=" w-fit "
        slotProps={{
          primary: { className: "text-gray-900" },
          secondary: { className: "text-gray-400" },
        }}
      />
      <p className="text-gray-400 ml-0 pl-3 border-l-4">{announcment.topic}</p>
    </ListItem>
  );
};

export default AnnouncementsCard;
