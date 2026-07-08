import { X } from "lucide-react";
import type { ChatMessage } from "./type";
import Message from "./Chatmessage";
import ChatInput from "./Chatinput";
import Typing from "./Typing";
import { suggestions } from "../../data/suggestions";
interface Props {
  messages: ChatMessage[];
  loading: boolean;
  onClose: () => void;
  onSend: (text: string) => void;
}

export default function ChatWindow({
  messages,
  loading,
  onClose,
  onSend,
}: Props) {
  return (
    <div className="fixed bottom-24 right-6 z-50 h-[650px] w-[400px] max-w-[95vw] rounded-3xl bg-white shadow-2xl dark:bg-zinc-900 flex flex-col">

      <div className="flex items-center justify-between border-b p-5">

        <div>

          <h3 className="font-bold">
            Ask pika
          </h3>

          <p className="text-xs text-green-500">
            Online
          </p>

        </div>

        <button onClick={onClose}>
          <X />
        </button>

      </div>

      <div className="flex-1 overflow-y-auto p-4">

        {messages.length === 0 && (

          <>

            <p className="mb-6 text-sm">
              Hi 👋 Ask me anything.
            </p>

            <div className="flex flex-wrap gap-2">

              {suggestions.map((item) => (

                <button
                  key={item.id}
                  onClick={() => onSend(item.label)}
                  className="rounded-full border px-4 py-2 text-sm"
                >
                  {item.label}
                </button>

              ))}

            </div>

          </>

        )}

        {messages.map((msg) => (
          <Message
            key={msg.id}
            message={msg}
          />
        ))}

        {loading && <Typing />}

      </div>

      <ChatInput
        onSend={onSend}
        loading={loading}
      />

    </div>
  );
}