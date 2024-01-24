"use client";

import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <footer className="bg-black w-full">
      <div className="w-full md:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg 2xl:max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-8 px-4 lg:px-0 text-center">
        <span className="flex-1 block text-md text-center text-gray-400">
          Desarrollado con ❤ por{" "}
          <Link href="/" className="hover:underline">
            Lautaro Spiazzi
          </Link>
          .
        </span>
      </div>
    </footer>
  );
}
