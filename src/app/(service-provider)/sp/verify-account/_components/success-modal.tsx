import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CrownSVG } from "./shared";

interface Props {
  isOpen: boolean;
  onDone: () => void;
}

export function SuccessModal({ isOpen, onDone }: Props) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 24 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md bg-white rounded-2xl p-8 shadow-2xl flex flex-col items-center text-center"
          >
            <CrownSVG className="w-20 h-14 mb-2" />
            <p className="font-work-sans font-bold text-lg text-[#181D27] mb-4">
              AristoAccess<span className="text-[#16A34A]">+</span>
            </p>

            <h2 className="font-rozha text-3xl text-[#181D27] mb-3">
              The seal is now yours to bear.
            </h2>
            <p className="font-work-sans text-sm text-[#414651] mb-8">
              No more shadows—your name carries weight
            </p>

            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
              className="mb-8"
            >
              <svg viewBox="0 0 140 160" className="w-36 h-40">
                <ellipse cx="70" cy="148" rx="10" ry="6" fill="#C97B2A" opacity="0.7" />
                <rect x="66" y="130" width="8" height="20" rx="4" fill="#C97B2A" opacity="0.7" />
                <circle cx="70" cy="70" r="58" fill="#D4922A" opacity="0.15" />
                <circle cx="70" cy="70" r="52" fill="#E8A830" opacity="0.25" />
                <circle cx="70" cy="70" r="46" fill="none" stroke="#C97B2A" strokeWidth="2.5" strokeDasharray="7 4" />
                <circle cx="70" cy="70" r="38" fill="#F0B840" opacity="0.35" />
                <path d="M22 70 Q28 55 36 62 Q30 72 22 70Z" fill="#C97B2A" opacity="0.75" />
                <path d="M20 78 Q26 63 34 70 Q28 80 20 78Z" fill="#C97B2A" opacity="0.6" />
                <path d="M24 62 Q30 48 38 55 Q32 65 24 62Z" fill="#C97B2A" opacity="0.65" />
                <path d="M118 70 Q112 55 104 62 Q110 72 118 70Z" fill="#C97B2A" opacity="0.75" />
                <path d="M120 78 Q114 63 106 70 Q112 80 120 78Z" fill="#C97B2A" opacity="0.6" />
                <path d="M116 62 Q110 48 102 55 Q108 65 116 62Z" fill="#C97B2A" opacity="0.65" />
                <text x="70" y="82" textAnchor="middle" fontSize="36" fill="#7A4A10" fontWeight="bold" fontFamily="serif">S</text>
                <circle cx="70" cy="70" r="28" fill="none" stroke="#C97B2A" strokeWidth="1.5" opacity="0.5" />
              </svg>
            </motion.div>

            <Button
              onClick={onDone}
              className="w-full h-14 rounded-full bg-[#181D27] hover:bg-[#181D27]/90 font-work-sans font-semibold text-base"
            >
              Done
            </Button>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
