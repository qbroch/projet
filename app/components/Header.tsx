import Image from "next/image";
import Link from "next/link";
import logo from "../assets/Image/logo.png";

export default function Header() {
    return (
        <header className="sticky top-0 z-50 border-b border-white/10 bg-black">
            <div className="flex justify-center mx-auto max-w-5xl py-8">
                <div className="flex items-center gap-10">
                    <Link href="/" className="flex items-center">
                        <Image src={logo} width={64} height={64} alt="Logo" className="h-auto w-auto" priority />
                    </Link>
                    <nav className="flex items-center pl-10 gap-10">
                        <Link href="/" className="text-white font-bold sm:text-lg hover:text-white transition-colors">
                            Accueil
                        </Link>
                        <Link href="/about" className="text-white font-bold sm:text-lg hover:text-white hover:text-gray-300">
                            A propos
                        </Link>
                        <Link href="/about" className="text-white font-bold sm:text-lg hover:text-white hover:text-gray-300">
                            Launcher
                        </Link>
                        <Link href="/about" className="text-white font-bold sm:text-lg hover:text-white hover:text-gray-300">
                            Contact
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    );
}