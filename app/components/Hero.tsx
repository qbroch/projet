"use client";

import hero from "../assets/Image/Hero.png";
import Image from "next/image";
import FadeIn from "../components/FadeIn";
import { useState, useEffect } from "react";
import Link from "next/link";


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
    <section className="flex h-[900px] w-full items-center justify-between bg-black pr-12">
      <div className="flex flex-col gap-10 p-10">
        <h1 className="font-anton text-7xl text-white">
          <TypeWriter title={"Un développeur\ninnovant et créatif"} />
        </h1>
        <div className="w-[587px] text-3xl text-white">
          <FadeIn delay={600}>
            Je suis un développeur indépendant. Je conçois des solutions web modernes pour donner vie à vos projets.
          </FadeIn>
        </div>
        <FadeIn delay={1600}>
          <Link
            href="#a-propos"
            className="w-fit rounded-lg bg-button p-3 font-bold text-white transition-all duration-300 hover:scale-105 hover:cursor-pointer hover:bg-red-400 hover:shadow-xl"
          >
            A propos
          </Link>
        </FadeIn>
      </div>
      <FadeIn delay={1100}>
        <Image
          src={hero}
          width={900}
          height={900}
          alt="Illustration d'un bureau de developpement"
          className="ml-auto pr-12"
          priority
        />
      </FadeIn>
    </section>
  );
}
