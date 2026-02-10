import Image from "next/image";

export default function SkillSliding() {
  const skills = [
    { name: "Mobile Application", icon: "/icons/blue-asterisk.svg" },
    { name: "Web Development", icon: "/icons/blue-asterisk.svg" },
    { name: "Backend Development", icon: "/icons/blue-asterisk.svg" },
    { name: "Architecture Design", icon: "/icons/blue-asterisk.svg" },
    { name: "Database Design", icon: "/icons/blue-asterisk.svg" },
    { name: "Project Management", icon: "/icons/blue-asterisk.svg" },
    { name: "DevOps", icon: "/icons/blue-asterisk.svg" },
  ];

  return (
    <section className="skill-sliding relative px-8 md:px-[60px] py-8">
      <div className="flex">
        <div className="skill-group flex">
          {skills.map((skill, index) => (
            <div
              className="skill-swiper min-w-[275px] flex items-center gap-4"
              key={index}
            >
              <span>
                <Image
                  src={skill.icon}
                  alt="blue-asterisk"
                  width={24}
                  height={24}
                />
              </span>
              <h5 className="font-semibold text-xl">{skill.name}</h5>
            </div>
          ))}
        </div>
        <div aria-hidden className="skill-group flex">
          {skills.map((skill, index) => (
            <div
              className="skill-swiper min-w-[275px] flex items-center gap-4"
              key={index}
            >
              <span>
                <Image
                  src={skill.icon}
                  alt="blue-asterisk"
                  width={24}
                  height={24}
                />
              </span>
              <h5 className="font-semibold text-xl">{skill.name}</h5>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
