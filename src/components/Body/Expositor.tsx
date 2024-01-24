"use client";

import Link from "next/link";
import Image from "next/image";
import BushCodingLogo from "@/images/bushcoding.png";
import CloudyCodingLogo from "@/images/cloudycodingcroplogo.png";
import HexStudiosLogo from "@/images/hexstudioscrop.png";

export default function Expositor() {
  return (
    <section className="bg-expositor-bg bg-cover bg-no-repeat bg-center">
      <div className="py-8 lg:py-16 mx-auto md:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg 2xl:max-w-screen-xl px-4">
        <h2
          data-aos={"fade-in"}
          data-aos-delay="600"
          data-aos-offset="-200"
          className="mb-8 text-xl sm:text-3xl md:text-4xl font-bold tracking-tight leading-tight text-center text-white"
        >
          Desarrollador activo en...
        </h2>
        <div className="flex justify-center items-center flex-col sm:flex-row flex-wrap gap-8 sm:gap-16 text-gray-500 text-gray-400">
          <Link
            data-aos={"zoom-in"}
            data-aos-delay="600"
            data-aos-offset="-200"
            href="https://bushcoding.github.io/"
            target="_BLANK"
            className="flex justify-center items-center duration-100 hover:-translate-y-[3px]"
          >
            <Image
              className="invert h-8 sm:h-12 w-fit"
              src={BushCodingLogo}
              height={48}
              width={105}
              alt="Bush Coding"
            />
          </Link>
          <Link
            data-aos={"zoom-in"}
            data-aos-delay="600"
            data-aos-offset="-200"
            href="https://cloudycoding.co"
            target="_BLANK"
            className="flex gap-2 justify-center items-center duration-100 hover:-translate-y-[3px]"
          >
            <Image
              className="h-8 sm:h-12 w-fit"
              src={CloudyCodingLogo}
              height={48}
              width={48}
              alt="Cloudy Coding"
            />
            <div className="flex flex-col justify-center items-center text-white text-md sm:text-xl font-bold">
              <span>Cloudy</span>
              <span>Coding</span>
            </div>
          </Link>
          <Link
            data-aos={"zoom-in"}
            data-aos-delay="600"
            data-aos-offset="-200"
            href="https://lautaro-spiazzi.netlify.app"
            className="flex justify-center items-center duration-100 hover:-translate-y-[3px]"
          >
            <Image
              className="h-8 sm:h-12 w-fit"
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
