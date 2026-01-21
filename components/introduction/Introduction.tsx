import Image from "next/image";
import { FaDownload } from "react-icons/fa6";

export default function Introduction() {
  return (
    <section className="introduction h-dvh">
      <div className="bg-grid md:grid md:grid-cols-2 md:gap-4 py-4 md:py-[10vh] px-8 md:px-[60px] h-dvh">
        <div className="relative">
          <div className="introduction__subtitle font-medium mb-[1rem] text-indigo-400 text-base md:text-lg">
            <p>Hey Hi! 👋</p>
          </div>
          <h1 className="text-white text-xl lg:text-4xl xl:text-5xl font-bold md:leading-[1.2]">
            I'm Kharisma Prasetya
            <br />
            <span className="flex items-center gap-4">
              <Image
                className="w-[44px] md:w-[56px] lg:w-[64px]"
                width={64}
                height={64}
                src="/icons/diamond-star.svg"
                alt="Waving Hand"
              />
              <span className="text-[#C4EF17]">Software Engineer</span>
            </span>
          </h1>
          <p className="mt-2 text-xs md:text-sm lg:text-base md:leading-[1.7] lg:leading-[1.625]">
            I am a Fullstack Software Engineer with over 7 years of experience
            in building web and mobile applications. I specialize in frontend
            development using Vue.js, Nuxt.js, React.js, Next.js, and React
            Native. On the backend, I mainly work with Django and Node.js to
            create reliable and scalable APIs. I enjoy learning new technologies
            and can adapt quickly to different project requirements. I also have
            hands-on experience in deployment and server configuration,
            including Nginx, Docker, and VPS environments. I am passionate about
            creating clean, maintainable code and delivering meaningful products
            that provide real value.
          </p>
          <div className="block md:hidden relative flex justify-center items-center mt-4">
            <div className="absolute top-0 left-0 w-full h-full rounded-[50%] bg-[rgba(196,239,23,.2)] blur-[128px] -z-1"></div>
            <Image
              className="h-[300px] w-auto"
              width={200}
              height={300}
              sizes="100vw"
              src="/images/profile.png"
              alt="Kharisma Prasetya"
              preload
            />
            <div className="absolute top-0 left-[10%]">
              <Image
                className="w-[70px] animate-spin [animation-duration:6s] opacity-50"
                width={70}
                height={70}
                src="/icons/diamond-star2.svg"
                alt="Diamond Star"
              />
            </div>
          </div>
          <div className="flex justify-center md:justify-start">
            <a
              href="/pdf/cv_kharisma_prasetya.pdf"
              download="cv_kharisma_prasetya.pdf"
              className="btn btn-primary mt-4 inline-flex items-center gap-2"
            >
              <span>Download CV</span>
              <FaDownload />
            </a>
          </div>
          <div className="absolute top-0 right-0 md:top-[-10%] md:right-[4%]">
            <Image
              className="w-[90px] animate-left-right"
              width={90}
              height={90}
              src="/icons/loop-arrow.svg"
              alt="Loop Arrow"
            />
          </div>
          <div className="absolute bottom-[-10%] left-0 md:bottom-[-15%] md:right-[10%]">
            <Image
              className="w-[70px] animate-rotate opacity-50"
              width={70}
              height={70}
              src="/icons/diamond-star.svg"
              alt="Diamond Star"
            />
          </div>
          <div className="absolute bottom-[-50%] left-[-25%] w-[300px] h-[300px] rounded-[50%] bg-[rgba(196,239,23,.2)] blur-3xl -z-1"></div>
        </div>
        <div className="relative">
          <div className="hidden md:block absolute top-[-10%] right-[4%]">
            <Image
              className="w-[70px] animate-spin [animation-duration:6s] opacity-50"
              width={70}
              height={70}
              src="/icons/diamond-star2.svg"
              alt="Diamond Star"
            />
          </div>
          <div className="hidden md:block absolute top-0 left-0 w-full h-full rounded-[50%] bg-[rgba(196,239,23,.2)] blur-[128px] -z-1"></div>
          <div className="hidden md:block flex justify-center items-center h-full">
            <Image
              className="h-[450px] w-auto"
              width={246}
              height={450}
              sizes="100vw"
              src="/images/profile.png"
              alt="Kharisma Prasetya"
              preload
            />
          </div>
        </div>
        <div className="absolute bottom-0 right-0">
          <Image
            className="w-[150px] md:w-[250px] animate-spin [animation-duration:8s]"
            width={250}
            height={250}
            src="/icons/sixline-asterisk.svg"
            alt="Asterisk"
          />
        </div>
      </div>
    </section>
  );
}
