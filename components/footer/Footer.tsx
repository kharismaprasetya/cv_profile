import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer relative">
      <div className="w-full flex justify-center items-center gap-1 py-3 border-t border-gray-800">
        <div className="copyright">
          <p className="text-sm md:text-base">
            Copyright &copy; 2026 designed by{" "}
            <span className="font-bold text-brand">Kharisma</span>
          </p>
        </div>
        <div className="social flex items-center gap-1 md:gap-2 p-1 rounded-4xl bg-secondary">
          <a
            className="bg-main flex justify-center items-center w-[36px] h-[36px] sm:w-[40px] sm:h-[40px] p-2 rounded-full hover:!bg-[#c4ef17] hover:text-black"
            href="https://facebook.com/kharisma.prasetya.5/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF className="w-[14px] h-[14px] sm:w-[16px] sm:h-[16px]" />
          </a>
          <a
            className="bg-main flex justify-center items-center w-[36px] h-[36px] sm:w-[40px] sm:h-[40px] p-3 rounded-full hover:!bg-[#c4ef17] hover:text-black"
            href="https://www.instagram.com/prasetyakharisma/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="w-[14px] h-[14px] sm:w-[16px] sm:h-[16px]" />
          </a>
          <a
            className="bg-main flex justify-center items-center w-[36px] h-[36px] sm:w-[40px] sm:h-[40px] p-3 rounded-full hover:!bg-[#c4ef17] hover:text-black"
            href="https://www.linkedin.com/in/kharisma-prasetya-a39833129/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn className="w-[14px] h-[14px] sm:w-[16px] sm:h-[16px]" />
          </a>
        </div>
      </div>
    </footer>
  );
}
