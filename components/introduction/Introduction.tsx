import Image from "next/image";
import { FaDownload } from "react-icons/fa6";

export default function Introduction() {
  return (
    <section className="introduction h-dvh">
      <div className="bg-grid grid grid-cols-2 gap-4 py-[15vh] px-[60px] h-dvh">
        <div className="relative">
          <div className="introduction__subtitle font-medium mb-[1rem] text-indigo-400 text-lg">
            <p>Hey Hi! 👋</p>
          </div>
          <h1 className="text-white text-5xl font-bold leading-[1.2]">
            I'm Kharisma Prasetya
            <br />
            <span className="flex items-center gap-4">
              <Image
                width={64}
                height={64}
                src="/icons/diamond-star.svg"
                alt="Waving Hand"
              />
              <span className="text-[#C4EF17]">Software Engineer</span>
            </span>
          </h1>
          <p className="mt-2">
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
          <a
            href="/pdf/cv_kharisma_prasetya.pdf"
            download="cv_kharisma_prasetya.pdf"
            className="btn btn-primary mt-4 inline-flex items-center gap-2"
          >
            <span>Download CV</span>
            <FaDownload />
          </a>
          <div className="absolute top-[-10%] right-[4%]">
            <Image className="w-[90px] animate-left-right" width={90} height={90} src="/icons/loop-arrow.svg" alt="Loop Arrow" />
          </div>
          <div className="absolute bottom-[-15%] right-[10%]">
            <Image className="w-[70px] animate-rotate opacity-50" width={70} height={70} src="/icons/diamond-star.svg" alt="Diamond Star" />
          </div>
          <div className="absolute bottom-[-50%] left-[-25%] w-[300px] h-[300px] rounded-[50%] bg-[rgba(196,239,23,.2)] blur-3xl -z-1"></div>
        </div>
        <div className="relative">
          <div className="absolute top-[-10%] right-[4%]">
            <Image className="w-[70px] animate-spin [animation-duration:6s] opacity-50" width={70} height={70} src="/icons/diamond-star2.svg" alt="Diamond Star" />
          </div>
        </div>
      </div>
    </section>
  );
}
