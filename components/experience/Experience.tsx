import Image from "next/image";
import AsteriskIcon from "@/components/icon/AsteriskIcon";

export default function Experience() {
  const experiences = [
    {
      year: "2021 to Present",
      company: "PT. Takodam Ciptamandiri",
      position: "Software Engineer",
      details: [
        "Develop and integrate ERP system using open source application (ERPNext)",
        "Create ERP system for automotive industry to planning and maintaining production process",
        "Create claim management system into health insurance (BPJS)",
        "Create e-commerce omnichannel system that  aggregate public e-commerce into one platform only",
        "Develop and maintain e-Posyandu system (FE, BE, Mobile) in the KOMDIGI environment",
        "Develop and maintain employee system in the KEMENHUBLA environment",
        "Develop monitoring power consumption system (FE, BE, IoT) in the manufacture factory (UPTD Sragen)",
        "Create supporting document consists of ERD, UAT, SIT, FSD, and BRD",
      ],
    },
    {
      year: "2020 to 2021",
      company: "Qontak",
      position: "Frontend Engineer",
      details: [
        "Develop and maintain omnichannel system to be user friendly, easy to use, scalable, and reliable",
        "Handle UI for each role with different feature and functionality",
        "Optimize the web performance with efficient and effective state management",
        "Handle omnichannel integration into facebook",
      ],
    },
    {
      year: "2020 to 2020",
      company: "PT. Efrindo Putra Mandiri",
      position: "Software Engineer",
      details: ["Develop hospital asset management system (FE, BE)"],
    },
    {
      year: "2019 to 2019",
      company: "FMIPA UGM",
      position: "Backend Engineer",
      details: [
        "Develop API to upload, parse, and normalize data from csv file. Then provide it into user.",
      ],
    },
    {
      year: "2018 to 2018",
      company: "DTETI UGM",
      position: "Frontend Engineer",
      details: [
        "Develop tsunami warning information system SIBAT (Sistem Informasi Bahaya Tsunami)",
        "Visualize vulnerable area with a map into user",
      ],
    },
    {
      year: "2017 to 2019",
      company: "FKKMK UGM",
      position: "Software Engineer",
      details: [
        "Organize and maintain user requirement into executable task in a team",
        "Develop information system (FE, BE) for data management, collection, and visualization to support outbreak investigation",
      ],
    },
  ];

  return (
    <section className="experience relative overflow-hidden">
      <div className="py-[80px] px-8 md:px-[60px]">
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
              Experience
            </span>
          </div>

          <div className="flex flex-col gap-3 md:flex-row md:justify-between md:items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">
                My <span className="text-brand">Experiences</span>
              </h2>
            </div>
            <div>
              <a
                href="https://www.linkedin.com/in/kharisma-prasetya-a39833129/"
                target="_blank"
                rel="noopener noreferrer"
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
            <div className="relative flex flex-col lg:flex-row lg:justify-between lg:items-center">
              <div
                className={`timeline lg:min-w-[290px] mb-3 lg:mb-0 ${index > 0 && "pt-10"}`}
              >
                <p className="lg:text-base">{exp.year}</p>
                <p className="font-bold text-white text-base lg:text-lg mt-1">
                  {exp.company}
                </p>
              </div>

              <div className="w-full">
                <div className="information relative lg:border-l lg:border-gray-800 pl-8 lg:pl-[40px]">
                  <div className={`information__icon absolute top-[calc(50%)] left-[-17px] w-[34px] text-gray-800 ${index === 0 ? "top-[calc(50%-17px)]" : "top-[50%]"}`}>
                    <AsteriskIcon />
                  </div>
                  <div className={index > 0 ? "lg:pt-10" : ""}>
                    <div className="information__position relative p-8 border border-gray-800 rounded-xl">
                      <div className="lg:grid lg:grid-cols-3 lg:items-center lg:gap-1 ">
                        <div>
                          <h3 className="text-lg lg:text-2xl font-bold mb-2 sm:mb-0 -ml-4 lg:ml-0">
                            {exp.position}
                          </h3>
                        </div>
                        <div className="lg:col-span-2 text-sm lg:text-base">
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
      <div className="absolute top-[50%] right-[-20%] lg:right-[-15%] w-[300px] lg:w-[300px] h-[200px] lg:h-[400px] rounded-[50%] bg-[rgba(196,239,23,.2)] blur-[75px] lg:blur-[100px] -z-1"></div>
      <div className="absolute bottom-[-5%] lg:bottom-[-10%] left-[-5%] lg:left-[-10%] w-[300px] lg:w-[300px] h-[200px] lg:h-[400px] rounded-[50%] bg-[rgba(196,239,23,.2)] blur-[75px] lg:blur-[100px] -z-1"></div>
    </section>
  );
}
