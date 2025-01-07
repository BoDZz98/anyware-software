import { announcementObj } from "@/types/types";
import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
} from "@mui/material";
import React from "react";

type AnnouncementsCardprops = {
  announcment: announcementObj;
};

const AnnouncementsCard = ({ announcment }: AnnouncementsCardprops) => {
  return (
    <ListItem data-testid="announcementsCard">
      <ListItemAvatar>
        <Avatar />
      </ListItemAvatar>
      <Stack direction="row" className="items-center  w-full">
        <ListItemText
          primary={announcment.title}
          secondary={announcment.subTitle}
          className="w-1/3"
          slotProps={{
            primary: { className: "text-gray-900" },
            secondary: { className: "text-gray-400" },
          }}
        />
        <p className="text-gray-400 w-2/3 pl-3 border-l-4">
          {announcment.topic}
        </p>
      </Stack>
    </ListItem>
  );
};

export default AnnouncementsCard;
