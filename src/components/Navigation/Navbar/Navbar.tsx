"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import { NavbarLinks } from "./Navbar.data";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);
  const path = usePathname();
  return (
    <nav className="w-full fixed backdrop-blur-md z-[1000]">
      <div className="w-full max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="#" className="flex items-center justify-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-white text-2xl font-semibold whitespace-nowrap">
            Lautaro Spiazzi
          </span>
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden"
          onClick={() => setOpen(!isOpen)}
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className={`${isOpen ? "block" : "hidden"} w-full md:block md:w-auto`} id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 backdrop-blur-lg md:backdrop-blur-none rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
            {NavbarLinks.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.path}
                  className={`${
                    path === item.path
                      ? "text-indigo-400"
                      : "text-gray-100 md:hover:text-indigo-400"
                  } block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0`}
                >
                  <span className="3xl ml-2 z-10">{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
