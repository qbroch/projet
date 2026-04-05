import FadeIn from "./FadeIn";

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
                    <div className="h-[768] w-[600] bg-button">
                    </div>
                    <div className="flex flex-col">
                        <div className="border-2 border-black w-[1500] h-64 flex items-center">
                            <h3 className="font-anton text-black text-4xl p-12">Qui suis-je ?</h3>
                        </div>
                        <div className="border-2 border-black w-full h-64 flex items-center">
                            <h3 className="font-anton text-black text-4xl p-12">Qui suis-je ?</h3>
                        </div>
                        <div className="border-2 border-black w-full h-64 flex items-center">
                            <h3 className="font-anton text-black text-4xl p-12">Qui suis-je ?</h3>
                        </div>
                    </div>
                </div>

            </FadeIn>
        </section>
    );
}