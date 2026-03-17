import { motion, AnimatePresence } from "framer-motion";

interface Props {
  isOpen: boolean;
  onFinalize: () => void;
}

export function KaChingModal({ isOpen, onFinalize }: Props) {
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
            <h2 className="font-rozha text-3xl text-[#181D27]">Ka-Ching</h2>
            <p className="font-work-sans text-sm text-[#414651]">
              Woohoo! You&apos;re one step closer to getting paid. Keep going!
            </p>

            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.15, type: "spring" }}
            >
              <svg viewBox="0 0 80 80" className="w-20 h-20">
                <text x="40" y="58" textAnchor="middle" fontSize="56" fill="#16A34A" fontWeight="bold" fontFamily="serif">$</text>
              </svg>
            </motion.div>

            <motion.button
              whileTap={{ scale: 0.97 }}
              onClick={onFinalize}
              className="w-full py-4 rounded-full bg-[#181D27] text-white font-work-sans text-sm font-semibold hover:bg-[#181D27]/90 transition-colors"
            >
              Finalize
            </motion.button>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
