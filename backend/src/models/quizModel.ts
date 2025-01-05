import mongoose, { Date } from "mongoose";
var Schema = mongoose.Schema;

const quizSchema = new Schema(
  {
    title: String,
    course: String,
    topic: String,
    dueDate: Date,
  },
  { timestamps: true }
);

const Quiz = mongoose.model("quiz", quizSchema);

export default Quiz;

export type quizObj = {
  _id: string;
  title: string;
  course: string;
  topic: string;
  dueDate: Date;
};
