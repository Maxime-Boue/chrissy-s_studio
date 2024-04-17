"use client";

import { useActiveSectionContext } from "@/context/activeSectionContext";
import { links } from "@/lib/data";
import clsx from "clsx";
import { motion } from "framer-motion";
import Link from "next/link";

const Header = () => {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  return (
    <header className="flex justify-center relative z-999">
      <div className="fixed top-0 sm:top-3 w-full h-[3rem] sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full border border-white backdrop-blur-[0.5rem] bg-opacity-10 rounded-none bg-white shadow-lg">
        <nav className="flex justify-center sm:h-full sm:text-sm">
          <ul className="flex items-center gap-8 text-gray-800 uppercase">
            {links.map((link) => (
              <motion.li
                key={link.hash}
                className="h-3/4 flex items-center justify-center relative"
                initial={{ x: -200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
              >
                <Link
                  className={clsx(
                    "flex w-full items-center justify-center p-3 font-medium hover:text-gray-900 transition ",
                    {
                      "text-white ": activeSection === link.name,
                    }
                  )}
                  href={link.route}
                  onClick={() => {
                    setActiveSection(link.name);
                    setTimeOfLastClick(Date.now());
                  }}
                >
                  {link.name}
                  {link.name === activeSection && (
                    <motion.span
                      className="bg-gradient-to-r from-[#de54e6] to-[#eabf00] absolute rounded-full -z-10 inset-0  "
                      layoutId="activeSection"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    ></motion.span>
                  )}
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
