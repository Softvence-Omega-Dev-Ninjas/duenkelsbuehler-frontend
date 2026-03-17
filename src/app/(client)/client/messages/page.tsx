"use client";

import { useState, useRef, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ImagePlus, ArrowUp } from "lucide-react";

interface Message {
  id: number;
  sender: "me" | "them";
  text: string;
  image?: string;
}

const CONTACTS: Record<
  number,
  { name: string; handle: string; avatar: string }
> = {
  1: {
    name: "Maria Gonzalez Castillo",
    handle: "@Vanessa92",
    avatar: "/images/user/user_avatar.png",
  },
  2: {
    name: "Vanessa R.",
    handle: "@vanessa_r2",
    avatar: "/images/user/user_avatar.png",
  },
  3: {
    name: "Vanessa R.",
    handle: "@vanessa_r3",
    avatar: "/images/user/user_avatar.png",
  },
};

const DEFAULT_CONTACT = {
  name: "Maria Gonzalez Castillo",
  handle: "@Vanessa92",
  avatar: "/images/user/user_avatar.png",
};
const MY_AVATAR = "/images/user/user_avatar.png";

const INITIAL_MESSAGES: Message[] = [
  { id: 1, sender: "me", text: "Tell us nowww 🤩🤩🤩" },
  { id: 2, sender: "them", text: "Tell us nowww 🤩🤩🤩" },
];

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.35 } },
};

const bubbleVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2 } },
  exit: { opacity: 0, transition: { duration: 0.15 } },
};

const listVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.15 } },
};

function MessageBubble({
  msg,
  contact,
  isInitial = false,
}: {
  msg: Message;
  contact: { name: string; avatar: string };
  isInitial?: boolean;
}) {
  const isMe = msg.sender === "me";
  const wrapperVariants = isInitial
    ? {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.2 } },
      }
    : undefined;

  return (
    <motion.div
      variants={isInitial ? wrapperVariants : bubbleVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className={`flex items-end gap-2.5 ${isMe ? "flex-row-reverse" : "flex-row"}`}
    >
      <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-200 shrink-0 mb-1">
        <Image
          src={isMe ? MY_AVATAR : contact.avatar}
          alt="avatar"
          width={40}
          height={40}
          className="object-cover w-full h-full"
        />
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
        className={`max-w-xs lg:max-w-sm rounded-2xl px-4 py-3 bg-[#2E7D32] shadow-sm ${isMe ? "rounded-br-sm" : "rounded-bl-sm"}`}
      >
        <p className="font-work-sans text-xs font-bold mb-1 text-white">
          {isMe ? "You" : contact.name}
        </p>
        {msg.image ? (
          <Image
            src={msg.image}
            alt="uploaded"
            width={200}
            height={150}
            className="rounded-lg object-cover"
          />
        ) : (
          <p className="font-work-sans text-sm text-white leading-relaxed">
            {msg.text}
          </p>
        )}
      </motion.div>
    </motion.div>
  );
}

function MessagesContent() {
  const searchParams = useSearchParams();
  const spId = Number(searchParams.get("spId"));
  const contact = CONTACTS[spId] ?? DEFAULT_CONTACT;

  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = () => {
    const trimmed = input.trim();
    if (!trimmed) return;
    setSending(true);
    setTimeout(() => setSending(false), 300);
    setMessages((prev) => [
      ...prev,
      { id: Date.now(), sender: "me", text: trimmed },
    ]);
    setInput("");
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setMessages((prev) => [
      ...prev,
      { id: Date.now(), sender: "me", text: "", image: url },
    ]);
    e.target.value = "";
  };

  return (
    <div className="flex flex-col h-full overflow-hidden">
      {/* Header */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        className="flex items-center gap-3 px-6 py-4 bg-white border-b border-gray-100 rounded-t-2xl"
      >
        <div className="w-12 h-12 rounded-full overflow-hidden border border-gray-200 shrink-0">
          <Image
            src={contact.avatar}
            alt={contact.name}
            width={48}
            height={48}
            className="object-cover w-full h-full"
          />
        </div>
        <div>
          <p className="font-work-sans text-base font-bold text-[#181D27]">
            {contact.name}
          </p>
          <p className="font-work-sans text-sm text-[#9CA3AF]">
            {contact.handle}
          </p>
        </div>
      </motion.div>

      {/* Messages area */}
      <div className="flex-1 overflow-y-auto px-6 py-6 flex flex-col gap-4 bg-gray-50/50">
        <motion.div
          variants={listVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-4"
        >
          {INITIAL_MESSAGES.map((msg) => (
            <MessageBubble key={msg.id} msg={msg} contact={contact} isInitial />
          ))}
        </motion.div>

        <AnimatePresence initial={false}>
          {messages.slice(INITIAL_MESSAGES.length).map((msg) => (
            <MessageBubble key={msg.id} msg={msg} contact={contact} />
          ))}
        </AnimatePresence>

        <div ref={bottomRef} />
      </div>

      {/* Input area */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        className="bg-white border border-gray-200 rounded-2xl px-5 py-4 flex flex-col gap-3"
      >
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              sendMessage();
            }
          }}
          placeholder="Type your message here.."
          rows={2}
          className="w-full resize-none font-work-sans text-sm text-[#181D27] placeholder:text-gray-400 focus:outline-none bg-transparent"
        />
        <div className="flex items-center justify-end gap-2">
          <input
            ref={fileRef}
            type="file"
            accept="image/*"
            className="hidden"
            aria-label="Upload image"
            onChange={handleImageUpload}
          />
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.88 }}
            onClick={() => fileRef.current?.click()}
            className="w-10 h-10 rounded-full bg-[#181D27] flex items-center justify-center hover:bg-[#2d3748] transition-colors"
            aria-label="Upload image"
          >
            <ImagePlus size={18} className="text-white" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.85 }}
            animate={sending ? { scale: [1, 1.2, 0.9, 1] } : {}}
            transition={{ duration: 0.3 }}
            onClick={sendMessage}
            disabled={!input.trim()}
            className="w-10 h-10 rounded-full bg-[#181D27] flex items-center justify-center hover:bg-[#2d3748] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            aria-label="Send message"
          >
            <ArrowUp size={18} className="text-white" />
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}

export default function ClientMessagesPage() {
  return (
    <Suspense fallback={<div className="flex-1" />}>
      <MessagesContent />
    </Suspense>
  );
}
