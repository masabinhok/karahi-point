import projects from "../constants/projects";

const ProjectCard = () => {
  return (
    <div className="max-w-[1320px] w-full flex flex-col md:flex-row items-center justify-center gap-8 px-6 cursor-pointer">
      {projects.map((project, index) => (
        <div
          key={index}
          className="relative w-full md:w-1/3 flex flex-col items-center justify-center overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-[400px] h-[400px] object-cover rounded-lg transition-transform duration-300 ease-in-out"
          />
          <div className="absolute inset-0 bg-white bg-opacity-80 text-gray-800 flex flex-col items-center justify-center p-4 md:opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100">
            <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
            <p className="text-center">{project.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectCard;
