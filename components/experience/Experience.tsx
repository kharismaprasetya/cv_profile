import Image from "next/image";
import AsteriskIcon from "@/components/icon/AsteriskIcon";

export default function Experience() {
  const experiences = [
    {
      year: "2025 to Present",
      company: "PT. Takodam Ciptamandiri",
      position: "Frontend Developer",
      details: [
        "Create e-commerce omnichannel system that aggregate public e commerce into one platform only",
        "Create e-commerce omnichannel system that aggregate public e commerce into one platform only",
      ],
    },
    {
      year: "2025 to Present",
      company: "PT. Takodam Ciptamandiri",
      position: "Frontend Developer",
      details: [
        "Create e-commerce omnichannel system that aggregate public e commerce into one platform only",
        "Create e-commerce omnichannel system that aggregate public e commerce into one platform only",
      ],
    },
  ];

  return (
    <section className="experience">
      <div className="py-[120px] px-[60px]">
        {/* Title section */}
        <div>
          <Image
            className="w-[34px]"
            width={34}
            height={35}
            src="/icons/sparkle.svg"
            alt="Sparkle"
          />
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-4xl font-bold">
                My <span className="text-brand">Experience</span>
              </h2>
            </div>
            <div>
              <a
                href="#"
                className="btn btn-primary inline-flex items-center gap-2"
              >
                <span>Contact Me</span>
              </a>
            </div>
          </div>
        </div>
        {/* Experience section */}
        {experiences.map((exp, index) => (
          <div key={index} className={index === 0 ? "mt-10" : ""}>
            <div className="relative flex justify-between items-center">
              <div className={`timeline w-[290px] ${index > 0 && "pt-10"}`}>
                <p>{exp.year}</p>
                <p className="font-bold text-white text-lg mt-1">
                  {exp.company}
                </p>
              </div>

              <div>
                <div className="information relative border-l border-gray-800 pl-[40px]">
                  <div className="information__icon absolute top-[calc(50%-17px)] left-[-17px] w-[34px] text-gray-800">
                    <AsteriskIcon />
                  </div>
                  <div className={index > 0 ? "pt-10" : ""}>
                    <div className="information__position relative p-8 border border-gray-800 rounded-xl">
                      <div className="grid grid-cols-3 items-center gap-1 ">
                        <div>
                          <h3 className="text-2xl font-bold">
                            Frontend Developer
                          </h3>
                        </div>
                        <div className="col-span-2">
                          <ul className="list-disc list-outside">
                            {exp.details.map((detail, detailIndex) => (
                              <li key={detailIndex}>{detail}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
