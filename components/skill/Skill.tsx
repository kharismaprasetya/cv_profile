import Image from "next/image";
import { FaStar, FaRegStar } from "react-icons/fa";
import AsteriskIcon from "@/components/icon/AsteriskIcon";

export default function Skill() {
  return (
    <section className="skill relative overflow-hidden">
      <div className="bg-grid py-[80px] px-8 md:px-[60px]">
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
            <span className="text-lg text-indigo-400 font-medium">Skill</span>
          </div>

          <div className="mt-1">
            <h2 className="text-3xl md:text-4xl font-bold">
              My <span className="text-brand">Skills</span>
            </h2>
          </div>
        </div>
        {/* Skill section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
          <div className="information relative flex justify-center items-center gap-6 border border-gray-800 rounded-xl px-6 py-8">
            <div className="flex items-center">
              <Image width={125} height={125} src="/logos/nextjs.png" alt="Next JS" />
            </div>
            <div className="h-full w-[4px] bg-indigo-900 rounded-lg"></div>
            <div>
              <p className="font-bold text-brand">Next JS</p>
              <p>
                <FaStar className="inline text-yellow-500" />
                <FaStar className="inline text-yellow-500" />
                <FaStar className="inline text-yellow-500" />
                <FaStar className="inline text-yellow-500" />
                <FaRegStar className="inline" />
              </p>
            </div>
          </div>
          <div className="information relative flex justify-center gap-6 border border-gray-800 rounded-xl px-6 py-8">
            <div className="flex items-center">
              <Image width={125} height={25} src="/logos/nextjs.png" alt="Next JS" />
            </div>
            <div className="h-full w-[4px] bg-indigo-900 rounded-lg"></div>
            <div>
              <p className="font-bold text-brand">Next JS</p>
              <p>
                <FaStar className="inline text-yellow-400" />
                <FaStar className="inline text-yellow-400" />
                <FaStar className="inline text-yellow-400" />
                <FaStar className="inline text-yellow-400" />
                <FaRegStar className="inline" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
