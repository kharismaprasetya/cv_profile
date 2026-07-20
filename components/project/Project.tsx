"use client";

import Image from "next/image";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { useEffect, useRef } from "react";

const CARD_WIDTH = 272; // 256px card + 16px gap
const SPEED = 0.06; // px per ms
const LOOP_MULTIPLIER = 3;
const JUMP_DURATION = 220;

const projects = [
  {
    title: "Kemenperin",
    description: "E-Material Center in Jepara",
    image: "/images/jepara/erpnext-dashboard.jpg",
  },
  {
    title: "Praktis",
    description: "E-Commerce Omnichannel",
    image: "/images/praktis/praktis-omnichannel.svg",
  },
  {
    title: "Datamedika",
    description: "Digital Profiling (DIPRO)",
    image: "/images/maritimhub/maritimhub.png",
  },
  {
    title: "SPBE - Posyandu",
    description: "Posyandu Web",
    image: "/images/spbe/posyandu-web.png",
  },
  {
    title: "SPBE - Posyandu",
    description: "Posyandu Mobile",
    image: "/images/spbe/posyandu-mobile.png",
  },
  {
    title: "SPBE - Sideka",
    description: "Sideka Web",
    image: "/images/spbe/sideka-web.png",
  },
  {
    title: "SPBE - Sideka",
    description: "Sideka Mobile",
    image: "/images/spbe/sideka-mobile.png",
  },
  {
    title: "MaritimHub",
    description: "Digital Profiling (DIPRO)",
    image: "/images/maritimhub/maritimhub.png",
  },
];

const totalWidth = projects.length * CARD_WIDTH;
const START_OFFSET = totalWidth;
const displayProjects = Array.from({ length: LOOP_MULTIPLIER }, () => projects).flat();

export default function Project() {
  const trackRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(START_OFFSET);
  const isPausedRef = useRef(false);
  const lastTimeRef = useRef<number | null>(null);
  const rafRef = useRef<number | null>(null);
  const jumpAnimationRef = useRef<{
    from: number;
    to: number;
    startTime: number;
  } | null>(null);

  const setTrackPosition = (offset: number) => {
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(-${offset}px)`;
    }
  };

  const normalizeOffset = (offset: number) => {
    let normalized = offset;

    while (normalized < totalWidth) {
      normalized += totalWidth;
    }

    while (normalized >= totalWidth * 2) {
      normalized -= totalWidth;
    }

    return normalized;
  };

  useEffect(() => {
    setTrackPosition(START_OFFSET);

    const animate = (time: number) => {
      if (jumpAnimationRef.current) {
        const { from, to, startTime } = jumpAnimationRef.current;
        const progress = Math.min((time - startTime) / JUMP_DURATION, 1);
        const easedProgress = 1 - Math.pow(1 - progress, 3);
        const currentOffset = from + (to - from) * easedProgress;

        offsetRef.current = currentOffset;
        setTrackPosition(currentOffset);

        if (progress === 1) {
          offsetRef.current = normalizeOffset(to);
          setTrackPosition(offsetRef.current);
          jumpAnimationRef.current = null;
        }

        lastTimeRef.current = time;
      } else if (!isPausedRef.current) {
        if (lastTimeRef.current !== null) {
          const delta = time - lastTimeRef.current;
          offsetRef.current = normalizeOffset(offsetRef.current + delta * SPEED);
          setTrackPosition(offsetRef.current);
        }
        lastTimeRef.current = time;
      } else {
        lastTimeRef.current = null;
      }
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const jumpByCard = (direction: -1 | 1) => {
    const currentOffset = normalizeOffset(offsetRef.current);
    const snapped = Math.round(currentOffset / CARD_WIDTH) * CARD_WIDTH;

    offsetRef.current = currentOffset;
    lastTimeRef.current = null;
    jumpAnimationRef.current = {
      from: currentOffset,
      to: snapped + direction * CARD_WIDTH,
      startTime: performance.now(),
    };
  };

  const handlePrev = () => {
    jumpByCard(-1);
  };

  const handleNext = () => {
    jumpByCard(1);
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
            <div
              className="flex gap-4 w-fit bg-secondary p-2 rounded-4xl"
              onMouseEnter={() => { isPausedRef.current = true; }}
              onMouseLeave={() => { isPausedRef.current = false; }}
            >
              <button
                className="w-[46px] h-[46px] rounded-full bg-gray-900 flex items-center justify-center hover:cursor-pointer hover:bg-brand"
                onClick={handlePrev}
                aria-label="Previous"
              >
                <FaArrowLeftLong className="text-white" />
              </button>
              <button
                className="w-[46px] h-[46px] rounded-full bg-gray-900 flex items-center justify-center hover:cursor-pointer hover:bg-brand"
                onClick={handleNext}
                aria-label="Next"
              >
                <FaArrowRightLong className="text-white" />
              </button>
            </div>
          </div>

          {/* Project slider section */}
          <div
            className="project-slider col-span-2 overflow-hidden"
            onMouseEnter={() => { isPausedRef.current = true; }}
            onMouseLeave={() => { isPausedRef.current = false; }}
          >
            <div ref={trackRef} className="flex gap-4">
              {displayProjects.map((project, index) => (
                <div
                  key={index}
                  className="group flex-shrink-0 px-3 py-5 w-[256px] border border-gray-700 rounded-xl hover:bg-gray-900 hover:cursor-pointer"
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
