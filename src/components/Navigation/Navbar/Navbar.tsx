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
      <div className="w-full md:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg 2xl:max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-4 px-4 lg:px-0">
        <Link
          href="#"
          className="hidden sm:flex items-center justify-center space-x-3 rtl:space-x-reverse"
        >
          <span className="self-center text-white text-2xl font-semibold whitespace-nowrap">
            Lautaro Spiazzi
          </span>
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center justify-center text-sm text-gray-500 rounded-lg lg:hidden"
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
        <div
          className={`${isOpen ? "block" : "hidden"} w-full lg:block lg:w-auto`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 lg:p-0 mt-4 backdrop-blur-lg lg:backdrop-blur-none rounded-lg lg:flex-row lg:space-x-8 rtl:space-x-reverse lg:mt-0 lg:border-0">
            {NavbarLinks.map((item, index) => (
              <li key={index}>
                <Link
                  onClick={() => setOpen(false)}
                  href={item.path}
                  scroll={false}
                  className={`${
                    path === item.path
                      ? "text-indigo-400"
                      : "text-gray-100 lg:hover:text-indigo-400"
                  } block py-2 px-3 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:p-0`}
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
