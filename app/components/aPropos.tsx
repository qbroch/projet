import FadeIn from "./FadeIn";
import Image from "next/image";
import IUT from "../assets/Image/Iut.png";
import Info from "../assets/Image/Info.png";
import Alternance from "../assets/Image/Alternance.png";

export default function APropos() {
    return (
        <section className="bg-white">
            <FadeIn delay={200}>
                <div className="p-12 flex justify-center">
                    <h2 className="font-anton text-black text-7xl p-12">A propos</h2>
                </div>
            </FadeIn>
            <FadeIn delay={400}>
                <div className="flex items-center justify-center">
                    <div className="bg-button w-[660px]">
                        <div className="h-[620px] flex items-center justify-center p-12">
                            <Image src={IUT} alt="IUT" width={420} height={420} className="h-auto w-full object-contain" />
                        </div>
                        <div className="h-[520px] flex items-center justify-center p-12">
                            <Image src={Info} alt="Info" width={420} height={420} className="h-auto w-full object-contain" />
                        </div>
                        <div className="h-[520px] flex items-center justify-center p-12">
                            <Image src={Alternance} alt="Alternance" width={420} height={420} className="h-auto w-full object-contain" />
                        </div>
                    </div>
                    <FadeIn delay={600}>
                        <div className="flex flex-col w-full">
                            <div className="border-2 border-black w-full h-[620px] flex items-center">
                                <p className="text-black text-4xl p-12">Je suis un étudiant a l’IUT de Lannion en BUT informatique  1 ère année</p>
                            </div>
                            <div className="border-2 border-black w-full h-[520px] flex items-center">
                                <p className="text-black text-4xl p-12">Je maitrise le Next.js et le TailwindCSS et ce site et fait en full Stack next</p>
                            </div>
                            <div className="border-2 border-black w-full h-[520px] flex items-center">
                                <p className="text-black text-4xl p-12">Je recherche une alternance ou un stage pour l’année prochaine pour pouvoir travailler en équipe et accroitre mon expérience</p>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </FadeIn>
        </section>
    );
}
