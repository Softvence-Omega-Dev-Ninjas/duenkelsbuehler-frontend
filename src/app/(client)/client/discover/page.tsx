"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";

const EXPERTS = Array.from({ length: 22 }, (_, i) => ({
  id: i + 1,
  name: i === 0 ? "Maria" : "Vanessa R.",
  handle: "@Vanessa92",
  avatar: "/images/user/user_avatar.png",
  verified: true,
  tag: i === 0 ? "Marketing" : i === 1 ? "Design" : null,
  rating: 4,
}));

const PAGE_SIZE_OPTIONS = [10, 20, 50];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
};

const rowVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.25, ease: "easeOut" as const },
  },
};

export default function DiscoverPage() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const filtered = EXPERTS.filter(
    (e) =>
      e.name.toLowerCase().includes(search.toLowerCase()) ||
      e.handle.toLowerCase().includes(search.toLowerCase()),
  );

  const totalPages = Math.ceil(filtered.length / pageSize);
  const paginated = filtered.slice((page - 1) * pageSize, page * pageSize);

  const getPages = () => {
    const pages: (number | "...")[] = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      if (page > 3) pages.push("...");
      for (
        let i = Math.max(2, page - 1);
        i <= Math.min(totalPages - 1, page + 1);
        i++
      )
        pages.push(i);
      if (page < totalPages - 2) pages.push("...");
      pages.push(totalPages);
    }
    return pages;
  };

  return (
    <div className="flex flex-col h-full px-2 py-6 lg:px-8">
      <motion.h1
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="font-rozha text-4xl lg:text-5xl text-[#181D27] text-center mb-2"
      >
        Discover
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="font-work-sans text-sm text-[#414651] text-center mb-6"
      >
        Discover experts for your business and learn about their ratings..
      </motion.p>

      {/* Search */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: 0.15 }}
        className="relative max-w-sm mx-auto w-full mb-6"
      >
        <input
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1);
          }}
          placeholder="Search by name or handle..."
          className="w-full border border-gray-200 rounded-xl pl-4 pr-10 py-3 font-work-sans text-sm text-[#181D27] placeholder:text-gray-400 focus:outline-none focus:border-[#181D27] transition-colors bg-white"
        />
        <Search
          size={16}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
        />
      </motion.div>

      {/* Table header */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: 0.2 }}
        className="grid grid-cols-[40px_1fr_80px] bg-[#181D27] text-white rounded-xl px-6 py-3.5 mb-3"
      >
        <span className="font-work-sans text-sm font-medium">Sl</span>
        <span className="font-work-sans text-sm font-medium">Name</span>
        <span className="font-work-sans text-sm font-medium text-center">
          Rating
        </span>
      </motion.div>

      {/* Rows */}
      <motion.div
        key={`${page}-${search}`}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col gap-3 flex-1"
      >
        {paginated.map((expert, idx) => (
          <motion.div
            key={expert.id}
            variants={rowVariants}
            whileTap={{ scale: 0.99 }}
            onClick={() => router.push(`/client/discover/${expert.id}`)}
            className="grid grid-cols-[40px_1fr_80px] items-center bg-[#F9F9F9] rounded-xl px-6 py-4 cursor-pointer hover:bg-gray-100 transition-colors"
          >
            <span className="font-work-sans text-sm text-[#414651]">
              {(page - 1) * pageSize + idx + 1}
            </span>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200 shrink-0">
                <Image
                  src={expert.avatar}
                  alt={expert.name}
                  width={40}
                  height={40}
                  className="object-cover w-full h-full"
                />
              </div>
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-work-sans text-sm font-semibold text-[#181D27]">
                    {expert.name}
                  </span>
                  {expert.verified && (
                    <span className="flex items-center gap-1 font-work-sans text-xs text-[#16A34A]">
                      <svg
                        viewBox="0 0 16 16"
                        className="w-3.5 h-3.5"
                        fill="currentColor"
                      >
                        <path d="M8 0a8 8 0 100 16A8 8 0 008 0zm3.5 6.5l-4 4a.75.75 0 01-1.06 0l-2-2a.75.75 0 011.06-1.06L7 8.94l3.47-3.47a.75.75 0 011.06 1.06z" />
                      </svg>
                      Verified
                    </span>
                  )}
                  {expert.tag && (
                    <span className="bg-[#181D27] text-white font-work-sans text-xs px-3 py-0.5 rounded-full">
                      {expert.tag}
                    </span>
                  )}
                </div>
                <p className="font-work-sans text-xs text-[#9CA3AF]">
                  {expert.handle}
                </p>
              </div>
            </div>

            <div className="flex justify-center">
              <svg viewBox="0 0 16 20" className="w-4 h-5 fill-[#181D27]">
                <path d="M2 0h12a2 2 0 012 2v18l-8-4-8 4V2a2 2 0 012-2z" />
              </svg>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Pagination */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="flex items-center justify-between mt-6"
      >
        <div className="flex items-center gap-2">
          <span className="font-work-sans text-sm text-[#414651]">Show</span>
          <select
            value={pageSize}
            onChange={(e) => {
              setPageSize(Number(e.target.value));
              setPage(1);
            }}
            aria-label="Entries per page"
            className="h-8 px-2 rounded-lg border border-gray-200 font-work-sans text-sm text-[#181D27] focus:outline-none cursor-pointer"
          >
            {PAGE_SIZE_OPTIONS.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
          <span className="font-work-sans text-sm text-[#414651]">entries</span>
        </div>

        <div className="flex items-center gap-2">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
            className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-[#414651] hover:bg-gray-50 disabled:opacity-40 transition-colors"
          >
            <ChevronLeft className="h-4 w-4" />
          </motion.button>

          {getPages().map((p, i) =>
            p === "..." ? (
              <span
                key={`e-${i}`}
                className="w-9 h-9 flex items-center justify-center font-work-sans text-sm text-[#414651]"
              >
                ...
              </span>
            ) : (
              <motion.button
                key={p}
                whileTap={{ scale: 0.9 }}
                onClick={() => setPage(p as number)}
                className={`w-9 h-9 rounded-full font-work-sans text-sm font-medium transition-colors ${
                  page === p
                    ? "bg-[#181D27] text-white"
                    : "border border-gray-200 text-[#414651] hover:bg-gray-50"
                }`}
              >
                {p}
              </motion.button>
            ),
          )}

          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
            className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-[#414651] hover:bg-gray-50 disabled:opacity-40 transition-colors"
          >
            <ChevronRight className="h-4 w-4" />
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}
