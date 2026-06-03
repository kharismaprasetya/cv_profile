"use client";

import Image from "next/image";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { useState } from "react";

export default function Project() {
  const projects = [
    {
      title: "MaritimHub",
      description: "Digital Profiling (DIPRO)",
      image: "/images/maritimhub/maritimhub.png",
    },
    {
      title: "MaritimHub",
      description: "Digital Profiling (DIPRO)",
      image: "/images/maritimhub/maritimhub.png",
    },
    {
      title: "MaritimHub",
      description: "Digital Profiling (DIPRO)",
      image: "/images/maritimhub/maritimhub.png",
    },
  ];
  // Slider state
  const cardsPerView = 3;
  const [startIndex, setStartIndex] = useState(0);
  const endIndex = startIndex + cardsPerView;

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(prev - cardsPerView, 0));
  };

  const handleNext = () => {
    setStartIndex((prev) =>
      Math.min(prev + cardsPerView, projects.length - cardsPerView),
    );
  };

  return (
    <section id="project" className="project">
      <div className="py-[80px] px-8 md:px-[60px]">
        <div className="grid grid-cols-3 gap-4">
          {/* Title section */}
          <div>
            <div className="flex items-center gap-2">
              <Image
                className="w-[34px]"
                width={34}
                height={35}
                src="/icons/sparkle.svg"
                alt="Sparkle"
              />
              <span className="text-lg text-indigo-400 font-medium">
                Explore
              </span>
            </div>
            <div className="text-2xl font-bold text-white mt-4">
              Explore My Latest <span className="text-brand">Projects</span>
            </div>
            <div className="my-4">
              Experience excellence in software development through my latest
              projects, showcasing innovation, quality, and real-world impact.
              Each project reflects my commitment to delivering exceptional
              results and pushing the boundaries of technology.
            </div>
            <div className="flex gap-4 w-fit bg-secondary p-2 rounded-4xl">
              <button
                className="w-[46px] h-[46px] rounded-full bg-gray-900 flex items-center justify-center hover:cursor-pointer hover:bg-brand"
                onClick={handlePrev}
                disabled={startIndex === 0}
                aria-label="Previous"
              >
                <FaArrowLeftLong className="text-white" />
              </button>
              <button
                className="w-[46px] h-[46px] rounded-full bg-gray-900 flex items-center justify-center hover:cursor-pointer hover:bg-brand"
                onClick={handleNext}
                disabled={startIndex >= projects.length - cardsPerView}
                aria-label="Next"
              >
                <FaArrowRightLong className="text-white" />
              </button>
            </div>
          </div>

          {/* Project slider section */}
          <div className="project-slider flex col-span-2 overflow-hidden">
            <div className="project-group flex items-center">
              {projects.slice(startIndex, endIndex).map((project, index) => (
                <div
                  key={startIndex + index}
                  className="group project-swiper px-3 py-5 min-w-[256px] border border-gray-700 rounded-xl hover:bg-gray-900 hover:cursor-pointer"
                >
                  <div className="flex justify-center items-center rounded-lg h-[200px]">
                    <Image
                      src={project.image}
                      width={240}
                      height={120}
                      alt="Project"
                    />
                  </div>
                  <p className="text-indigo-400 text-sm tracking-wide mt-5">
                    {project.title}
                  </p>
                  <p className="font-bold text-lg text-white tracking-wide mt-2 group-hover:text-brand transition-colors duration-300">
                    {project.description}
                  </p>
                </div>
              ))}
            </div>
            <div aria-hidden className="project-group flex items-center">
              {projects.slice(startIndex, endIndex).map((project, index) => (
                <div
                  key={startIndex + index}
                  className="group project-swiper px-3 py-5 min-w-[256px] border border-gray-700 rounded-xl hover:bg-gray-900 hover:cursor-pointer"
                >
                  <div className="flex justify-center items-center rounded-lg h-[200px]">
                    <Image
                      src={project.image}
                      width={240}
                      height={120}
                      alt="Project"
                    />
                  </div>
                  <p className="text-indigo-400 text-sm tracking-wide mt-5">
                    {project.title}
                  </p>
                  <p className="font-bold text-lg text-white tracking-wide mt-2 group-hover:text-brand transition-colors duration-300">
                    {project.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
