import FadeIn from "./FadeIn";
import Image from "next/image";
import IUT from "../assets/Image/Iut.png";
import Info from "../assets/Image/Info.png";
import Alternance from "../assets/Image/Alternance.png";

export default function APropos() {
    return (
        <section id="a-propos" className="bg-white">
            <FadeIn delay={200}>
                <div className="p-12 flex justify-center">
                    <h2 className="font-anton text-black text-7xl p-12">A propos</h2>
                </div>
            </FadeIn>
            <FadeIn delay={400}>
                <div className="flex items-center justify-center">
                    <div className="bg-button w-[660px]">
                        <div className="h-[620px] flex items-center justify-center p-12">
                            <Image src={IUT} alt="IUT de Lannion" width={420} height={420} className="h-auto w-full object-contain" />
                        </div>
                        <div className="h-[520px] flex items-center justify-center p-12">
                            <Image src={Info} alt="Illustration des competences informatiques" width={420} height={420} className="h-auto w-full object-contain" />
                        </div>
                        <div className="h-[520px] flex items-center justify-center p-12">
                            <Image src={Alternance} alt="Illustration de recherche d'alternance" width={420} height={420} className="h-auto w-full object-contain" />
                        </div>
                    </div>
                    <FadeIn delay={600}>
                        <div className="flex flex-col w-full">
                            <div className="border-2 border-black w-full h-[620px] flex items-center">
                                <p className="text-black text-4xl p-12">Je suis etudiant en premiere annee de BUT Informatique a l&apos;IUT de Lannion.</p>
                            </div>
                            <div className="border-2 border-black w-full h-[520px] flex items-center">
                                <p className="text-black text-4xl p-12">Je maitrise Next.js et Tailwind CSS, et ce site a ete realise en full-stack avec Prisma.</p>
                            </div>
                            <div className="border-2 border-black w-full h-[520px] flex items-center">
                                <p className="text-black text-4xl p-12">Je recherche une alternance ou un stage pour l&apos;annee prochaine afin de travailler en equipe et de renforcer mon experience.</p>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </FadeIn>
        </section>
    );
}
