
import { GoogleGenAI } from "@google/genai";

// Standard initialization for the Gemini client
const getAiClient = () => {
  return new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
};

/**
 * Validates the "Vibe" of a Proof of Work video using Gemini.
 * In a real scenario, we'd send the video frames or a summary.
 */
export const analyzeVibeCheck = async (videoSummary: string) => {
  const ai = getAiClient();
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Analise se o seguinte vídeo de "Prova de Trabalho" (PoW) atende aos critérios de qualidade do Rabelus Lab para freelancers de elite. 
      Resumo do vídeo: ${videoSummary}. 
      Responda em JSON com os campos: score (0-100), feedback (string), qualified (boolean).`,
      config: {
        responseMimeType: "application/json"
      }
    });

    return JSON.parse(response.text || '{}');
  } catch (error) {
    console.error("Gemini Vibe Check failed:", error);
    return null;
  }
};

/**
 * Summarizes a long project description for quick matching.
 */
export const summarizeTrampo = async (description: string) => {
  const ai = getAiClient();
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Resuma o seguinte projeto freelancer em 3 bullet points curtos para um sistema de Tinder-style matching: ${description}`,
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Summarization failed:", error);
    return description;
  }
};
