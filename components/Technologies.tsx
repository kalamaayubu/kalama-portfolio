"use client";

import { useEffect, useRef, useState } from "react";
import Heading from "./Heading";
import Image from "next/image";
import { motion } from "framer-motion";

import { Database, Music, Server } from "lucide-react";
import TechnologiesCard from "./TechnologiesCard";

const technologies = [
  { icon: "reactjs-min.jpeg" },
  { icon: "nextjs-min.jpeg" },
  { icon: "nestjs-min.jpeg" },
  { icon: "github-min.jpeg" },
  { icon: "git-min.jpeg" },
  { icon: "javascript-min.jpeg" },
  { icon: "typescript-min.jpeg" },
  { icon: "shadcn-min.jpeg" },
  { icon: "mysql-min.jpeg" },
  { icon: "mongodb-min.jpeg" },
  { icon: "postgresql-min.jpeg" },
  { icon: "tailwindcss-min.jpeg" },
  { icon: "supabase-min.jpeg" },
];

const frontend = [
  "React",
  "Tailwind CSS",
  "NextJs",
  "Typescript",
  "React Native",
];

const backend = ["Node.js", "REST-API", "Nest.js", "Postman", "Next.js"];

const database = ["PostgreSQL", "Supabase", "MongoDB"];

const ICON_SIZE = 64; // 16x16 Tailwind size = 64px

const Technologies = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const iconRefs = useRef<(HTMLDivElement | null)[]>([]);
  const positions = useRef<{ x: number; y: number }[]>([]);
  const velocities = useRef<{ vx: number; vy: number }[]>([]);

  const [radius, setRadius] = useState(0);

  // Measure circle size on mount + resize
  useEffect(() => {
    const measure = () => {
      if (!containerRef.current) return;

      const size = containerRef.current.offsetWidth; // width = height (circle)
      setRadius(size / 2);
    };

    measure();
    window.addEventListener("resize", measure);

    return () => window.removeEventListener("resize", measure);
  }, []);

  // Physics animation
  useEffect(() => {
    if (!radius) return;

    // Initialize once per radius change
    let frameId: number;

    technologies.forEach((_, i) => {
      const angle = Math.random() * Math.PI * 2;
      const speed = 0.8 + Math.random() * 0.8;

      positions.current[i] = {
        x: Math.cos(angle) * (radius - ICON_SIZE),
        y: Math.sin(angle) * (radius - ICON_SIZE),
      };

      velocities.current[i] = {
        vx: (Math.random() - 0.5) * speed,
        vy: (Math.random() - 0.5) * speed,
      };
    });

    const animate = () => {
      technologies.forEach((_, i) => {
        let { x, y } = positions.current[i];
        let { vx, vy } = velocities.current[i];

        x += vx;
        y += vy;

        const dist = Math.sqrt(x * x + y * y);

        if (dist + ICON_SIZE / 2 > radius) {
          const nx = x / dist;
          const ny = y / dist;

          const dot = vx * nx + vy * ny;

          vx -= 2 * dot * nx;
          vy -= 2 * dot * ny;
        }

        positions.current[i] = { x, y };
        velocities.current[i] = { vx, vy };

        if (iconRefs.current[i]) {
          iconRefs.current[i].style.transform = `translate(${x}px, ${y}px)`;
        }
      });

      frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);

    // ❗ IMPORTANT: cancel the loop on cleanup
    return () => cancelAnimationFrame(frameId);
  }, [radius]);

  return (
    <section className="py-16">
      <div className="flex items-center justify-center mt-10">
        <div className="relative bg-white/5 min-h-screen w-full py-16">
          <Heading title="Technologies" className="bg-[#0c0c11]" />

          <div className="flex w-full flex-col items-center justify-center mt-10">
            <div
              ref={containerRef}
              className="
            relative 
            flex items-center justify-center 
            rounded-full 
            overflow-hidden 
            w-[90vw] z-50
            max-w-[550px] 
            bg-transparent
            aspect-square
          "
            >
              {technologies.map((tech, i) => (
                <motion.div
                  key={i}
                  ref={(el) => (iconRefs.current[i] = el)}
                  className="absolute w-8 sm:w-10 h-8 sm:h-10 md:w-12 md:h-12 lg:h-14 lg:w-14 xl:h-16 xl:w-16 bg-gray-700 rounded-full will-change-transform"
                >
                  <Image
                    src={`/assets/${tech.icon}`}
                    width={200}
                    height={200}
                    alt="tech"
                    className="object-contain w-full h-full rounded-full"
                  />
                </motion.div>
              ))}
            </div>
            {/* <div className="absolute h-0.5 w-full z-0 bg-linear-to-r from-blue-500 to-purple-600" /> */}
          </div>

          <div className="grid px-12 grid-cols-1 md:grid-cols-3 gap-4 flex-1">
            <TechnologiesCard
              icon={<Music />}
              name="Frontend"
              description="Creating beautiful, responsive user interfaces"
              items={frontend}
            />

            <TechnologiesCard
              icon={<Server />}
              name="Backend"
              description="Building robust server-side applications"
              items={backend}
            />

            <TechnologiesCard
              icon={<Database />}
              name="Database"
              description="Deploying and scaling applications"
              items={database}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
