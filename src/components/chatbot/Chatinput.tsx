import { Send } from "lucide-react";
import { useState } from "react";

interface Props {
  onSend: (text: string) => void;
  loading: boolean;
}

export default function ChatInput({
  onSend,
  loading,
}: Props) {
  const [text, setText] = useState("");

  const submit = () => {
    if (!text.trim()) return;

    onSend(text);

    setText("");
  };

  return (
    <div className="border-t p-4 flex gap-3">
      <input
        value={text}
        disabled={loading}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") submit();
        }}
        placeholder="Ask something..."
        className="flex-1 rounded-xl border px-4 py-3 outline-none"
      />

      <button
        onClick={submit}
        disabled={loading}
        className="rounded-xl bg-blue-600 px-4 text-white"
      >
        <Send size={18} />
      </button>
    </div>
  );
}