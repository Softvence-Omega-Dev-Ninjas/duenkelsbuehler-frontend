"use client";

import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";

const EXPERTS: Record<
  number,
  {
    name: string;
    avatar: string;
    verified: boolean;
    tags: string[];
    description: string;
    location: string;
  }
> = {
  1: {
    name: "Maria Gonzalez Castillo",
    avatar: "/images/user/user_avatar.png",
    verified: true,
    tags: [
      "Corporate",
      "Labor Law",
      "Contracts",
      "Arbitrator",
      "Finance",
      "Finance",
    ],
    description:
      "Provides legal counsel and advocacy for individuals, businesses, and government organizations. Their duties typically include educating and defending clients regarding their rights, communicating with courts and other lawyers, and managing their clients' legal proceedings.",
    location: "USA",
  },
};

const DEFAULT = {
  name: "Vanessa R.",
  avatar: "/images/user/user_avatar.png",
  verified: true,
  tags: ["Corporate", "Labor Law"],
  description: "Expert service provider.",
  location: "USA",
};

export default function ServicesPage() {
  const router = useRouter();
  const { id } = useParams<{ id: string }>();
  const expert = EXPERTS[Number(id)] ?? DEFAULT;

  return (
    <div className="flex flex-col items-center min-h-full">
      {/* Dark header band */}
      <div className="w-full bg-[#181D27] h-28 rounded-t-2xl" />

      <div className="flex flex-col items-center px-6 pb-10 -mt-14 w-full">
        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.35 }}
          className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg mb-3"
        >
          <Image
            src={expert.avatar}
            alt={expert.name}
            width={96}
            height={96}
            className="object-cover w-full h-full"
          />
        </motion.div>

        {expert.verified && (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="flex items-center gap-1 text-[#16A34A] font-work-sans text-xs mb-6"
          >
            <svg
              viewBox="0 0 16 16"
              className="w-3.5 h-3.5"
              fill="currentColor"
            >
              <path d="M8 0a8 8 0 100 16A8 8 0 008 0zm3.5 6.5l-4 4a.75.75 0 01-1.06 0l-2-2a.75.75 0 011.06-1.06L7 8.94l3.47-3.47a.75.75 0 011.06 1.06z" />
            </svg>
            Verified
          </motion.span>
        )}

        <motion.h2
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="font-rozha text-3xl text-[#181D27] mb-3"
        >
          Services
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-6"
        >
          {expert.tags.map((tag, i) => (
            <span
              key={i}
              className="border border-[#181D27] rounded-full px-3 py-1 font-work-sans text-xs text-[#181D27]"
            >
              {tag}
            </span>
          ))}
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.25 }}
          className="font-rozha text-3xl text-[#181D27] mb-3"
        >
          Description
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="font-work-sans text-sm text-[#414651] text-center max-w-md mb-6"
        >
          {expert.description}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.35 }}
          className="font-rozha text-3xl text-[#181D27] mb-2"
        >
          Location
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.38 }}
          className="font-work-sans text-sm text-[#414651] mb-8"
        >
          {expert.location}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.42 }}
        >
          <motion.button
            whileTap={{ scale: 0.97 }}
            onClick={() => router.push(`/client/messages?spId=${id}`)}
            className="flex items-center gap-2 px-8 h-12 rounded-full bg-[#181D27] text-white font-work-sans text-sm font-semibold hover:bg-[#181D27]/90 transition-colors"
          >
            <svg
              viewBox="0 0 24 24"
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="M2 4l10 9 10-9" />
            </svg>
            Message
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
