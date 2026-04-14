import FadeIn from "./FadeIn";
import design from "../assets/Image/Design.png";
import Image from "next/image";

export default function Choice() {
    return (
        <section className="w-full bg-white px-6 py-12 lg:px-12">
            <div className="flex justify-center p-8 lg:p-12">
                <FadeIn delay={200}>
                    <h2 className="p-6 text-center font-anton text-5xl text-black lg:p-12 lg:text-7xl">Pourquoi me choisir ?</h2>
                </FadeIn>
            </div>
            <FadeIn delay={400}>
            <div className="flex justify-center gap-[50px] p-4 lg:flex-row lg:gap-[250px] lg:p-10">
                <ol className="list-decimal list-inside font-anton text-3xl lg:text-5xl">
                    <li className="mb-12 rounded-xl transition-all duration-300 hover:cursor-pointer hover:bg-gray-200 hover:scale-105 hover:p-4">
                        <h2 className="inline-block align-middle font-anton text-black text-5xl pl-2">Expertise design</h2>
                        <p className="w-full max-w-[32rem] pt-8 text-black text-xl font-normal">
                            Recueil des besoins des clients sur tous les aspects design, avec une approche creative et structuree.
                        </p>
                    </li>
                    <li className="mb-12 rounded-xl transition-all duration-300 hover:cursor-pointer hover:bg-gray-200 hover:scale-105 hover:p-4">
                        <h2 className="inline-block align-middle font-anton text-black text-5xl pl-2">Technologies modernes</h2>
                        <p className="w-full max-w-[32rem] pt-8 text-black text-xl font-normal">Utilisation de technologies full-stack: Next.js, Tailwind CSS, React, Node.js et Prisma.</p>
                    </li>
                    <li className="mb-12 rounded-xl transition-all duration-300 hover:scale-105 hover:cursor-pointer hover:bg-gray-200 hover:p-4">
                        <h2 className="inline-block align-middle font-anton text-black text-5xl pl-2">Motivation</h2>
                        <p className="w-full max-w-[32rem] pt-8 text-black text-xl font-normal">
                            Je suis motive pour m&apos;investir en entreprise, apprendre vite et contribuer concretement a chaque projet.
                        </p>
                    </li>
                </ol>
                <div className="shrink-0 self-center">
                    <Image
                        src={design}
                        alt="Illustration de travail en design et developpement web"
                        width={400}
                        height={400}
                        className="h-[420px] w-[320px] object-contain lg:h-[550px] lg:w-[400px]"
                    />
                </div>
            </div >
            </FadeIn>
        </section >
    );
}