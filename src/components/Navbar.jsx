import { BsInfoSquare } from "react-icons/bs";
import { HiMenuAlt2 } from "react-icons/hi";
import { useState, useRef, useEffect } from "react";

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
    <header ref={menuRef} className="fixed left-0 right-0 top-0 z-[999]">
      <div className="absolute inset-0 h-3/5 backdrop-blur-sm border-b border-[#26292C]"></div>

      <div className="flex items-start justify-between container mx-auto sm:pl-6 sm:pr-6 pl-2 pr-2 max-w-[1300px] font-medium">
        <div className="text-white relative z-10 pt-6 flex items-center gap-2">
          <div className="md:hidden">
            <button
              onClick={() => setOpen((prev) => !prev)}
              className="p-2 bg-[#56585A] rounded-md cursor-pointer"
            >
              <HiMenuAlt2 />
            </button>
          </div>

          <a
            href="#aboutMe"
            className=" flex items-center hover:text-blue-700 duration-200 max-md:hidden"
          >
            <span className="inline-block mr-1 text-xl ">
              <BsInfoSquare />
            </span>
            About Me
          </a>

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
        </div>
        <a href="#home">
          <div className="bg-[#14191F] max-md:ml-8 z-999 sm:rounded-b-full border border-[#26292C] duration-300 max-sm:rounded-full sm:pt-3 relative  shadow-[0_5px_10px_5px_rgba(37,99,235,0.1)]">
            <img
              className="rounded-full p-3"
              width={120}
              height={120}
              src="./me.jpg"
              alt="me"
            />
          </div>
        </a>

        <div className="text-white relative z-10 pt-5">
          <a href="https://t.me/hasanboy_vlog" target="_blank">
            <button
              className="rounded-md bg-blue-600 py-1.5 px-3 md:px-5 cursor-pointer
              transition duration-200 hover:shadow-[0_0_10px_1px_rgba(37,99,235,0.6)]"
            >
              Blog
            </button>
          </a>
        </div>
      </div>

      {/* Mobil menyu */}
      {open && (
        <nav className="md:hidden absolute pt-24 top-0 font-bold left-0 text-blue-600  right-0 bg-[#0D1014]  -z-10 shadow-md">
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
        </nav>
      )}
    </header>
  );
}
