import React, { useRef, useState } from "react";
import projects from "../constants/projects";
import Select from "./Select";

const ProjectCard = () => {
  const scrollContainerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleManualScroll = (direction) => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      const scrollAmount =
        direction === "left"
          ? -scrollContainer.clientWidth / 2
          : scrollContainer.clientWidth / 2;
      scrollContainer.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="relative max-w-[840px] max-md:max-w-[600px] max-sm:max-w-[380px] mx-auto">
      <div
        className="flex overflow-x-auto space-x-4 px-6 scroll-smooth custom-scrollbar"
        ref={scrollContainerRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ scrollBehavior: "smooth" }}
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className="min-w-[280px] md:min-w-[360px] lg:min-w-[400px] flex-shrink-0 relative flex flex-col items-center justify-center overflow-hidden rounded-lg shadow-lg"
          >
            <div className="relative w-full overflow-hidden rounded-lg">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-lg transition-transform duration-300 ease-in-out hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center p-4 opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100 text-white">
                <h2 className="text-lg text-center font-bold mb-2">
                  {project.title}
                </h2>
                <p className="text-center text-sm">{project.description}</p>
              </div>
            </div>
            <div className="w-full p-4 flex flex-col items-center">
              <p className="text-sm font-bold">
                Total Cost:{" "}
                <span className="text-yellow-400">${project.totalCost}</span>
              </p>
              <p className="text-sm font-bold">
                Amount Due:{" "}
                <span className="text-yellow-400">${project.amountDue}</span>
              </p>
              <Select selectKey={project.selectKey} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
