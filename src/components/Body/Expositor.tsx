"use client";

import Link from "next/link";
import Image from 'next/image'
import BushCodingLogo from "@/images/bushcoding.png"
import CloudyCodingLogo from "@/images/cloudycodingcroplogo.png"
import HexStudiosLogo from "@/images/hexstudioscrop.png"

export default function Expositor() {
  return (
    <section className="">
      <div className="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
        <h2 className="mb-8 text-3xl font-bold tracking-tight leading-tight text-center text-white md:text-4xl">
          Desarrollador activo
        </h2>
        <div className="flex justify-center items-center gap-16 text-gray-500 text-gray-400">
          <Link
            href="https://bushcoding.github.io/"
            target="_BLANK"
            className="flex justify-center items-center duration-100 hover:-translate-y-[3px]"
          >
            <Image
              className="invert h-12 w-fit"
              src={BushCodingLogo}
              height={48}
              width={105}
              alt="Bush Coding"
            />
          </Link>
          <Link
            href="https://cloudycoding.co"
            target="_BLANK"
            className="flex gap-2 justify-center items-center duration-100 hover:-translate-y-[3px]"
          >
            <Image
              className="h-12 w-fit"
              src={CloudyCodingLogo}
              height={48}
              width={48}
              alt="Cloudy Coding"
            />
            <div className="flex flex-col justify-center items-center text-white text-xl font-bold">
              <span>Cloudy</span>
              <span>Coding</span>
            </div>
          </Link>
          <Link
            href="https://lautaro-spiazzi.netlify.app"
            className="flex justify-center items-center duration-100 hover:-translate-y-[3px]"
          >
            <Image
              className="h-12 w-fit"
              src={HexStudiosLogo}
              height={48}
              width={87}
              alt="Hex Studios"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
