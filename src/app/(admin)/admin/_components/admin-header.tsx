"use client";

import Image from "next/image";
import { Bell } from "lucide-react";
import { motion } from "framer-motion";

export function AdminHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="flex items-center justify-between px-6 py-4 bg-white border-b border-gray-100"
    >
      <h1 className="font-rozha text-2xl text-[#181D27]">Admin Panel</h1>

      <div className="flex items-center gap-3">
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="w-9 h-9 rounded-full bg-[#F5F5F5] flex items-center justify-center hover:bg-gray-200 transition-colors"
          aria-label="Notifications"
        >
          <Bell size={17} className="text-[#181D27]" />
        </motion.button>

        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-gray-100 shadow-sm">
            <Image
              src="/images/user/user_avatar.png"
              alt="Admin avatar"
              width={40}
              height={40}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="hidden sm:flex flex-col">
            <span className="font-work-sans text-sm font-semibold text-[#181D27] leading-tight">
              Alexis
            </span>
            <span className="font-work-sans text-xs text-[#9CA3AF] leading-tight">
              Admin
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
