"use client";

import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Compass, ShoppingBag, User } from "lucide-react";

const bottomItems = [
  { label: "Discover", href: "/client/discover", icon: Compass },
  { label: "Transact", href: "/client/transact", icon: ShoppingBag },
  { label: "Me", href: "/client/settings", icon: User },
];

export function ClientBottomNav() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <motion.nav
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
      className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-around bg-[#181D27] px-6 py-3"
    >
      {bottomItems.map(({ label, href, icon: Icon }) => {
        const isTransact = label === "Transact";
        const isActive = pathname.startsWith(href);

        if (isTransact) {
          return (
            <button
              key={href}
              onClick={() => router.push(`/client/transact?t=${Date.now()}`)}
              className="flex flex-col items-center gap-1 -mt-8 cursor-pointer"
            >
              <motion.div
                whileTap={{ scale: 0.92 }}
                className="w-16 h-16 rounded-full bg-[#181D27] border-4 border-white flex items-center justify-center shadow-xl"
              >
                <Icon className="h-7 w-7 text-white" />
              </motion.div>
              <span className={`font-work-sans text-xs mt-1 transition-colors ${isActive ? "text-[#16A34A]" : "text-white"}`}>
                {label}
              </span>
            </button>
          );
        }

        return (
          <button
            key={href}
            onClick={() => router.push(href)}
            className="flex flex-col items-center gap-1 cursor-pointer group"
          >
            <motion.div whileTap={{ scale: 0.9 }}>
              <span className={`font-work-sans text-xs transition-colors group-hover:text-[#16A34A] ${isActive ? "text-[#16A34A]" : "text-white"}`}>
                {label}
              </span>
            </motion.div>
          </button>
        );
      })}
    </motion.nav>
  );
}
