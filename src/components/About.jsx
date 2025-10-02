const skills = [
  "TypeScript",
  "JavaScript",
  "NextJS",
  "ReactJS",
  // "LynxJS",
  "TailwindCSS",
  "ReduxToolkit",
  "GIT",
  "Motion",
  "Shadcn UI",
];

export default function About() {
  return (
    <>
      <div className="bg-[#12161C] pt-5">
        <div
          id="aboutMe"
          className="container mx-auto sm:pl-6 sm:pr-6 pl-2 pr-2 max-w-[1300px] font-normal"
        >
          <div className="md:py-30 py-20">
            <div className="space-y-5 pb-4 flex flex-col items-center justify-center">
              <p className="text-5xl text-center text-[#e4e4e4]">About Me</p>
              <div className="h-1.5 w-12 rounded-full bg-blue-700"></div>
              <p className="max-w-[480px] text-lg text-center text-[#cacaca]">
                Here you can find information about who I am, what I do, and my
                current skills in programming and technology.
              </p>
            </div>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 py-4 duration-200">
              <div>
                <p className="text-3xl pb-6 text-[#e4e4e4]">Get to know me!</p>
                <p className="text-lg text-[#cacaca]">
                  Hello! I’m a frontend developer focused on modern web
                  technologies. I studied at Najot Ta’lim from December 2024 to
                  September 2025 and gained practical skills from four qualified
                  mentors. Problem-solving drives me, and I simply love
                  programming!
                </p>
              </div>
              <div>
                <p className="text-3xl pb-6 text-[#e4e4e4]">My Skills</p>
                <div className="flex flex-wrap gap-4">
                  {skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-2 bg-[#E9ECEF] text-[#212529] font-medium rounded-md"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
