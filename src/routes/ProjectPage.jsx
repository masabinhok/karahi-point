import Navbar from "../components/Navbar";
import Project from "../components/Projects";

const ProjectPage = () => {
  return (
    <main className="w-full bg-gradient-to-r from-green-400 to-green-800 flex flex-col items-center">
      <Navbar />
      <div className="mt-24 w-full ">
        <Project />
      </div>
    </main>
  );
};

export default ProjectPage;
