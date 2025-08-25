import { FaGithub, FaGlobe } from "react-icons/fa";
import { PiCopyrightLight } from "react-icons/pi";

export default function Footer(){
    return (
        <div className="bg-gray-900 text-white">
            <div class="p-4 py-6 grid grid-cols-3 gap-x-12 items-center max-w-screen-xl w-full mx-auto">
                <div className="logo">
                    <h2 className="uppercase tracking-widest text-xl">Lexic</h2>
                </div>
                <div className="date flex gap-1 items-center justify-center text-sm text-gray-400">
                    <PiCopyrightLight /> 
                    <p>Lexic {new Date().getFullYear()} | all rights reserved</p> 
                </div>
                <div className="buttons space-y-3 text-center justify-self-end text-sm">
                    <div className="">
                        <p className="pb-1 text-sm text-gray-400">Created By Amir</p>
                        <ul className="flex gap-2 justify-center">
                            <li><a className=" transition delay-150 duration-300 ease-in-out hover:text-gray-300" href="https://createdbyamir.com" target="_blank"><FaGlobe className="text-xl"/></a></li>
                            <li><a className="transition delay-150 duration-300 ease-in-out hover:text-gray-300" href="https://github.com/createdbyamir" target="_blank"><FaGithub className="text-xl" /></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}