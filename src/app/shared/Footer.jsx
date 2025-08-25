import { FaGithub, FaGlobe } from "react-icons/fa";
import { PiCopyrightLight } from "react-icons/pi";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="max-w-6xl mx-auto p-6 flex flex-col gap-6 sm:flex-row sm:flex-wrap sm:justify-between items-center text-center sm:text-left">
        
        {/* Logo */}
        <div className="logo">
          <h2 className="uppercase tracking-widest text-xl font-bold text-white">
            LEXIC
          </h2>
        </div>

        {/* Date / copyright */}
        <div className="flex gap-1 items-center text-sm text-gray-400">
          <PiCopyrightLight />
          <p>Lexic {new Date().getFullYear()} | All rights reserved</p>
        </div>

        {/* Social links */}
        <div className="text-sm text-center sm:text-right">
          <p className="pb-1 text-sm text-gray-400">Created By Amir</p>
          <ul className="flex gap-3 justify-center sm:justify-end">
            <li>
              <a
                href="https://createdbyamir.com"
                target="_blank"
                className="text-white hover:text-sky-200 transition"
              >
                <FaGlobe className="text-xl" />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/createdbyamir"
                target="_blank"
                className="text-white hover:text-sky-200 transition"
              >
                <FaGithub className="text-xl" />
              </a>
            </li>
          </ul>
        </div>

      </div>
    </footer>
  );
}
