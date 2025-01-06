"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
var Schema = mongoose_1.default.Schema;
const quizSchema = new Schema({
    title: String,
    course: String,
    topic: String,
    dueDate: String,
}, { timestamps: true });
const Quiz = mongoose_1.default.model("quiz", quizSchema);
exports.default = Quiz;
