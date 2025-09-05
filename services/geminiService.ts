import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { DR_RHESUS_SYSTEM_INSTRUCTION } from '../constants';

if (!process.env.API_KEY) {
  throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export function createChatSession(): Chat {
  const chat = ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: DR_RHESUS_SYSTEM_INSTRUCTION,
      tools: [{googleSearch: {}}],
    },
  });
  return chat;
}

export async function sendMessage(chat: Chat, message: string): Promise<GenerateContentResponse> {
  try {
    const response = await chat.sendMessage({ message });
    return response;
  } catch (error) {
    console.error("Error sending message to Gemini:", error);
    // Mimic the GenerateContentResponse structure for error handling
    const errorText = "I'm sorry, I encountered an error while processing your request. Please check the console for more details.";
    return {
        text: errorText,
        candidates: [{
            content: {
                parts: [{ text: errorText }],
                role: 'model'
            },
            // Fix: 'ERROR' is not a valid FinishReason. Changed to 'OTHER' to align with the expected type.
            finishReason: 'OTHER',
            index: 0,
            safetyRatings: []
        }]
    };
  }
}
