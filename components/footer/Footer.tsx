import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer relative">
      <div className="w-full flex justify-center items-center gap-2 py-3 border-t border-gray-800">
        <div>
          <p>
            Copyright &copy; 2026 designed by{" "}
            <span className="font-bold text-brand">Kharisma</span>
          </p>
        </div>
        <div className="flex gap-2 p-1 rounded-4xl bg-secondary">
          <a
            className="bg-main p-3 rounded-full hover:!bg-[#c4ef17] hover:text-black"
            href="https://facebook.com/kharisma.prasetya.5/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF />
          </a>
          <a
            className="bg-main p-3 rounded-full hover:!bg-[#c4ef17] hover:text-black"
            href="https://www.instagram.com/prasetyakharisma/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            className="bg-main p-3 rounded-full hover:!bg-[#c4ef17] hover:text-black"
            href="https://www.linkedin.com/in/kharisma-prasetya-a39833129/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </footer>
  );
}
