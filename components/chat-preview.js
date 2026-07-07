export default function ChatPreview() {
  const messages = [
    { role: "assistant", content: "Tell me your subject and I will build a clean study plan." },
    { role: "user", content: "I need a one-week physics revision plan." },
    { role: "assistant", content: "Start with mechanics, then daily mixed MCQs, then one timed paper review." },
  ];

  return (
    <div className="glass rounded-[32px] p-6 md:p-8">
      <div className="space-y-4">
        {messages.map((message, index) => (
          <div
            key={`${message.role}-${index}`}
            className={`max-w-[88%] rounded-[24px] px-4 py-3 text-sm leading-7 ${
              message.role === "assistant"
                ? "bg-white/5 text-slate-200"
                : "ml-auto bg-sky-500 text-white"
            }`}
          >
            {message.content}
          </div>
        ))}
      </div>
    </div>
  );
}
