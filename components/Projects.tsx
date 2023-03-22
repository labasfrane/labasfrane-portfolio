import Image from "next/image";
import { Project } from "@/typings";
import { urlFor } from "@/sanity";

type Props = {
  projects: Project[];
};

const Projects = ({ projects }: Props) => {
  return (
    <div className="h-screen relative flex flex-col items-center justify-evenly md:flex-row text-left max-w-full mx-auto z-0 overflow-hidden">
      <h3 className="sectionHeader">Projects</h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-customYellow scrollbar-thumb-customGreen">
        {/* Project data */}
        {projects.map((project, i) => (
          <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
            <Image
              src={urlFor(project?.image)?.url()}
              alt={project?._id}
              width={450}
              height={400}
              className="object-contain"
            />

            <div className="space-y-5 px-0 md:px-10 max-w-7xl border border-customRed">
              <h4 className="text-4xl font-semibold text-center">
                Project {i + 1} of {projects.length}: {project?.title}
              </h4>
              {/* Techstack*/}
              <div className="flex justify-center items-center space-x-2">
                {project?.technologies.map((technology) => (
                  <Image
                    src={urlFor(technology?.image)?.url()}
                    alt={technology?._id}
                    width={120}
                    height={120}
                    className="object-none w-14 h-14"
                  />
                ))}
              </div>

              {/* Summary */}
              <p className="text-lg text-center md:text-left">
                {project?.summary}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] left-0 h-[500px] bg-customPurple/70 -skew-y-12"></div>
    </div>
  );
};

export default Projects;
