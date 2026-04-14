"use client";

import Image from "next/image";
import Link from "next/link";
import FadeIn from "./FadeIn";
import logo from "../assets/Image/logo.png";
import menu from "../assets/Image/menuIMG.png";

type SiteHeaderProps = {
  ctaHref: string;
  ctaLabel: string;
};

export default function SiteHeader({ ctaHref, ctaLabel }: SiteHeaderProps) {
  return (
    <FadeIn delay={20}>
      <header className="rounded-xl bg-header p-4">
        <div className="relative flex min-h-16 items-center">
          <Image src={logo} width={64} height={64} alt="Logo Qbroch" className="absolute left-0" />
          <div className="mx-auto flex items-center gap-2">
            <p className="font-anton text-3xl text-white">Menu</p>
            <Image src={menu} width={32} height={32} alt="" className="pt-1" />
          </div>
          <Link
            href={ctaHref}
            className="rounded-xl bg-button p-3 text-white transition-all duration-300 hover:scale-105 hover:cursor-pointer hover:shadow-xl"
          >
            <span className="font-bold">{ctaLabel}</span>
          </Link>
        </div>
      </header>
    </FadeIn>
  );
}
