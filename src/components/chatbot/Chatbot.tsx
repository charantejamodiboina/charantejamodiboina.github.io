import { useState } from "react";

import ChatButton from "./ChatButton";
import ChatWindow from "./Chatwindow";

import useChat from "../../hooks/usechat";

export default function Chatbot() {
  const [open, setOpen] = useState(false);

  const { messages, loading, ask } =
    useChat();

  return (
    <>
      {!open && (
        <ChatButton
          onClick={() => setOpen(true)}
        />
      )}

      {open && (
        <ChatWindow
          messages={messages}
          loading={loading}
          onClose={() => setOpen(false)}
          onSend={ask}
        />
      )}
    </>
  );
}