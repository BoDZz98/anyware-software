"use client";
import AnnouncementsCard from "@/components/dashboard/announcements-card";
import AnnouncementDialog from "@/components/dialogs/announcement-dialog";
import requireAuth from "@/components/requireAuth";
import { RootState } from "@/store";
import { dataAction } from "@/store/data-slice";
import { announcementObj } from "@/types/types";
import { deleteAnnouncement } from "@/util/api-services";
import { AddBox, Delete, Edit } from "@mui/icons-material";
import { Button, IconButton, Stack } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const AnnouncementsPage = () => {
  const announcments = useSelector(
    (state: RootState) => state.data.announcments
  );
  const dispatch = useDispatch();

  const [createDialog, setCreateDialog] = useState(false);
  const [updateDialog, setUpdateDialog] = useState(false);
  const [selectedAnnouncement, setSelectedAnnouncement] =
    useState<announcementObj | null>(null);

  const handleClickOpen = (
    identifier: string,
    announcement?: announcementObj
  ) => {
    if (identifier === "create") setCreateDialog(true);
    else {
      setSelectedAnnouncement(announcement!);
      setUpdateDialog(true);
    }
  };

  const handleClose = (identifier: string) => {
    if (identifier === "create") setCreateDialog(false);
    else {
      setSelectedAnnouncement(null);
      setUpdateDialog(false);
    }
  };

  const deleteHandler = async (announcementId: string) => {
    const allAnnouncements = await deleteAnnouncement(announcementId);
    dispatch(dataAction.setAnnouncments(allAnnouncements));
  };

  return (
    <Stack spacing={3} className="p-5 w-2/3 ">
      <Stack
        spacing={2}
        direction="row"
        sx={{ justifyContent: "space-between" }}
      >
        <h1 className="text-4xl font-bold text-cyan-500">All Announcements</h1>
        <IconButton
          aria-label="add"
          className="text-cyan-500"
          size="large"
          onClick={() => handleClickOpen("create")}
        >
          <AddBox fontSize="large"/>
        </IconButton>
      </Stack>
      {/* Announcments Content --------------------------------------------------------------- */}
      {announcments &&
        announcments.map((announcment: announcementObj) => (
          <Stack
            className="p-4 h-fit rounded-lg bg-white shadow-md"
            key={announcment._id}
          >
            {/* <List> */}
            <AnnouncementsCard
              key={announcment._id}
              announcment={announcment}
            />
            {/* </List> */}
            <Stack
              direction="row"
              className=" place-self-end gap-x-2 font-bold text-lg"
            >
              <Button
                variant="outlined"
                color="error"
                startIcon={<Delete />}
                onClick={() => deleteHandler(announcment._id!)}
              >
                Delete
              </Button>
              <Button
                variant="outlined"
                className="text-cyan-500"
                startIcon={<Edit />}
                onClick={() => handleClickOpen("update", announcment)}
              >
                Edit
              </Button>
              {/* Update Dialog */}
              {selectedAnnouncement && (
                <AnnouncementDialog
                  open={updateDialog}
                  oldValue={selectedAnnouncement}
                  handleClose={handleClose.bind(null, "update")}
                />
              )}
            </Stack>
          </Stack>
        ))}

      {/* Dialog---------------------------------------------------- */}
      <AnnouncementDialog
        open={createDialog}
        handleClose={handleClose.bind(null, "create")}
      />
    </Stack>
  );
};

export default requireAuth(AnnouncementsPage);
