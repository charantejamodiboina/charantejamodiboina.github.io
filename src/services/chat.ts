import type { ChatMessage } from "../components/chatbot/type";

const API =
  "https://portfolio-chat-api.charantejamodiboina.workers.dev";

export async function sendMessage(
  message: string,
  history: ChatMessage[]
) {
  const response = await fetch(API, {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      message,
      history,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed");
  }

  const json = await response.json();

  return json.reply;
}