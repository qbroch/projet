import Header from "./components/Header";
import Hero from "./components/Hero";

export default function Page() {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      <div className="bg-black sticky top-0 z-50 p-4">
        <Header />
      </div>
      <Hero />
    </div>
  );
}

