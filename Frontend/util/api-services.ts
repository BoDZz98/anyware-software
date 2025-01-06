import { announcementObj } from "@/types/types";

const headers = {
  "Content-Type": "application/json",
};

export const getData = async () => {
  try {
    const response = await fetch(
      "http://localhost:8000/announcements/getAnnouncements"
    );
    const response2 = await fetch("http://localhost:8000/quizzes/getQuizzes");

    if (!response.ok) throw new Error(`Error: ${response.status}`);
    if (!response2.ok) throw new Error(`Error: ${response2.status}`);

    const data = await response.json();
    const data2 = await response2.json();

    return { announcements: data.announcements, quizzes: data2.quizzes };
  } catch (err) {
    // @ts-expect-error asd
    return err.message;
  }
};

export const createAnnouncement = async (newAnnouncement: announcementObj) => {
  try {
    const response = await fetch(
      "http://localhost:8000/announcements/createAnnouncement",
      {
        headers,
        method: "POST",
        body: JSON.stringify(newAnnouncement),
      }
    );

    if (!response.ok) throw new Error(`Error: ${response.status}`);

    const data = await response.json();
    return data.announcements;
  } catch (error) {
    // @ts-expect-error aaa
    return error.message;
  }
};

export const deleteAnnouncement = async (announcementId: string) => {
  try {
    const response = await fetch(
      "http://localhost:8000/announcements/deleteAnnouncement",
      {
        headers,
        method: "DELETE",
        body: JSON.stringify({ announcementId }),
      }
    );

    if (!response.ok) throw new Error(`Error: ${response.status}`);

    const data = await response.json();
    return data.announcements;
  } catch (error) {
    console.log(error);

    // @ts-expect-error aaa
    return error.message;
  }
};
