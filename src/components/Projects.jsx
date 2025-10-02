export default function Projects() {
  return (
    <>
      <div className="bg-[#0D1014]">
        <div
          id="projects"
          className="container mx-auto sm:pl-6 sm:pr-6 pl-2 pr-2 max-w-[1300px] font-normal"
        >
          <div className="md:py-30 py-20">
            <div className="space-y-5 sm:pb-12 pb-6 flex flex-col items-center justify-center">
              <p className="text-5xl text-center text-[#e4e4e4]">Projects</p>
              <div className="h-1.5 w-12 rounded-full bg-blue-700"></div>
              <p className="text-lg text-center text-[#cacaca]">
                You can see my projects here!
              </p>
              <p className="text-lg text-center text-[#cacaca]">
                You can see more projects in my{" "}
                <a
                  href="https://github.com/QodirovDeveloper"
                  className="text-[#0DCAF0] btn-link"
                  target="_blank"
                >
                  GitHub
                </a>{" "}
                page.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
              <div className="w-full bg-black text-white rounded-sm overflow-hidden shadow-lg">
                <div>
                  <img
                    src="unsplash.png"
                    alt="unsplash"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <p className="text-sm text-gray-400 px-4 mt-3">22-09-2025</p>
                <h2 className="px-4 mt-1 font-semibold text-lg">
                  Unsplash Photos Clone.
                </h2>
                <p className="px-4 text-sm text-gray-300 mt-1 mb-4">
                  An Unsplash clone where users can search, view, and upload
                  images.
                </p>
                <div className="px-4 pb-4">
                  <a
                    href="https://unsplash-photo-ten.vercel.app"
                    target="_blank"
                    className="inline-flex items-center justify-center py-2 px-3 border border-gray-600 rounded-lg hover:bg-gray-800 transition"
                  >
                    DEMO
                  </a>
                </div>
              </div>

              <div className="w-full bg-black text-white rounded-sm overflow-hidden shadow-lg">
                <div>
                  <img
                    src="recipe.png"
                    alt="recipe"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <p className="text-sm text-gray-400 px-4 mt-3">16-09-2025</p>
                <h2 className="px-4 mt-1 font-semibold text-lg">
                  Healthy Recipe Finder
                </h2>
                <p className="px-4 text-sm text-gray-300 mt-1 mb-4">
                  An application that allows users to search, view, and add
                  healthy food recipes.
                </p>
                <div className="px-4 pb-4">
                  <a
                    href="https://recipe-finderr-two.vercel.app"
                    target="_blank"
                    className="inline-flex items-center justify-center py-2 px-3 border border-gray-600 rounded-lg hover:bg-gray-800 transition"
                  >
                    DEMO
                  </a>
                </div>
              </div>

              <div className="w-full bg-black text-white rounded-sm overflow-hidden shadow-lg">
                <div>
                  <img
                    src="youTube.png"
                    alt="youTube"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <p className="text-sm text-gray-400 px-4 mt-3">26-08-2025</p>
                <h2 className="px-4 mt-1 font-semibold text-lg">
                  YouTube Clone
                </h2>
                <p className="px-4 text-sm text-gray-300 mt-1 mb-4">
                  {/* A video platform similar to YouTube. */}A YouTube-style
                  platform where users can upload, search, and watch videos.
                </p>
                <div className="px-4 pb-4">
                  <a
                    href="https://youtube-clone-iota-azure.vercel.app/"
                    target="_blank"
                    className="inline-flex items-end justify-center py-2 px-3 border border-gray-600 rounded-lg hover:bg-gray-800 transition"
                  >
                    DEMO
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
