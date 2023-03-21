import React from "react";

type Props = {};

const Projects = (props: Props) => {
  const projects = [1, 2, 3, 4, 5];
  return (
    <div className="h-screen relative flex flex-col items-center justify-evenly md:flex-row text-left max-w-full mx-auto z-0 overflow-hidden">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-customYellow text-2xl">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-customYellow scrollbar-thumb-customGreen">
        {projects.map((project, i) => (
          <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 h-screen">
            <img src="" alt="" />

            <div className="space-y-8 px-0 md:px-10 max-w-6xl">
              <h4 className="text-3xl font-semibold text-center">
                Project {i + 1} of {projects.length}: Cash Track
              </h4>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos
                fugiat amet similique animi, consequuntur rem quidem tenetur,
                dignissimos perferendis delectus magni impedit ad inventore
                adipisci nemo assumenda ab reiciendis quis quo quisquam
                voluptate atque distinctio veniam. Quae natus corrupti, quis
                similique modi provident cum, excepturi consequatur
                reprehenderit earum repellat sed.
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] left-0 h-[500px] bg-customGreen/70 -skew-y-12"></div>
    </div>
  );
};

export default Projects;
