import { GoogleGenAI } from "@google/genai";

export interface Env {
  GEMINI_API_KEY: string;
}

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const SYSTEM_PROMPT = `
You are Charan AI.

You only answer questions about Charan Teja.

Answer questions related to:
- Experience
- Skills
- Resume
- Portfolio
- Contact
- GitHub
- Projects

If someone asks unrelated questions,
reply politely that you are only designed to answer questions about Charan's portfolio.

Do not invent information.
`;

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    if (request.method === "OPTIONS") {
      return new Response(null, {
        headers: corsHeaders,
      });
    }

    if (request.method !== "POST") {
      return new Response("Method Not Allowed", {
        status: 405,
        headers: corsHeaders,
      });
    }

    try {
      const { message, history = [] } = await request.json();

      const ai = new GoogleGenAI({
        apiKey: env.GEMINI_API_KEY,
      });

      const conversation = history
        .map(
          (item: { role: string; content: string }) =>
            `${item.role}: ${item.content}`
        )
        .join("\n");

      const prompt = `
${SYSTEM_PROMPT}

Conversation:
${conversation}

User:
${message}
`;

      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
      });

      return Response.json(
        {
          reply: response.text,
        },
        {
          headers: corsHeaders,
        }
      );
    } catch (error) {
      console.error(error);

      return Response.json(
        {
          reply: "Sorry, something went wrong.",
        },
        {
          status: 500,
          headers: corsHeaders,
        }
      );
    }
  },
};