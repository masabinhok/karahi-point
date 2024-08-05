
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center bg-gradient-to-r from-red-400 to-pink-400 text-white min-h-screen py-12">
      <h1 className="text-4xl md:text-6xl font-bold mb-8">
        Our <span className="text-yellow-300">Projects</span>
      </h1>
      <div className="max-w-[1320px] w-full flex flex-col md:flex-row items-center justify-center gap-8 p-6">
        <ProjectCard />
      </div>
    </section>
  );
};

export default Projects;
