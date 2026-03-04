import Image from "next/image";
import { FaStar, FaRegStar } from "react-icons/fa";
import AsteriskIcon from "@/components/icon/AsteriskIcon";

export default function Skill() {
  const skills = [
    {
      name: "Next JS",
      logo: "/logos/next-js.png",
      rating: 5,
      size: {
        width: 125,
        height: 25,
      }
    },
    {
      name: "Nuxt JS",
      logo: "/logos/nuxt-js.png",
      rating: 5,
      size: {
        width: 140,
        height: 35,
      }
    },
    {
      name: "React Native",
      logo: "/logos/react-native.png",
      rating: 3,
      size: {
        width: 160,
        height: 40,
      }
    },
    {
      name: "Angular",
      logo: "/logos/angular.png",
      rating: 3,
      size: {
        width: 160,
        height: 40,
      }
    },
    {
      name: "React JS",
      logo: "/logos/react-js.png",
      rating: 5,
      size: {
        width: 120,
        height: 40,
      }
    },
    {
      name: "Vue JS",
      logo: "/logos/vue-js.png",
      rating: 5,
      size: {
        width: 40,
        height: 40,
      }
    },
    {
      name: "Node JS",
      logo: "/logos/node-js.png",
      rating: 5,
      size: {
        width: 160,
        height: 40,
      }
    },
    {
      name: "Bootstrap",
      logo: "/logos/bootstrap.png",
      rating: 5,
      size: {
        width: 120,
        height: 40,
      }
    },
    {
      name: "Tailwind CSS",
      logo: "/logos/tailwind.png",
      rating: 5,
      size: {
        width: 60,
        height: 40,
      }
    },
    {
      name: "HTML",
      logo: "/logos/html.png",
      rating: 5,
      size: {
        width: 40,
        height: 40,
      }
    },
    {
      name: "CSS",
      logo: "/logos/css.png",
      rating: 5,
      size: {
        width: 40,
        height: 40,
      }
    },
    {
      name: "JavaScript",
      logo: "/logos/js.png",
      rating: 5,
      size: {
        width: 40,
        height: 40,
      }
    },
    {
      name: "TypeScript",
      logo: "/logos/typescript.png",
      rating: 5,
      size: {
        width: 160,
        height: 40,
      }
    },
    {
      name: "SASS",
      logo: "/logos/sass.png",
      rating: 5,
      size: {
        width: 52,
        height: 40,
      }
    },
    {
      name: "LESS",
      logo: "/logos/less.png",
      rating: 5,
      size: {
        width: 80,
        height: 40,
      }
    },
    {
      name: "Django",
      logo: "/logos/django.png",
      rating: 5,
      size: {
        width: 80,
        height: 40,
      }
    },
    {
      name: "MySQL",
      logo: "/logos/my-sql.png",
      rating: 4,
      size: {
        width: 80,
        height: 40,
      }
    },
    {
      name: "PostgreSQL",
      logo: "/logos/postgre.jpg",
      rating: 4,
      size: {
        width: 240,
        height: 40,
      }
    },
    {
      name: "Docker",
      logo: "/logos/docker.png",
      rating: 4,
      size: {
        width: 160,
        height: 40,
      }
    },
    {
      name: "Nginx",
      logo: "/logos/nginx.png",
      rating: 4,
      size: {
        width: 100,
        height: 20,
      }
    },
    {
      name: "AWS",
      logo: "/logos/aws.png",
      rating: 4,
      size: {
        width: 70,
        height: 35,
      }
    },
    {
      name: "GCP",
      logo: "/logos/gcp.png",
      rating: 4,
      size: {
        width: 240,
        height: 40,
      }
    },
  ];
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-6 mt-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="information relative flex justify-center items-center gap-6 border border-gray-800 rounded-xl px-2 md:px-4 py-4 md:py-8"
            >
              <div className="flex items-center justify-center w-[50%]">
                <Image
                  width={skill.size?.width || 40}
                  height={skill.size?.height || 40}
                  src={skill.logo}
                  sizes="(max-width: 767px) 100vw, 33vw"
                  alt={skill.name}
                />
              </div>
              <div className="h-full w-[4px] bg-indigo-900 rounded-lg"></div>
              <div className="w-[40%] lg:w-[30%]">
                <p className="font-bold text-brand text-sm lg:text-base">{skill.name}</p>
                <p>
                  {[...Array(skill.rating)].map((_, i) => (
                    <FaStar key={i} className="inline text-yellow-500" />
                  ))}
                  {[...Array(5 - skill.rating)].map((_, i) => (
                    <FaRegStar key={i} className="inline" />
                  ))}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
