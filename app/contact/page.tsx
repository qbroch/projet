import Header from "../components/Header"

export default function Contact() {
    return (
        <div className="min-h-screen bg-black flex flex-col">
            <div className="bg-black sticky top-0 z-50 p-4">
                <Header />
            </div>
            <div className="flex flex-col items-center justify-center flex-1">
                <div className="flex gap-16">
                  
                    <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-10">
                            <label htmlFor="nom" className="text-white text-3xl w-40 text-right">Votre nom :</label>
                            <input type="text" id="nom" name="nom" className="text-white bg-header p-2 w-48 rounded-xl" />
                        </div>
                        <div className="flex items-center p-2 gap-6">
                            <label htmlFor="email" className="text-white text-3xl w-40 text-right">Votre email :</label>
                            <input type="email" id="email" name="email" className="text-white bg-header p-2 w-48 rounded-xl" />
                        </div>
                        <div className="flex items-center gap-6">
                            <label htmlFor="telephone" className="text-white text-3xl w-40 text-right">Votre téléphone :</label>
                            <input type="tel" id="telephone" name="telephone" className="text-white bg-header p-2 w-48 rounded-xl" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-4">
                            <label htmlFor="prenom" className="text-white text-3xl w-40 text-right">Votre prénom :</label>
                            <input type="text" id="prenom" name="prenom" className="text-white bg-header p-2 w-48 rounded-xl" />
                        </div>
                        <div className="flex items-center gap-4">
                            <label htmlFor="entreprise" className="text-white text-3xl w-40 text-right">Votre entreprise :</label>
                            <input type="text" id="entreprise" name="entreprise" className="text-white bg-header p-2 w-48 rounded-xl" />
                        </div>
                        <div className="flex items-center gap-4">
                            <label htmlFor="services" className="text-white text-3xl w-40 text-right">Services :</label>
                            <input type="text" id="services" name="services" className="text-white bg-header p-2 w-48 rounded-xl" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}