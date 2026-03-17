import { motion } from "framer-motion";

interface Props {
  confirmClient: boolean;
  confirmUnverified: boolean;
  onConfirmClientChange: (val: boolean) => void;
  onConfirmUnverifiedChange: (val: boolean) => void;
  onSubmit: () => void;
}

export function ReadyStep({ confirmClient, confirmUnverified, onConfirmClientChange, onConfirmUnverifiedChange, onSubmit }: Props) {
  const canSubmit = confirmClient && confirmUnverified;

  return (
    <div className="max-w-lg mx-auto w-full flex flex-col gap-6">
      <motion.h2
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="font-rozha text-2xl text-[#181D27] text-center"
      >
        Ready
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.05 }}
        className="flex flex-col gap-4"
      >
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={confirmClient}
            onChange={(e) => onConfirmClientChange(e.target.checked)}
            className="mt-0.5 w-4 h-4 accent-[#181D27] cursor-pointer"
          />
          <span className="font-work-sans text-sm text-[#414651]">
            Click this box to confirm you are requesting the correct Client
          </span>
        </label>

        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={confirmUnverified}
            onChange={(e) => onConfirmUnverifiedChange(e.target.checked)}
            className="mt-0.5 w-4 h-4 accent-[#181D27] cursor-pointer"
          />
          <span className="font-work-sans text-sm text-[#414651]">
            By clicking here you acknowledge that you are making a transaction with an unverified user.
          </span>
        </label>
      </motion.div>

      <div className="flex justify-center mt-2">
        <motion.button
          whileTap={{ scale: 0.97 }}
          disabled={!canSubmit}
          onClick={onSubmit}
          className="px-8 py-3 rounded-full bg-[#181D27] text-white font-work-sans text-sm font-semibold hover:bg-[#181D27]/90 disabled:opacity-40 transition-colors"
        >
          Submit
        </motion.button>
      </div>
    </div>
  );
}
