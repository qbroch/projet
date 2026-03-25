import Image from "next/image";
import logo from "../assets/Image/logo.png";
import menu from "../assets/Image/menuIMG.png";

export default function Header() {
  return (
    <header className="bg-black">
      <div className="bg-header rounded-xl mx-7 my-4 p-4">
        <div className="relative flex items-center min-h-16">
          <Image src={logo} width={64} height={64} alt="logo" className="absolute left-0" />
          <div className="mx-auto">
            <button className="flex gap-2 p-2 rounded-xl hover:cursor-pointer hover:shadow-xl">
                <h1 className="font-Anton text-white text-3xl">Menu</h1>
                <Image src={menu} width={32} height={32} alt="menu"></Image>
            </button>
          </div>
          <button className="bg-button p-2 rounded-lg font-Anton text-white hover:cursor-pointer hover:shadow-xl">
            Contacter moi
          </button>
        </div>
      </div>
    </header>
  );
}