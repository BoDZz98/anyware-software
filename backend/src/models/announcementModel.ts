import mongoose from "mongoose";
var Schema = mongoose.Schema;

const announcementSchema = new Schema(
  {
    title: String,
    subTitle: String,
    topic: String,
  },
  { timestamps: true }
);

const Announcement = mongoose.model("announcement", announcementSchema);

export default Announcement;

export type announcementObj = {
  _id: string;
  title: string;
  subTitle: string;
  topic: string;
};
