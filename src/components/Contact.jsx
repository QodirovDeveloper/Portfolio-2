export default function Contact() {
  return (
    <>
      <div id="contact" className="pr-2 pl-2 bg-[#12161C]">
        <div className="md:py-30 py-20">
          <div className="space-y-5  flex flex-col items-center justify-center">
            <p className="text-5xl text-center text-[#e4e4e4]"> Contact</p>

            <div className="h-1.5 w-12 rounded-full bg-blue-700"></div>
            <p className="max-w-[650px] text-lg text-center text-[#cacaca]">
              Feel free to Contact me by submitting the form below and I will
              get back to you as soon as possible
            </p>
          </div>
          <div className="pt-10 flex items-center justify-center text-white px-4">
            <form className="w-full max-w-md bg-[#242731] backdrop-blur-lg rounded-xl shadow-lg p-6 space-y-5">
              <div>
                <label className="block mb-2 text-sm font-medium">
                  Enter your name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-4 py-2 rounded-md border border-gray-700 focus:outline-none"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium">
                  Enter your phone number OR Telegram username{" "}
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="+7(996)996-90-80 / @QodirovDev"
                  className="w-full px-4 py-2 rounded-md border border-gray-700 focus:outline-none"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium">
                  Enter your Email
                </label>
                <input
                  type="email"
                  placeholder="for@example.com"
                  className="w-full px-4 py-2 rounded-md border border-gray-700 focus:outline-none"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium">
                  Enter your Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows="4"
                  placeholder="Hello"
                  className="w-full px-4 py-2 rounded-md border border-gray-700 focus:outline-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-2 rounded-md bg-blue-700 hover:bg-blue-600 transition font-medium"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
