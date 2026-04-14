import Choice from "./components/Choice";
import Competence from "./components/Competence";
import Header from "./components/HeaderMain";
import Hero from "./components/Hero";
import APropos from "./components/aPropos";

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col bg-black">
      <header className="sticky top-0 z-50 bg-black p-4">
        <Header />
      </header>
      <main>
        <Hero />
        <APropos />
        <Choice />
        <Competence />
      </main>
    </div>
  );
}

