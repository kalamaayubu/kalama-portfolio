"use client";

import { cn } from "@/lib/utils";
import { Contact, User, Workflow } from "lucide-react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import { useState } from "react";

const navItems = [
  {
    label: "Contacts",
    link: "/",
    icon: <Contact className="size-5" />,
  },
  {
    label: "Services",
    link: "/",
    icon: <Workflow className="size-5" />,
  },
  {
    label: "Testimonials",
    link: "/",
    icon: <Contact className="size-5" />,
  },
  {
    label: "About",
    link: "/",
    icon: <User className="size-5" />,
  },
];

const NavBar = () => {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollY, "change", (current) => {
    if (typeof current === "number") {
      const direction = current - scrollY.getPrevious()!;

      setVisible(direction < 0);
    }
  });
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1, y: 4 }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{ duration: 0.4 }}
        className={cn(
          `
            flex max-w-fit fixed top-4 inset-x-0 mx-auto
            rounded-full z-5000 pr-2 pl-8 py-2 items-center 
            justify-center space-x-4 bg-[#0c0c11]
            
            /* DARK-ONLY STYLING */
            backdrop-blur-xl
            border border-white/10
            shadow-[0_4px_20px_rgba(0,0,0,0.25)]
          `
        )}
      >
        {navItems.map((navItem, index) => (
          <div
            key={index}
            className="relative group p-2 rounded-full cursor-pointer"
          >
            {/* Icon */}
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className="hidden sm:block text-sm">{navItem.label}</span>

            {/* Tooltip only for small screens */}
            <span
              className="
                absolute bottom-6 left-1/2 -translate-x-1/2 mb-2
                px-2 py-1 bg-[#0c0c11] text-white text-sm border border-white/10 rounded-full font-medium
                opacity-0 pointer-events-none
                group-hover:opacity-100 transition-opacity duration-300
                sm:hidden z-50
              "
            >
              {navItem.label}
            </span>
          </div>
        ))}

        <button
          className="
            border border-white/20
            px-4 py-2 rounded-full text-sm font-medium
            text-white relative
            hover:bg-white/10 transition
            cursor-pointer
          "
        >
          <span>Get in touch</span>
          <span
            className="
            absolute inset-x-0 w-1/2 mx-auto -bottom-px 
            bg-linear-to-r from-transparent via-blue-500 to-transparent 
            h-px
          "
          />
        </button>
      </motion.div>
    </AnimatePresence>
  );
};

export default NavBar;
