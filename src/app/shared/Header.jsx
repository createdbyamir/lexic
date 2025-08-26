"use client";

import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="bg-gray-900 text-white shadow-md py-3 px-6 grid grid-cols-3 items-center w-full max-w-5xl md:max-w-[1170px] mx-auto rounded-lg mt-4">
        {/* Logo */}
        <div className="logo">
          <h1 className="uppercase tracking-widest text-xl font-bold text-white">
            LEXIC
          </h1>
          <p className="text-xs text-gray-300">Your Words, Your World</p>
        </div>

        {/* Navigation (hidden for now, kept commented for reference) */}
        <nav className="flex justify-center gap-6 items-center">
          {/*<Link 
            className={`transition delay-150 duration-300 ease-in-out hover:underline hover:underline-offset-4 hover:text-gray-400 ${
              pathname === "/" ? "underline underline-offset-4 text-white" : "text-gray-500"
            }`}
            href="/"
          >
            Home
          </Link>*/}
          {/*<Link 
            className={`transition-all delay-150 duration-300 ease-in-out hover:underline hover:underline-offset-4 hover:text-gray-300 ${
              pathname === "/about" ? "underline underline-offset-4 text-white" : "text-gray-400"
            }`} 
            href="/about"
          >
            About
          </Link>*/}
          {/*<Link 
            className={`transition-all delay-150 duration-300 ease-in-out hover:underline hover:underline-offset-4 hover:text-gray-400 ${
              pathname === "/passages" ? "underline underline-offset-4 text-white" : "text-gray-500"
            }`} 
            href="/passages"
          >
            Passages
          </Link>*/}
        </nav>

        {/* GitHub Link */}
        <div className="justify-self-end">
          <a
            href="https://github.com/createdbyamir/lexic"
            target="_blank"
            className="text-white hover:text-sky-200 transition"
          >
            <FaGithub className="text-2xl" />
          </a>
        </div>
      </div>
    </header>
  );
}
