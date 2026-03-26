"use client";

import replace from "../assets/Image/Replace.png";
import Image from "next/image";
import { useState, useEffect } from "react";

type TypeWriterProps = {
  title: string;
  speed?: number;
};

function TypeWriter({ title, speed = 50 }: TypeWriterProps) {
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
    <section className="bg-black flex-1 flex items-center w-full justify-between">
      <div className="p-10 flex gap-10 flex-col">
        <h1 className="font-Anton text-white text-7xl">
          <TypeWriter title={"Un dévelopeur\ninnovant et créatif"} />
        </h1>
        <p className=" text-white text-3xl w-[587px]">
          Je suis un petit dévelopeur indépendant qui propose mes services pour
          réaliser vos projets
        </p>
        <button className="bg-button w-32 p-2 rounded-lg hover:cursor-pointer hover:shadow-xl">
          <h2 className="font-Anton text-white text-2xl">A propos</h2>
        </button>
      </div>
      <Image
        src={replace}
        width={900}
        height={900}
        alt="replace"
        className="ml-auto p-12"
      />
    </section>
  );
}
