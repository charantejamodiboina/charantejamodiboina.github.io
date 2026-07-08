export default function Typing() {
  return (
    <div className="flex gap-2 px-4 py-3">
      <span className="h-2 w-2 animate-bounce rounded-full bg-gray-400"></span>
      <span className="h-2 w-2 animate-bounce rounded-full bg-gray-400 delay-150"></span>
      <span className="h-2 w-2 animate-bounce rounded-full bg-gray-400 delay-300"></span>
    </div>
  );
}