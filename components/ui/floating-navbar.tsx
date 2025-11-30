"use client";

import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import { cn } from "@/lib/utils";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        setVisible(direction < 0);
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 1, y: -100 }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{ duration: 0.25 }}
        className={cn(
          `
            flex max-w-fit fixed top-10 inset-x-0 mx-auto
            rounded-full z-[5000] pr-2 pl-8 py-2 items-center 
            justify-center space-x-4
            
            /* DARK-ONLY STYLING */
            backdrop-blur-xl
            border border-white/10
            bg-[var(--surface)]
            text-[var(--text)]

            shadow-[0_4px_20px_rgba(0,0,0,0.25)]
          `,
          className
        )}
      >
        {navItems.map((navItem, idx) => (
          <a
            key={`link-${idx}`}
            href={navItem.link}
            className="
              relative flex items-center space-x-1 text-[var(--muted)]
              hover:text-white transition
            "
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className="hidden sm:block text-sm">{navItem.name}</span>
          </a>
        ))}

        <button
          className="
            border border-white/20
            px-4 py-2 rounded-full text-sm font-medium
            text-white relative
            hover:bg-white/10 transition
          "
        >
          <span>Login</span>
          <span
            className="
            absolute inset-x-0 w-1/2 mx-auto -bottom-px 
            bg-gradient-to-r from-transparent via-blue-500 to-transparent 
            h-px
          "
          />
        </button>
      </motion.div>
    </AnimatePresence>
  );
};
