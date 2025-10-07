import { links } from "../data";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/80 backdrop-blur-sm border-b border-emerald-100  sticky top-0 z-50 ">
      <div className="align-element py-4 flex flex-col sm:flex-row sm:gap-x-16 sm:items-center sm:py-8">
        {/* Logo and Hamburger Button Row */}
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-bold">
            GP<span className="text-emerald-600">.</span>
          </h2>
          {/* Hamburger Button for Mobile */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex flex-col justify-center items-center w-8 h-8 sm:hidden"
          >
            <span
              className={`bg-slate-600 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
              }`}
            />
            <span
              className={`bg-slate-600 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`bg-slate-600 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
              }`}
            />
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <motion.div
          className="hidden sm:flex gap-x-6"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {links.map((link) => {
            const { id, href, text } = link;
            return (
              <a
                key={id}
                href={href}
                className="capitalize text-slate-600 font-medium tracking-wide
                 hover:text-emerald-600 duration-300 whitespace-nowrap relative group"
              >
                {text}
                <span
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-600 transition-all 
                duration-300 group-hover:w-full"
                ></span>
              </a>
            );
          })}
        </motion.div>

        {/* Mobile Navigation Links*/}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="sm:hidden overflow-hidden  "
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="flex flex-col items-center mt-4 gap-y-4 pb-4">
                {links.map((link) => {
                  const { id, href, text } = link;
                  return (
                    <motion.a
                      key={id}
                      href={href}
                      className="capitalize text-slate-600 font-medium tracking-wide
                       hover:text-emerald-600 duration-300 whitespace-nowrap relative group text-lg"
                      initial={{ opacity: 0, y: 0 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                      onClick={() => {
                        setTimeout(() => setIsOpen(false), 1000);
                      }}
                    >
                      {text}
                      <span
                        className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-600 transition-all 
                      duration-300 group-hover:w-full"
                      ></span>
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
