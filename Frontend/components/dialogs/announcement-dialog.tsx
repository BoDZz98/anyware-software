import { dataAction } from "@/store/data-slice";
import { announcementObj } from "@/types/types";
import { createAnnouncement, updateAnnouncement } from "@/util/api-services";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { FloatingLabel, Textarea } from "flowbite-react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

type AnnouncementDialogProps = {
  open: boolean;
  handleClose: () => void;
  oldValue?: announcementObj;
};
const AnnouncementDialog = (props: AnnouncementDialogProps) => {
  const { open, handleClose, oldValue } = props;
  const dispatch = useDispatch();

  const title = oldValue ? "Update Announcement" : "Create Announcement";

  const [inputs, setInputs] = useState({
    title: oldValue ? oldValue.title : "",
    subTitle: oldValue ? oldValue.subTitle : "",
    topic: oldValue ? oldValue.topic : "",
  });

  const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries(
      formData.entries()
    ) as unknown as announcementObj;
    const newAnnouncement = {
      title: formJson.title,
      subTitle: formJson.subTitle,
      topic: formJson.topic,
    };

    let allAnnouncements;
    // If we are updating call the update function
    if (oldValue) {
      allAnnouncements = await updateAnnouncement(
        oldValue._id!,
        newAnnouncement
      );
    } else {
      allAnnouncements = await createAnnouncement(newAnnouncement);
    }
    dispatch(dataAction.setAnnouncments(allAnnouncements));
    handleClose();
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      data-testid='announcement-dialog'
      PaperProps={{
        component: "form",
        onSubmit: submitHandler,
      }}
    >
      <DialogTitle className="font-bold">{title}</DialogTitle>
      <DialogContent className="px-20 ">
        <p className="h-3"></p>
        <FloatingLabel
          required
          id="title"
          name="title"
          type="text"
          variant="outlined"
          label="Title"
          value={inputs.title}
          onChange={(e) => setInputs({ ...inputs, title: e.target.value })}
        />
        <FloatingLabel
          required
          id="subTitle"
          name="subTitle"
          type="text"
          variant="outlined"
          label="Subtitle"
          value={inputs.subTitle}
          onChange={(e) => setInputs({ ...inputs, subTitle: e.target.value })}
        />
        <Textarea
          required
          id="topic"
          name="topic"
          placeholder="Let's talk about..."
          rows={4}
          value={inputs.topic}
          onChange={(e) => setInputs({ ...inputs, topic: e.target.value })}
        />
      </DialogContent>
      <DialogActions>
        <Button
          size="large"
          className="font-bold"
          color="error"
          onClick={handleClose}
        >
          Cancel
        </Button>
        <Button size="large" className="font-bold" type="submit">
          {oldValue ? "Save" : "Create"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AnnouncementDialog;
