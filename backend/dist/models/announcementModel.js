"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
var Schema = mongoose_1.default.Schema;
const announcementSchema = new Schema({
    title: String,
    subTitle: String,
    topic: String,
}, { timestamps: true });
const Announcement = mongoose_1.default.model("announcement", announcementSchema);
exports.default = Announcement;
