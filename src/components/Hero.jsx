import { motion } from "framer-motion";

export default function Hero() {
  return (
    <>
      <div id="home" className="relative w-full min-h-screen">
        <img
          src="./valley.jpg"
          alt="valley"
          className="w-full h-full object-cover -z-20 absolute"
        />
        <div
          className="absolute inset-0 pointer-events-none 
          bg-[linear-gradient(to_bottom,rgba(0,0,0,0.6),transparent_20%,transparent_80%,rgba(0,0,0,0.6))] "
        ></div>

        {/* TEXT */}
        <div className="text-white flex flex-col items-center select-none justify-center pt-52 z-50 uppercase relative">
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:text-6xl md:text-4xl text-[32px] py-2 font-medium text-center"
          >
            HI, I'M Hasanboy <br /> Kadirov
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="md:text-lg text-[16px] sm:py-2 pb-2 font-medium text-center"
          >
            I am a frontend developer. <br />I build websites and web
            applications.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="flex gap-2"
          >
            <a
              href="#contact"
              className="rounded-md bg-blue-600 py-2 px-6 cursor-pointer 
              transition duration-200 hover:shadow-[0_0_10px_1px_rgba(37,99,235,0.6)]"
            >
              Contact Me
            </a>

            <button
              onClick={() => window?.open("/resume.pdf", "_blank")}
              className="rounded-md border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white py-2 px-6 cursor-pointer
              transition duration-200 hover:shadow-[0_0_10px_1px_rgba(37,99,235,0.6)]"
            >
              CV
            </button>
          </motion.div>
        </div>

        {/* MOVING TEXT TOP */}
        <div className="absolute top-90 w-full overflow-hidden">
          <motion.div
            initial={{ x: "0%" }}
            animate={{ x: "-50%" }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex whitespace-nowrap"
          >
            <p
              className="text-4xl md:text-6xl lg:text-8xl uppercase font-bold text-transparent
                 [text-stroke:2px_#3B3F47] [-webkit-text-stroke:2px_#3B3F47]
                 drop-shadow-[0_0_10px_rgba(0,0,0,0.7)] px-4"
            >
              Frontend Developer | React & Next.js Specialist •
            </p>
            <p
              className="text-4xl md:text-6xl lg:text-8xl uppercase font-bold text-transparent
                 [text-stroke:2px_#3B3F47] [-webkit-text-stroke:2px_#3B3F47]
                 drop-shadow-[0_0_10px_rgba(0,0,0,0.7)] px-4"
            >
              Frontend Developer | React & Next.js Specialist •
            </p>
          </motion.div>
        </div>

        {/* MOVING TEXT BOTTOM */}
        <div className="absolute bottom-0 w-full overflow-hidden">
          <motion.div
            initial={{ x: "0%" }}
            animate={{ x: "-50%" }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex whitespace-nowrap"
          >
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="text-4xl md:text-6xl lg:text-8xl uppercase font-bold text-transparent
          [text-stroke:1px_#3B3F47] [-webkit-text-stroke:1px_#3B3F47]
          drop-shadow-[0_0_10px_rgba(0,0,0,0.7)] px-4"
              >
                <div className="flex items-center justify-center gap-8 text-2xl">
                  <p>QodirovDeveloper</p>
                  <span className="relative flex h-2 w-2 mt-1">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-700 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-700"></span>
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
}
