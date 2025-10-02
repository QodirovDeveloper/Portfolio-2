"use client";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <>
      <div id="contact" className="pr-2 pl-2 bg-[#12161C]">
        <div className="md:py-30 py-20">
          <div className="space-y-5 flex flex-col items-center justify-center">
            <motion.p
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl text-center text-[#e4e4e4]"
            >
              Contact
            </motion.p>

            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="h-1.5 w-12 rounded-full bg-blue-700"
            ></motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="max-w-[650px] text-lg text-center text-[#cacaca]"
            >
              Feel free to Contact me by submitting the form below and I will
              get back to you as soon as possible
            </motion.p>
          </div>

          <div className="pt-10 flex items-center justify-center text-white px-4">
            <motion.form
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="w-full max-w-md bg-[#242731] backdrop-blur-lg rounded-xl shadow-lg p-6 space-y-5"
            >
              {/* Name */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <label className="block mb-2 text-sm font-medium">
                  Enter your name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-4 py-2 rounded-md border border-gray-700 focus:outline-none"
                />
              </motion.div>

              {/* Phone / Telegram */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <label className="block mb-2 text-sm font-medium">
                  Enter your phone number OR Telegram username{" "}
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="+7(996)996-90-80 / @QodirovDev"
                  className="w-full px-4 py-2 rounded-md border border-gray-700 focus:outline-none"
                />
              </motion.div>

              {/* Email */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <label className="block mb-2 text-sm font-medium">
                  Enter your Email
                </label>
                <input
                  type="email"
                  placeholder="for@example.com"
                  className="w-full px-4 py-2 rounded-md border border-gray-700 focus:outline-none"
                />
              </motion.div>

              {/* Message */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <label className="block mb-2 text-sm font-medium">
                  Enter your Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows="4"
                  placeholder="Hello"
                  className="w-full px-4 py-2 rounded-md border border-gray-700 focus:outline-none"
                ></textarea>
              </motion.div>

              {/* Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 200 }}
                type="submit"
                className="w-full py-2 rounded-md bg-blue-700 hover:bg-blue-600 transition font-medium"
              >
                Send
              </motion.button>
            </motion.form>
          </div>
        </div>
      </div>
    </>
  );
}
