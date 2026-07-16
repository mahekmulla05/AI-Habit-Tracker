// import dotenv from "dotenv";
// import { GoogleGenAI } from "@google/genai";

// dotenv.config({ path: "./utils/.env" });

// const ai = new GoogleGenAI({
//   apiKey: process.env.GEMINI_API_KEY,
// });

// try {
//   const models = await ai.models.list();

//   for await (const model of models) {
//     console.log(model.name);
//   }
// } catch (e) {
//   console.error(e);
// }