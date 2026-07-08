import { motion } from "framer-motion";

interface Props {
  onClick: () => void;
}

export default function ChatButton({ onClick }: Props) {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      {/* Floating Tag */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        className="rounded-full bg-white px-4 py-2 text-sm font-medium text-gray-800 shadow-lg"
      >
        Hi, I'm <span className="font-bold text-blue-600">Pika</span> 👋
      </motion.div>

      {/* Avatar */}
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        onClick={onClick}
        className="overflow-hidden rounded-full shadow-2xl"
      >
        <img
          src="/images.jpg"
          alt="Pika AI Assistant"
          className="h-20 w-20 rounded-full object-cover"
        />
      </motion.button>
    </div>
  );
}