"use client";

import { LucideNetwork, ReplyAll, SoapDispenserDroplet } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const About = () => {
  const [flipped, setFlipped] = useState(false);

  return (
    <section className="mt-12">
      <div
        className="
            border border-white/20
            px-3 py-1 rounded-full font-medium
            text-white relative w-fit mb-10 mx-auto
          "
      >
        <span>Who is Johana Kalama ?</span>
        <span
          className="
            absolute inset-x-0 w-1/2 mx-auto -bottom-px 
            h-px
          "
          style={{
            background:
              "linear-gradient(to right, transparent, #3b82f6, #8b5cf6, transparent)",
          }}
        />
      </div>
      <div className="flex flex-col gap-8 lg:flex-row items-center">
        <div
          className={`
        p-6 bg-gray-800/10 lg:w-1/2 lg:bg-blue-900/20 relative rounded-full
        flex flex-col items-center gap-6
        lg:flex-row ${flipped ? "lg:flex-row-reverse lg:bg-purple-500/5" : ""} 
        transition-all duration-500
      `}
        >
          {" "}
          {/* CLICKABLE IMAGE */}
          <div
            onClick={() => setFlipped(!flipped)}
            className="cursor-pointer items-center justify-center 
                   overflow-hidden flex w-60 h-60 bg-[#0c0c11] 
                   border border-gray-700/40 rounded-full 
                   transition-transform duration-300 hover:scale-105"
          >
            {" "}
            <Image
              width={400}
              height={400}
              src={"/assets/kalama.jpg"}
              alt="Johana Kalama"
              className="object-cover w-full h-full rounded-full shadow-2xl shadow-black"
            />
          </div>
          <div className="absolute bottom-0 p-2 left-1/2 -translate-x-1/2 flex gap-4">
            <button className="bg-white/20 backdrop-blur-sm hover:bg-white/30 hover:scale-110 transition-all duration-300 p-2 rounded-full cursor-pointer">
              <LucideNetwork className="size-5" />
            </button>
            <button className="bg-white/20 backdrop-blur-sm hover:bg-white/30 hover:scale-110 transition-all duration-300 p-2 rounded-full cursor-pointer">
              <ReplyAll className="size-5" />
            </button>
            <button className="bg-white/20 backdrop-blur-sm hover:bg-white/30 hover:scale-110 transition-all duration-300 p-2 rounded-full cursor-pointer">
              <SoapDispenserDroplet className="size-5" />
            </button>
          </div>
        </div>
        <p className="text-gray-400 text-2xl lg:w-1/2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga impedit
          obcaecati, iste quisquam magni a quo nisi nesciunt sequi, laboriosam
          est unde, aut ipsa suscipit eum esse deleniti voluptas repudianda{" "}
          <br /> <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga impedit
          obcaecati, iste quisquam magni a quo nisi nesciunt sequi, laboriosam
          est unde, aut ipsa suscipit eum esse deleniti voluptas repudianda.
        </p>
      </div>
    </section>
  );
};

export default About;
