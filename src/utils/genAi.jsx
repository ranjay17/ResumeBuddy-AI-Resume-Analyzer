import { GoogleGenAI } from "@google/genai";
const GEMINI_API_KEY = import.meta.env.VITE_GOOGLE_GEMINI_API_KEY;

const genAi = new GoogleGenAI(
    { apiKey: GEMINI_API_KEY }
);

export default genAi;