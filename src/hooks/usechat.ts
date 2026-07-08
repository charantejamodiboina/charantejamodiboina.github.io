import { useState } from "react";
import { v4 as uuid } from "uuid";
import type { ChatMessage } from "../components/chatbot/type";
import { sendMessage } from "../services/chat";

export default function useChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [loading, setLoading] = useState(false);

  const ask = async (text: string) => {
    const userMessage: ChatMessage = {
      id: uuid(),
      role: "user",
      content: text,
      createdAt: Date.now(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setLoading(true);

    try {
      const reply = await sendMessage(text, [...messages, userMessage]);

      const assistant: ChatMessage = {
        id: uuid(),
        role: "assistant",
        content: reply,
        createdAt: Date.now(),
      };

      setMessages((prev) => [...prev, assistant]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          id: uuid(),
          role: "assistant",
          content:
            "Sorry, something went wrong. Please try again.",
          createdAt: Date.now(),
        },
      ]);
    }

    setLoading(false);
  };

  return {
    messages,
    loading,
    ask,
  };
}