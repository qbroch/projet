"use client";

import Image from "next/image";
import logo from "../assets/Image/logo.png";
import menu from "../assets/Image/menuIMG.png";
import FadeIn from "./FadeIn";
import Link from "next/link";

export default function Header() {
  return (
    <FadeIn delay={20}>
          <header className="bg-header rounded-xl p-4">
        <div className="relative flex items-center min-h-16">
          
          <Image src={logo} width={64} height={64} alt="logo" className="absolute left-0" />
          <div className="mx-auto">
            <button className="flex gap-2 p-3 rounded-xl hover:cursor-pointer hover:shadow-xl transition-all duration-300 hover:scale-105">
                <h1 className="font-Anton text-white text-3xl">Menu</h1>
                <Image src={menu} width={32} height={32} alt="menu" className="pt-1"></Image>
            </button>
          </div>
          <Link href={"/contact"}>
              <button className="flex gap-2 p-3 bg-button rounded-xl hover:cursor-pointer hover:shadow-xl transition-all duration-300 hover:scale-105">
                <h2 className="font-Anton text-white">Contacter moi</h2>
              </button>
          </Link>

        </div>
    </header>
    </FadeIn>
  );
   

}