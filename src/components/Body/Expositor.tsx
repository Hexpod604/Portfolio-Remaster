"use client";

export default function Expositor() {
  return (
    <section className="">
      <div className="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
        <h2 className="mb-8 text-3xl font-bold tracking-tight leading-tight text-center text-white md:text-4xl">
          Desarrollador activo
        </h2>
        <div className="flex justify-center items-center gap-16 text-gray-500 text-gray-400">
          <a
            href="https://bushcoding.github.io/"
            className="flex justify-center items-center"
          >
            <img
              className="invert h-12"
              src="https://bushcoding.github.io/assets/images/bclb.png"
              alt="Bush Coding"
            />
          </a>
          <a
            href="https://cloudycoding.co"
            className="flex gap-2 justify-center items-center"
          >
            <img
              className="h-12"
              src="https://cdn.discordapp.com/attachments/808747427959930921/1199048008147410986/cclogo.png?ex=65c11f7a&is=65aeaa7a&hm=b32cd27e791ce8b4397725ccc90edc4ce2e2edb3a25b44ec566c5170bcf81e5e&"
              alt="Cloudy Coding"
            />
            <div className="flex flex-col justify-center items-center text-white text-xl font-bold">
              <span>Cloudy</span>
              <span>Coding</span>
            </div>
          </a>
          <a
            href="https://hexstudios.netlify.app"
            className="flex justify-center items-center"
          >
            <img
              className="h-12"
              src="https://cdn.discordapp.com/attachments/808747427959930921/1199050121682354326/hexstudiosmash.png?ex=65c12172&is=65aeac72&hm=e285dcfb60828db5c3bc2a01dccd5bf685a655c75d3d5e28877ceb835e064ae0&"
              alt="Hex Studios"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
