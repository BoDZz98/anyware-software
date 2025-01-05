import { Router } from "express";
import {
  createAnnouncement,
  deleteAnnouncement,
  getAnnouncements,
  updateAnnouncement,
} from "../controllers/announcement";

const router = Router();

router.get("/getAnnouncements", getAnnouncements);
router.post("/createAnnouncement", createAnnouncement);
router.patch("/updateAnnouncement/", updateAnnouncement);
router.delete("/deleteAnnouncement", deleteAnnouncement);

export default router;
