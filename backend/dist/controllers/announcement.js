"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAnnouncement = exports.updateAnnouncement = exports.getAnnouncements = exports.createAnnouncement = void 0;
const announcementModel_1 = __importDefault(require("../models/announcementModel"));
const createAnnouncement = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newAnnouncement = req.body;
    console.log(newAnnouncement);
    try {
        const createdAnnouncement = yield announcementModel_1.default.create(newAnnouncement);
        return res
            .status(201)
            .json({ message: "Announcement created", createdAnnouncement });
    }
    catch (error) {
        console.log("error in Announcement controller, createAnnouncement");
        return res.status(500).json({ message: "Error creating Announcement" });
    }
});
exports.createAnnouncement = createAnnouncement;
const getAnnouncements = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const announcements = yield announcementModel_1.default.find();
        // console.log(announcements);
        return res.status(201).json({ announcements });
    }
    catch (error) {
        console.log("error in announcements controller, getAnnouncements");
        return res.status(500).json({ message: "Error fetching announcements" });
    }
});
exports.getAnnouncements = getAnnouncements;
const updateAnnouncement = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { announcementId, newAnnouncement } = (yield req.body);
    try {
        yield announcementModel_1.default.findByIdAndUpdate(announcementId, newAnnouncement);
        return res.status(201).json({ message: "Announcement updated" });
    }
    catch (error) {
        console.log("error in Announcement controller, updateAnnouncement");
        return res.status(500).json({ message: "Error updating Announcement" });
    }
});
exports.updateAnnouncement = updateAnnouncement;
const deleteAnnouncement = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const announcementId = (yield req.body);
    try {
        yield announcementModel_1.default.findByIdAndDelete(announcementId);
        return res.status(201).json({ message: "Announcement deleted" });
    }
    catch (error) {
        console.log("error in Announcement controller, deleteAnnouncement");
        return res.status(500).json({ message: "Error deleting Announcement" });
    }
});
exports.deleteAnnouncement = deleteAnnouncement;
