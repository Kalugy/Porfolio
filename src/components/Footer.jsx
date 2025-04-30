import React from "react";
import { FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 py-16 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Logo & Descripción + Redes */}
        <div>
          <div className="mb-4">
            <img src="/images/profile.png" alt="Julian's Portfolio Logo" width={80} height={80} />
          </div>
          <p className="text-sm text-black dark:text-white mb-4">
            I'm a Systems & Computer Engineer passionate about building digital projects since 2014 i started creating projects.
            <br />
            When I'm not coding, you'll find me playing sports, diving into anime and manga, gaming, or exploring nature.
          </p>
          <div className="flex gap-4 mt-4">
            <a href="https://www.instagram.com/juliantrujillo1234/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-[#E98B07] hover:text-[#cc7a04]" size={24} />
            </a>
            <a href="https://www.youtube.com/@kalugy" target="_blank" rel="noopener noreferrer">
              <FaYoutube className="text-[#E98B07] hover:text-[#cc7a04]" size={24} />
            </a>
            <a href="https://www.linkedin.com/in/julian-trujillo-b20000190/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-[#E98B07] hover:text-[#cc7a04]" size={24} />
            </a>

          </div>
        </div>

        {/* Nosotros */}
        <div>
          <h3 className="font-semibold text-black dark:text-white text-lg mb-4">About</h3>
          <ul className="space-y-2 text-sm text-black dark:text-white">
            <li><a href="#about" className="hover:text-[#E98B07]">About me</a></li>
            <li><a href="#productos" className="hover:text-[#E98B07]">Projects</a></li>
            <li><a href="#contacto" className="hover:text-[#E98B07]">Contact</a></li>
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h3 className="font-semibold text-black dark:text-white text-lg mb-4">Contact</h3>
          <ul className="space-y-2 text-sm text-black dark:text-white">
            <li><a href="mailto:danieltrujillo902@gmail.com" className="hover:text-[#E98B07]">danieltrujillo902@gmail.com</a></li>
            <li><a href="https://www.instagram.com/juliantrujillo1234/" target="_blank" className="hover:text-[#E98B07]">@juliantrujillo1234 </a></li>
          </ul>
        </div>

        
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 text-center text-sm text-black dark:text-white border-t border-gray-200 pt-6">
        © {new Date().getFullYear()} Julian Trujillo – Made with ❤️ in Colombia
      </div>
    </footer>
  );
};

export default Footer;
