import Image from "next/image";
import TopNavCollapsibleMenu from "@/components/navbar/TopNavCollapsibleMenu";

export default function TopNavBar() {
  return (
    <header className="relative">
      <nav className="navbar__top w-full flex items-center justify-between px-8 md:px-[60px] py-3 bg-main text-white">
        <div className="logo text-2xl md:text-3xl font-extrabold text-brand tracking-wide">
          <a href="#introduction" className="flex items-center">
            <Image
              className="w-[40px] md:w-[50px]"
              src="/icons/brand.png"
              alt="Brand"
              preload={true}
              width={50}
              height={50}
            />
            My Portfolio
          </a>
        </div>
        <div className="menu gap-6 font-semibold tracking-wide hidden md:flex">
          <a
            href="#introduction"
            className="hover:text-indigo-400 hover:scale-[110%] transition-transform duration-500"
          >
            Home
          </a>
          <a
            href="#experience"
            className="hover:text-indigo-400 hover:scale-[110%] transition-transform duration-500"
          >
            Experience
          </a>
          <a
            href="#skill"
            className="hover:text-indigo-400 hover:scale-[110%] transition-transform duration-500"
          >
            Skill
          </a>
        </div>
        <TopNavCollapsibleMenu className="md:hidden" />
      </nav>
    </header>
  );
}
