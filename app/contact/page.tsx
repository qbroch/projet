"use client";
import Header from "../components/Header"
import FadeIn from "../components/FadeIn";
import { useState, type ChangeEvent } from "react"; 

type ContactFormData = {
    nom: string;
    prenom : string ;
    email : string;
    telephone : string;
    entreprise : string;
    services : string;
    message : string;
};




function isFormComplete(data: ContactFormData): boolean {
    return (
        data.nom.trim() !== "" &&
        data.prenom.trim() !== "" &&
        data.email.trim() !== "" &&
        data.telephone.trim() !== "" &&
        data.entreprise.trim() !== "" &&
        data.services.trim() !== "" &&
        data.message.trim() !== ""
    );
}

export default function Contact() {
    const [loading , setLoading] = useState(false);
    const [formError, setFormError] = useState<string | null>(null);
    const [formData, setFormData] = useState<ContactFormData>({
        nom: "",
        prenom: "",
        email: "",
        telephone: "",
        entreprise: "",
        services: "",
        message: "",
      });

      
    function handleChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, ) {
        const { name, value } = event.target;
        setFormError(null);
        setFormData((prev,) => ({
            ...prev,
            [name as keyof ContactFormData]: value,
        }));
    }

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
    
        setLoading(true);
        setFormError(null);

        if(formData.message.length > 1000 || formData.entreprise.length > 25 || formData.services.length > 25 || formData.telephone.length > 11 || formData.email.length > 50 || formData.prenom.length > 25 || formData.nom.length > 25) {
            setFormError("Le message ne doit pas dépasser 1000 caractères, le nom ne doit pas dépasser 25 caractères, le prénom ne doit pas dépasser 25 caractères, le téléphone ne doit pas dépasser 11 caractères, l'email ne doit pas dépasser 50 caractères, le service ne doit pas dépasser 25 caractères, l'entreprise ne doit pas dépasser 25 caractères");
            setLoading(false);
            return;
        }
        else if (!isFormComplete(formData)) {
            setFormError("Veuillez remplir tous les champs avant d’envoyer le formulaire.");
            setLoading(false);
            return;
        }

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            const payload = (await res.json().catch(() => ({}))) as {
                error?: string;
            };
            if (!res.ok) {
                setFormError(
                    payload.error ??
                        "Une erreur est survenue à l’envoi. Réessaie plus tard.",
                );
                return;
            }
            setFormError("Message envoyé avec succès");
            setFormData({
                nom: "",
                prenom: "",
                email: "",
                telephone: "",
                entreprise: "",
                services: "",
                message: "",
            });
        } catch {
            setFormError("Impossible de contacter le serveur.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="min-h-screen bg-black flex flex-col">
            <div className="bg-black sticky top-0 z-50 p-4">
                <Header />
            </div>
            <FadeIn delay={600}>
                <main className="w-full max-w-7xl mx-auto px-6 py-10">
                    {formError ? (
                        <p
                            role="alert"
                            className="mb-6 rounded-xl border-2 border-header  px-4 py-3 text-2xl text-white font-bold"
                        >
                            {formError}
                        </p>
                    ) : null}
                    <form onSubmit={handleSubmit} className="font-bold grid grid-cols-1 lg:grid-cols-2 gap-10">
                        <div className="flex flex-col gap-6">
                            <div>
                                <label htmlFor="nom" className="font-bold block text-white px-2 pb-2 text-4xl">Votre nom</label>
                                <input
                                    id="nom"
                                    name="nom"
                                    value={formData.nom}
                                    type="text"
                                    onChange={handleChange}
                                    className="w-full p-4 border-2 border-header rounded-xl text-white outline-none focus:ring-0 text-2xl"
                                />
                            </div>
                            <div>
                                <label htmlFor="prenom" className="font-bold block text-white px-2 pb-2 text-4xl">Votre prénom</label>
                                <input
                                    id="prenom"
                                    name="prenom"
                                    type="text"
                                    value={formData.prenom}
                                    onChange={handleChange}
                                    className="w-full p-4 border-2 border-header rounded-xl text-white outline-none focus:ring-0 text-2xl"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block font-bold text-white px-2 pt-4 text-4xl">Votre email</label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full p-4 border-2 border-header rounded-xl text-white outline-none focus:ring-0 text-2xl"
                                />
                            </div>
                            <div>
                                <label htmlFor="telephone" className=" font-bold block text-white px-2 pt-2 text-4xl">Votre téléphone</label>
                                <input
                                    id="telephone"
                                    name="telephone"
                                    type="tel"
                                    value={formData.telephone}
                                    onChange={handleChange}
                                    className="w-full p-4 border-2 border-header rounded-xl text-white outline-none focus:ring-0 text-2xl"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-6">
                            <div>
                                <label htmlFor="entreprise" className="font-bold block text-white px-2 pb-2 text-4xl">Votre entreprise</label>
                                <input
                                    id="entreprise"
                                    name="entreprise"
                                    type="text"
                                    value={formData.entreprise}
                                    onChange={handleChange}
                                    className="w-full p-4 border-2 border-header rounded-xl text-white outline-none focus:ring-0 text-2xl"
                                />
                            </div>
                            <div>
                                <label htmlFor="services" className="font-bold block text-white px-2 pb-2 text-4xl">Services</label>
                                <input
                                    id="services"
                                    name="services"
                                    type="text"
                                    value={formData.services}
                                    onChange={handleChange}
                                    className="w-full p-4 border-2 border-header rounded-xl text-white outline-none focus:ring-0 text-2xl"
                                />
                            </div>
                            <div>
                                <label htmlFor="message"className="font-bold block text-white px-2 pb-2 text-4xl">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    rows={6}
                                    onChange={handleChange}
                                    className="w-full text-2xl p-4 border-2 border-header text-white outline-none focus:ring-0 rounded-xl"
                                />
                            </div>
                            <div className="flex justify-end">
                                <button disabled={loading} type="submit" id="submit" className="flex gap-2 p-4 bg-button rounded-xl hover:cursor-pointer hover:shadow-xl transition-all duration-300 hover:scale-105">
                                    <h2 className="font-Anton text-white text-4xl">{loading ? "Envoi..." : "Valider"}</h2>
                                </button>
                            </div>
                        </div>
                    </form>
                </main>
            </FadeIn>

        </div>
    );
}