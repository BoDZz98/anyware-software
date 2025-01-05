"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const announcement_1 = require("../controllers/announcement");
const router = (0, express_1.Router)();
router.get("/getAnnouncements", announcement_1.getAnnouncements);
router.post("/createAnnouncement", announcement_1.createAnnouncement);
router.patch("/updateAnnouncement/", announcement_1.updateAnnouncement);
router.delete("/deleteAnnouncement", announcement_1.deleteAnnouncement);
exports.default = router;
