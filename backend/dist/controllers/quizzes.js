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
exports.deleteQuiz = exports.updateQuiz = exports.getQuizzes = exports.createQuiz = void 0;
const quizModel_1 = __importDefault(require("../models/quizModel"));
const createQuiz = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newQuiz = req.body;
    console.log(newQuiz);
    try {
        const createdQuiz = yield quizModel_1.default.create(newQuiz);
        return res.status(201).json({ message: "Quiz created", createdQuiz });
    }
    catch (error) {
        console.log("error in Quiz controller, createReview");
        return res.status(500).json({ message: "Error creating Quiz" });
    }
});
exports.createQuiz = createQuiz;
const getQuizzes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const quizzes = yield quizModel_1.default.find();
        // console.log(quizzes);
        return res.status(201).json({ quizzes });
    }
    catch (error) {
        console.log("error in Quizzes controller, getQuizzes");
        return res.status(500).json({ message: "Error fetching Quizzes" });
    }
});
exports.getQuizzes = getQuizzes;
const updateQuiz = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { quizId, newQuiz } = (yield req.body);
    try {
        yield quizModel_1.default.findByIdAndUpdate(quizId, newQuiz);
        return res.status(201).json({ message: "Quiz updated" });
    }
    catch (error) {
        console.log("error in Quiz controller, updateQuiz");
        return res.status(500).json({ message: "Error updating Quiz" });
    }
});
exports.updateQuiz = updateQuiz;
const deleteQuiz = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const quizId = yield req.body;
    // console.log(reviewId, email);
    try {
        yield quizModel_1.default.findByIdAndDelete(quizId);
        return res.status(201).json({ message: "Quiz deleted" });
    }
    catch (error) {
        console.log("error in Quiz controller, deleteQuiz");
        return res.status(500).json({ message: "Error deleting Quiz" });
    }
});
exports.deleteQuiz = deleteQuiz;
