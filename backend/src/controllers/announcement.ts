import { Request, Response } from "express";

import Announcement, { announcementObj } from "../models/announcementModel";

export const createAnnouncement = async (req: Request, res: Response) => {
  const newAnnouncement = req.body as announcementObj;
  // console.log(newAnnouncement);
  try {
    const createdAnnouncement = await Announcement.create(newAnnouncement);
    const announcements = await Announcement.find();
    return res
      .status(201)
      .json({ message: "Announcement created", announcements });
  } catch (error) {
    console.log("error in Announcement controller, createAnnouncement");
    return res.status(500).json({ message: "Error creating Announcement" });
  }
};

export const getAnnouncements = async (req: Request, res: Response) => {
  try {
    const announcements = await Announcement.find();
    // console.log(announcements);
    return res.status(201).json({ announcements });
  } catch (error) {
    console.log("error in announcements controller, getAnnouncements");
    return res.status(500).json({ message: "Error fetching announcements" });
  }
};

export const updateAnnouncement = async (req: Request, res: Response) => {
  const { announcementId, newAnnouncement } = req.body as {
    announcementId: string;
    newAnnouncement: announcementObj;
  };

  try {
    await Announcement.findByIdAndUpdate(announcementId, newAnnouncement);
    const announcements = await Announcement.find();

    return res
      .status(201)
      .json({ message: "Announcement updated", announcements });
  } catch (error) {
    console.log("error in Announcement controller, updateAnnouncement");
    return res.status(500).json({ message: "Error updating Announcement" });
  }
};

export const deleteAnnouncement = async (req: Request, res: Response) => {
  const { announcementId } = req.body as { announcementId: string };
  // console.log(announcementId);

  try {
    await Announcement.findByIdAndDelete(announcementId);
    const announcements = await Announcement.find();
    return res
      .status(201)
      .json({ message: "Announcement deleted", announcements });
  } catch (error) {
    console.log("error in Announcement controller, deleteAnnouncement");
    return res.status(500).json({ message: "Error deleting Announcement" });
  }
};
