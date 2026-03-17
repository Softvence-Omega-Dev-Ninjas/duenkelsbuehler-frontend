import { motion, AnimatePresence } from "framer-motion";

interface Props {
  isOpen: boolean;
  onNext: () => void;
  onSkip: () => void;
}

function CrownSVG() {
  return (
    <svg viewBox="0 0 80 60" className="w-16 h-12" fill="none">
      <path d="M40 8 L10 32 L18 48 H62 L70 32 Z" fill="#181D27" stroke="#181D27" strokeWidth="2" strokeLinejoin="round" />
      <circle cx="40" cy="6" r="5" fill="#181D27" />
      <circle cx="8" cy="32" r="5" fill="#181D27" />
      <circle cx="72" cy="32" r="5" fill="#181D27" />
      <rect x="14" y="48" width="52" height="7" rx="3.5" fill="#181D27" />
    </svg>
  );
}

export function FinePrintModal({ isOpen, onNext, onSkip }: Props) {
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
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md bg-white rounded-2xl p-8 shadow-2xl flex flex-col items-center text-center gap-4"
          >
            <CrownSVG />
            <p className="font-work-sans font-bold text-base text-[#181D27]">
              AristoAccess<span className="text-[#16A34A]">+</span>
            </p>

            <h2 className="font-rozha text-3xl text-[#181D27]">The Fine Print Club</h2>
            <p className="font-work-sans text-sm text-[#414651]">
              A contract sent, a standard set. Welcome to The Fine Print Club — where the details are respected.
            </p>

            {/* Pen illustration */}
            <div className="my-2">
              <svg viewBox="0 0 120 100" className="w-32 h-24">
                <line x1="20" y1="80" x2="90" y2="20" stroke="#9CA3AF" strokeWidth="4" strokeLinecap="round" />
                <polygon points="90,20 100,30 85,35" fill="#6B7280" />
                <line x1="15" y1="85" x2="25" y2="75" stroke="#D1D5DB" strokeWidth="6" strokeLinecap="round" />
              </svg>
            </div>

            <div className="flex items-center gap-3 w-full justify-center mt-2">
              <button
                onClick={onSkip}
                className="font-work-sans text-sm text-[#414651] underline underline-offset-2 hover:text-[#181D27] transition-colors"
              >
                Skip
              </button>
              <motion.button
                whileTap={{ scale: 0.97 }}
                onClick={onNext}
                className="px-8 py-3 rounded-full bg-[#181D27] text-white font-work-sans text-sm font-semibold hover:bg-[#181D27]/90 transition-colors"
              >
                Next
              </motion.button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
