import { HelpCircle, User } from "lucide-react";

const AskForm = () => {
  return (
    <div className="space-y-4">
      <div className="relative group/input">
        <textarea
          rows={3}
          required
          placeholder="What would you like to know?"
          name="question"
          className="w-full rounded-xl glass-card px-5 py-4 outline-none overflow-y-scroll no-scrollbar resize-none text-[var(--color-primary)]"
        />
        <div className="absolute right-4 bottom-4 text-[var(--color-border-dark)]">
          <HelpCircle size={20} />
        </div>
      </div>

      <div className="relative group/input">
        <input
          required
          name="contact"
          type="text"
          placeholder="Your Email/Whatsapp/Instagram..."
          className="w-full glass-card px-5 py-4 outline-none rounded-xl text-[var(--color-primary)]"
        />
        <div className="absolute right-4 top-1/2 -translate-y-1/2 text-[var(--color-border-dark)]">
          <User size={20} />
        </div>
      </div>
    </div>
  );
};

export default AskForm;
