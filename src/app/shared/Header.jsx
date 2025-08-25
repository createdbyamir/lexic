"use client";

import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <div className="">
      <div className="bg-gray-800 text-white shadow-md py-2 px-4 grid grid-cols-3 gap-x-12 items-center max-w-[900px] w-full mx-auto my-4 rounded-md fixed top-0 left-0 right-0">
        <div className="logo">
          <h2 className="uppercase tracking-widest text-xl">Lexic</h2>
          <p className="text-xs pt-1 text-gray-300">Your Words, Your World</p>
        </div>
        <nav className="flex justify-center gap-4  items-center p-4">
          <a className="transition delay-150 duration-300 ease-in-out  hover:underline hover:underline-offset-4 hover:text-gray-400"  href="#home">Home</a>
          <a className="transition delay-150 duration-300 ease-in-out  hover:underline hover:underline-offset-4 hover:text-gray-400"  href="#create">Create</a>
          <a className="transition delay-150 duration-300 ease-in-out  hover:underline hover:underline-offset-4 hover:text-gray-400"  href="#passages">Passages</a>
          {/*<Link className={`transition delay-150 duration-300 ease-in-out  hover:underline hover:underline-offset-4 hover:text-gray-400 ${pathname === "/" ? "underline underline-offset-4 text-white" : "text-gray-500"} `}  href="/">Home</Link>*/}
          {/*<Link className={`transition-all delay-150 duration-300 ease-in-out  hover:underline hover:underline-offset-4 hover:text-gray-300 ${pathname === "/about" ? "underline underline-offset-4 text-white" : "text-gray-400"} `} href="/about">About</Link>*/}
          {/*<Link className={`transition-all delay-150 duration-300 ease-in-out  hover:underline hover:underline-offset-4  hover:text-gray-400 ${pathname === "/passages" ? "underline underline-offset-4  text-white" : "text-gray-500"} `} href="/passages">Passages</Link>*/}
        </nav>
        <div className="link justify-self-end">
          <a className="hover:text-gray-300 delay-150 duration-300 ease-in-out" href="https://github.com/createdbyamir/lexic" target="_blank">
            <FaGithub className="text-2xl"/>
          </a>
        </div>
      </div>
    </div>
  );
}
