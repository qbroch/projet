import Header from "./components/HeaderMain";
import Hero from "./components/Hero";
import APropos from "./components/aPropos";

export default function Page() {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      <div className="bg-black sticky top-0 z-50 p-4">
        <Header />
      </div>
      <div>
        <Hero />
      </div>
      <div>
        <APropos />
      </div>
    </div>
  );
}

