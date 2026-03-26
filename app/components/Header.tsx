import Image from "next/image";
import logo from "../assets/Image/logo.png";
import menu from "../assets/Image/menuIMG.png";

export default function Header() {
  return (
    <header className="bg-header rounded-xl p-4">
        <div className="relative flex items-center min-h-16">
          <Image src={logo} width={64} height={64} alt="logo" className="absolute left-0" />
          <div className="mx-auto">
            <button className="flex gap-2 p-3 rounded-xl hover:cursor-pointer hover:shadow-xl">
                <h1 className="font-Anton text-white text-3xl">Menu</h1>
                <Image src={menu} width={32} height={32} alt="menu"></Image>
            </button>
          </div>
          <button className="bg-button p-2 mx-4 rounded-lg  hover:cursor-pointer hover:shadow-xl">
            <h2 className="font-Anton text-white">Contacter moi</h2>
          </button>
        </div>
    </header>
  );
}