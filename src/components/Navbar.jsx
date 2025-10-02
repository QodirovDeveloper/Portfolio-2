import { BsInfoSquare } from "react-icons/bs";
import { HiMenuAlt2 } from "react-icons/hi";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  return (
    <motion.header
      ref={menuRef}
      className="fixed left-0 right-0 top-0 z-[999]"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="absolute inset-0 h-3/5 backdrop-blur-sm border-b border-[#26292C]"></div>

      <div className="flex items-start justify-between container mx-auto sm:pl-6 sm:pr-6 pl-2 pr-2 max-w-[1300px] font-medium">
        <motion.div
          className="text-white relative z-10 pt-6 flex items-center gap-2"
          initial={{ x: -60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Mobil menyu tugma */}
          <div className="md:hidden">
            <button
              onClick={() => setOpen((prev) => !prev)}
              className="p-2 bg-[#56585A] rounded-md cursor-pointer"
            >
              <HiMenuAlt2 />
            </button>
          </div>

          {/* About link */}
          <a
            href="#aboutMe"
            className=" flex items-center hover:text-blue-700 duration-200 max-md:hidden"
          >
            <span className="inline-block mr-1 text-xl ">
              <BsInfoSquare />
            </span>
            About Me
          </a>

          {/* Projects link */}
          <a
            href="#projects"
            className="absolute left-25 ml-2 w-28 flex gap-1 hover:text-blue-700 duration-200 max-md:hidden"
          >
            <svg
              className="stroke-current"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="4" y="4" width="6" height="6" rx="1" strokeWidth="1.6" />
              <rect
                x="14"
                y="4"
                width="6"
                height="6"
                rx="1"
                strokeWidth="1.6"
              />
              <rect
                x="4"
                y="14"
                width="6"
                height="6"
                rx="1"
                strokeWidth="1.6"
              />
              <rect
                x="14"
                y="14"
                width="6"
                height="6"
                rx="1"
                strokeWidth="1.6"
              />
            </svg>
            Projects
          </a>
        </motion.div>

        {/* Profil rasmi */}
        <motion.a
          href="#home"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="bg-[#14191F] max-md:ml-8 z-999 sm:rounded-b-full border border-[#26292C] duration-300 max-sm:rounded-full sm:pt-3 relative  shadow-[0_5px_10px_5px_rgba(37,99,235,0.1)]">
            <img
              className="rounded-full p-3"
              width={120}
              height={120}
              src="./me.jpg"
              alt="me"
            />
          </div>
        </motion.a>

        {/* Blog tugma */}
        <motion.div
          className="text-white relative z-10 pt-5"
          initial={{ x: 60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a href="https://t.me/hasanboy_vlog" target="_blank">
            <button
              className="rounded-md bg-blue-600 py-1.5 px-3 md:px-5 cursor-pointer
              transition duration-200 hover:shadow-[0_0_10px_1px_rgba(37,99,235,0.6)]"
            >
              Blog
            </button>
          </a>
        </motion.div>
      </div>

      {/* Mobil menyu */}
      <AnimatePresence>
        {open && (
          <motion.nav
            className="md:hidden absolute pt-24 top-0 font-bold left-0 text-blue-600 right-0 bg-[#0D1014] -z-10 shadow-md"
            initial={{ y: -200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -200, opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <ul className="flex flex-col items-start gap-4 px-4 py-6">
              <li>
                <a href="#aboutMe" onClick={() => setOpen(false)}>
                  About Me
                </a>
              </li>
              <div className="bg-[#26292C] w-full h-[1px]"></div>
              <li>
                <a href="#projects" onClick={() => setOpen(false)}>
                  Projects
                </a>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
