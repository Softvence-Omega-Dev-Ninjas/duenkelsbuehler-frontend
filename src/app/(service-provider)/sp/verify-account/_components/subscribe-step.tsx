import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CrownSVG, BrandLabel } from "./shared";

const features = [
  "Verify your account",
  "Send proposals to Service Providers",
  "Unlock an exclusive badge to attract clients / service providers",
  "Access to the Aristocrat's Circle",
  "Send agreements to clients before transacting with them",
  "Save your most used contacts to your profile",
  "(NDA's, service contracts, etc.)",
];

export function SubscribeStep({ onNext }: { onNext: () => void }) {
  return (
    <div className="max-w-lg mx-auto w-full flex flex-col items-center">
      <CrownSVG className="w-20 h-14" />
      <BrandLabel />

      <motion.ul
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } } }}
        className="w-full space-y-3 mb-8"
      >
        {features.map((f, i) => (
          <motion.li
            key={i}
            variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0, transition: { duration: 0.3 } } }}
            className="flex items-start gap-3 font-work-sans text-sm text-[#414651]"
          >
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#414651] shrink-0" />
            {f}
          </motion.li>
        ))}
      </motion.ul>

      <Button
        onClick={onNext}
        className="w-full h-14 rounded-full bg-[#181D27] hover:bg-[#181D27]/90 font-work-sans font-semibold text-base"
      >
        Subscribe
      </Button>
    </div>
  );
}
