import FadeIn from "./FadeIn";
import Image from "next/image";
import IUT from "../assets/Image/Iut.png";

export default function APropos() {
    return (
        <section className="bg-white">
            <FadeIn delay={200}>
                <div className="p-12 flex justify-center">
                    <h2 className="font-anton text-black text-7xl p-12">A propos</h2>
                </div>
            </FadeIn>
            <FadeIn delay={400}>
                <div className="flex ">
                    <div className="h-[1560] w-[900] bg-button">
                        <div className="flex pt-12 pl-12">
                            <Image src={IUT} alt="IUT" width={500} height={1560}  />
                        </div>
                    </div>
                    <FadeIn delay={600}>
                        <div className="flex flex-col">
                            <div className="border-2 border-black w-[1300] h-[520] flex items-center justify-center">
                                <p className="font-anton text-black text-4xl p-12">Je suis un étudiant a l’IUT de Lannion en BUT informatique  1 ère année             </p>
                            </div>
                            <div className="border-2 border-black w-full h-[520] flex items-center">
                                <h3 className="font-anton text-black text-4xl p-12">Qui suis-je ?</h3>
                            </div>
                            <div className="border-2 border-black w-full h-[520] flex items-center">
                                <h3 className="font-anton text-black text-4xl p-12">Qui suis-je ?</h3>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </FadeIn>
        </section>
    );
}