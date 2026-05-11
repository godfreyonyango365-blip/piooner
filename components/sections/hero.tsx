"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const FULL_TEXT =
  "Building knowledge, preserving truth, and advancing digital ministry through publications and technology.";

const PARTICLES = [
  { left: "8%", top: "18%", duration: 3.2 },
  { left: "18%", top: "72%", duration: 4.1 },
  { left: "27%", top: "36%", duration: 3.7 },
  { left: "35%", top: "84%", duration: 4.6 },
  { left: "43%", top: "22%", duration: 3.4 },
  { left: "52%", top: "64%", duration: 4.8 },
  { left: "61%", top: "12%", duration: 3.9 },
  { left: "69%", top: "48%", duration: 4.4 },
  { left: "76%", top: "78%", duration: 3.5 },
  { left: "84%", top: "28%", duration: 4.9 },
  { left: "91%", top: "58%", duration: 3.8 },
  { left: "12%", top: "46%", duration: 4.3 },
  { left: "48%", top: "90%", duration: 3.6 },
  { left: "94%", top: "16%", duration: 4.2 },
];

function useTyping(text: string, speed = 60, delay = 1500) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let index = 0;
    let interval: ReturnType<typeof setInterval>;
    let restartTimeout: ReturnType<typeof setTimeout>;

    const start = () => {
      interval = setInterval(() => {
        setDisplayed(text.slice(0, index + 1));
        index++;

        if (index === text.length) {
          clearInterval(interval);
          restartTimeout = setTimeout(() => {
            index = 0;
            setDisplayed("");
            start();
          }, delay);
        }
      }, speed);
    };

    start();

    return () => {
      clearInterval(interval);
      clearTimeout(restartTimeout);
    };
  }, [text, speed, delay]);

  return displayed;
}

export default function Hero() {
  const typingText = useTyping(FULL_TEXT);

  return (
    <motion.section
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <video
        src="/assets/bygo.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <video
          src="/assets/bygo.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="max-h-full max-w-full object-contain opacity-80"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/80 via-blue-900/70 to-black/80" />

      <div className="absolute inset-0">
        {PARTICLES.map((particle) => (
          <motion.div
            key={`${particle.left}-${particle.top}`}
            className="absolute h-1 w-1 rounded-full bg-blue-400"
            style={{ left: particle.left, top: particle.top }}
            animate={{ y: [0, -25, 0], opacity: [0, 1, 0] }}
            transition={{ duration: particle.duration, repeat: Infinity }}
          />
        ))}
      </div>

      <div className="relative z-10 grid w-full max-w-7xl items-center gap-10 px-6 lg:grid-cols-2">
        <div>
          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Pioneers{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500 bg-clip-text text-transparent">
              Footprints
            </span>
          </motion.h1>

          <h2 className="mt-4 text-xl text-blue-200 md:text-2xl">
            Publications & Digital Ministry
          </h2>

          <div className="mt-6 min-h-[1.5em] text-lg text-blue-100 md:text-xl">
            {typingText}
            <span className="animate-pulse">|</span>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/services"
              className="rounded-xl bg-white px-8 py-4 font-semibold text-blue-600 transition hover:scale-105"
            >
              Explore Services
            </Link>

            <Link
              href="/publications"
              className="rounded-xl border-2 border-blue-300 px-8 py-4 text-white transition hover:bg-white/10"
            >
              View Resources
            </Link>

            <Link
              href="/donate"
              className="rounded-xl border-2 border-purple-400 px-8 py-4 text-purple-200 transition hover:bg-purple-400/20"
            >
              Support Mission
            </Link>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="hidden lg:block"
        >
          <div className="relative h-80 w-full">
            <div className="absolute inset-0 rounded-full border-2 border-blue-400/30 animate-pulse" />
            <div className="absolute inset-10 rounded-full border border-purple-400/30 animate-spin [animation-duration:18s]" />
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="flex h-10 w-6 justify-center rounded-full border-2 border-blue-400 pt-2">
          <div className="h-3 w-1 rounded-full bg-blue-400" />
        </div>
      </motion.div>
    </motion.section>
  );
}
