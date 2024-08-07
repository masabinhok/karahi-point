import projects from "../constants/projects";
import Select from "./Select";
import { totalCost, totalDue } from "../constants/calculator";

const ProjectCard = () => {
  return (
    <div className="max-w-[1320px] w-full grid grid-cols-2 gap-4 px-6 ">
      {projects.map((project, index) => (
        <div
          key={index}
          className="relative w-full flex flex-col items-center justify-center overflow-hidden rounded-lg shadow-lg"
        >
          <div className="relative w-full overflow-hidden rounded-lg">
            <img
              src={project.image}
              alt={project.title}
              className="w-full object-cover rounded-lg transition-transform duration-300 ease-in-out hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center p-4 opacity-0  max-md:opacity-100 transition-opacity duration-300 ease-in-out hover:opacity-100 text-white">
              <h2 className="text-2xl text-center max-md:text-sm font-bold mb-2">
                {project.title}
              </h2>
              <p className="text-center max-md:text-sm">
                {project.description}
              </p>
            </div>
          </div>
          <div className="w-full p-4 flex flex-col items-center">
            <p className="text-lg font-bold">
              Total Cost: <span className="text-yellow-400">${totalCost}</span>
            </p>{" "}
            <p className="text-lg font-bold">
              Amount Due: <span className="text-yellow-400">${totalDue}</span>
            </p>
            <Select />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectCard;
