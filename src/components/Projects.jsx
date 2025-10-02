import { motion } from "framer-motion";

const projects = [
  {
    title: "Unsplash Photos Clone",
    date: "22-09-2025",
    img: "unsplash.png",
    desc: "An Unsplash clone where users can search, view, and upload images.",
    link: "https://unsplash-photo-ten.vercel.app",
  },
  {
    title: "Healthy Recipe Finder",
    date: "16-09-2025",
    img: "recipe.png",
    desc: "An application that allows users to search, view, and add healthy food recipes.",
    link: "https://recipe-finderr-two.vercel.app",
  },
  {
    title: "YouTube Clone",
    date: "26-08-2025",
    img: "youTube.png",
    desc: "A YouTube-style platform where users can upload, search, and watch videos.",
    link: "https://youtube-clone-iota-azure.vercel.app/",
  },
];

export default function Projects() {
  return (
    <div className="bg-[#0D1014]">
      <div
        id="projects"
        className="container mx-auto sm:pl-6 sm:pr-6 pl-2 pr-2 max-w-[1300px] font-normal"
      >
        <div className="md:py-30 py-20">
          {/* Title */}
          <div className="space-y-5 sm:pb-12 pb-6 flex flex-col items-center justify-center">
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-5xl text-center text-[#e4e4e4]"
            >
              Projects
            </motion.p>
            <div className="h-1.5 w-12 rounded-full bg-blue-700"></div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-lg text-center text-[#cacaca]"
            >
              You can see my projects here!
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-lg text-center text-[#cacaca]"
            >
              You can see more projects in my{" "}
              <a
                href="https://github.com/QodirovDeveloper"
                className="text-[#0DCAF0] underline"
                target="_blank"
              >
                GitHub
              </a>{" "}
              page.
            </motion.p>
          </div>

          {/* Project Cards */}
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
            {projects.map((proj, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.3 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 8px 30px rgba(0, 0, 0, 0.5)",
                }}
                whileTap={{ scale: 0.97 }}
                className="w-full bg-black text-white rounded-md overflow-hidden shadow-lg"
              >
                <div className="overflow-hidden">
                  <a href={proj.link} target="_blank">
                    <motion.img
                      src={proj.img}
                      alt={proj.title}
                      className="w-full h-auto object-cover"
                      whileHover={{ rotate: 1.1 }}
                      // transition={{ duration: 0.4 }}
                    />
                  </a>
                </div>
                <p className="text-sm text-gray-400 px-4 mt-3">{proj.date}</p>
                <h2 className="px-4 mt-1 font-semibold text-lg">
                  {proj.title}
                </h2>
                <p className="px-4 text-sm text-gray-300 mt-1 mb-4">
                  {proj.desc}
                </p>
                <div className="px-4 pb-4">
                  <a
                    href={proj.link}
                    target="_blank"
                    className="inline-flex items-center justify-center py-2 px-3 border border-gray-600 rounded-lg hover:bg-gray-800 transition"
                  >
                    DEMO
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
