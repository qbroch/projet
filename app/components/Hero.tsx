"use client";

import hero from "../assets/Image/Hero.png";
import Image from "next/image";
import FadeIn from "../components/FadeIn";
import { useState, useEffect } from "react";


function TypeWriter({ title, speed = 30 }: { title: string, speed?: number }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index >= title.length) {
      return;
    }
    const id = setTimeout(() => setIndex((i) => i + 1), speed);
    return () => clearTimeout(id);
  }, [index, title, speed]);

  return (
    <span className="whitespace-pre-line">{title.slice(0, index)}</span>
  );
}

export default function Hero() {
  return (
    <section className="bg-black h-[900] flex items-center w-full justify-between pr-12">
      <div className="p-10 flex gap-10 flex-col">
        <h1 className="font-anton text-white text-7xl">
          <TypeWriter title={"Un dévelopeur\ninnovant et créatif"} />
        </h1>
        <div className=" text-white text-3xl w-[587px]">
          <FadeIn delay={600}>
            Je suis un petit dévelopeur indépendant qui propose mes services pour réaliser vos projets
          </FadeIn>
        </div>
        <FadeIn delay={1600}>
          <button className="bg-button font-bold text-white p-3 rounded-lg hover:cursor-pointer hover:shadow-xl hover:bg-red-400 transition-all duration-300 hover:scale-105">
            A propos
          </button>
        </FadeIn>
      </div>
      <FadeIn delay={1100}>
        <Image
          src={hero}
          width={900}
          height={900}
          alt="hero"
          className="ml-auto pr-12"
        />
      </FadeIn>
    </section>
  );
}
