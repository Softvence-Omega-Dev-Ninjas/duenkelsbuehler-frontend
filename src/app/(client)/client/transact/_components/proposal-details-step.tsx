"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const inputCls = "w-full h-12 border border-gray-200 rounded-xl px-4 font-work-sans text-sm text-[#181D27] placeholder:text-gray-400 focus:outline-none focus:border-[#181D27] bg-white transition-colors";
const labelCls = "font-work-sans text-sm font-medium text-[#181D27]";

export function ProposalDetailsStep({
  onNext,
}: {
  onNext: (data: { title: string; issueDate: string; dueDate: string; price: string }) => void;
}) {
  const [title, setTitle] = useState("");
  const [issueDate, setIssueDate] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [price, setPrice] = useState("");

  const canNext = title && issueDate && dueDate && price;

  return (
    <motion.div
      key="proposal-details"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="flex flex-col max-w-lg mx-auto w-full"
    >
      <motion.h1
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="font-rozha text-4xl lg:text-5xl text-[#181D27] text-center mb-8"
      >
        Proposal Details
      </motion.h1>

      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-1.5">
          <label className={labelCls}>Proposal Title <span className="text-red-500">*</span></label>
          <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Start Typing here" className={inputCls} />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className={labelCls}>Issue Date <span className="text-red-500">*</span></label>
          <input value={issueDate} onChange={(e) => setIssueDate(e.target.value)} placeholder="DD/MM/YYYY" className={inputCls} />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className={labelCls}>Due Date: <span className="text-red-500">*</span></label>
          <input value={dueDate} onChange={(e) => setDueDate(e.target.value)} placeholder="DD/MM/YYYY" className={inputCls} />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className={labelCls}>Price <span className="text-red-500">*</span></label>
          <input value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Enter Price" className={inputCls} />
        </div>

        <div className="flex justify-center pt-2">
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => onNext({ title, issueDate, dueDate, price })}
            disabled={!canNext}
            className="px-8 h-12 rounded-full bg-[#181D27] text-white font-work-sans text-sm font-semibold hover:bg-[#181D27]/90 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Next
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
