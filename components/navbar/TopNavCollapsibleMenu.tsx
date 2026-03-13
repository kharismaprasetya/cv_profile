"use client";

import { useState } from "react";

interface ITopNavMenuButton {
  className?: string;
}

export default function TopNavCollapsibleMenu({
  className,
}: ITopNavMenuButton) {
  const [isMenuButtonActive, setIsMenuButtonActive] = useState(false);
  const onClickMenuButton = () => {
    setIsMenuButtonActive(!isMenuButtonActive);
  };

  return (
    <div className={`menu-button ${className}`}>
      <div
        className={`w-[30px] h-[28px] relative ${isMenuButtonActive ? "active" : ""}`}
        onClick={onClickMenuButton}
      >
        <span className="first"></span>
        <span className="second"></span>
        <span className="last"></span>
      </div>
      <div
        className={`absolute left-[2rem] top-[74px] w-[calc(100vw-5rem)] z-1 origin-top transition-transform duration-300 ${
          isMenuButtonActive ? "scale-y-100" : "scale-y-0 pointer-events-none"
        }`}
      >
        <ul className="font-semibold tracking-wide">
          <li className="bg-black border-b-1 border-gray-700">
            <a
              href="#introduction"
              className="px-4 py-2 block w-full hover:text-indigo-400"
            >
              Home
            </a>
          </li>
          <li className="bg-black border-b-1 border-gray-700">
            <a
              href="#experience"
              className="px-4 py-2 block w-full hover:text-indigo-400"
            >
              Experience
            </a>
          </li>
          <li className="bg-black border-b-1 border-gray-700 rounded-b-xl">
            <a
              href="#skill"
              className="px-4 py-2 block w-full hover:text-indigo-400"
            >
              Skill
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
