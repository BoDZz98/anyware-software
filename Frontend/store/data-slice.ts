import { createSlice } from "@reduxjs/toolkit";

const initDataState = {
  announcments: [],
  quizzes: [],
};

const dataSlice = createSlice({
  name: "data",
  initialState: initDataState,
  reducers: {
    setAnnouncments(state, action) {
      const announcments = action.payload;
    //   console.log(announcments);

      state.announcments = announcments;
    //   console.log(state.announcments);
    },
    setQuizzes(state, action) {
      const quizzes = action.payload;
      //   console.log(quizzes);
      state.quizzes = quizzes;
    },
  },
});

export const dataAction = dataSlice.actions;
export default dataSlice;
