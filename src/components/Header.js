'use client';
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/../public/white.png";
import { useRef } from "react";

function Header () {

    const session = useSession();

  return (
    <header className="flex flex-row justify-between items-center p-4 bg-[#3AAFA7] ">
        <Link href="/" className="flex items-center">
            <Image src={logo} alt="logo" className=" w-16 h-14" placeholder="blur"/>  
            <h1 className="font-serif text-white text-3xl">
                <span>Event</span>
                <span className="text-yellow-400">Rise</span>
            </h1>
        </Link>
        
        <nav className="flex items-center space-x-5 font-semibold text-lg">
            <Link href="/" className="text-[#17252A] hover:text-yellow-400 ">Accueil</Link>
            <Link href="/events" className="text-[#17252A] hover:text-yellow-400">Événements</Link>
            <Link href="/reserve" className="text-[#17252A] hover:text-yellow-400">Réserver</Link>
            <a href="#a-propos" className="text-[#17252A] hover:text-yellow-400">À propos</a>
            <a href="#contacts" className="text-[#17252A] hover:text-yellow-400">Contact</a>
        </nav>

        <div className="flex space-x-4">
            {session?
            <Link href="/sign-in" className=" bg-[#17252A] p-3 rounded-lg text-white hover:bg-yellow-400 hover:text-black">Se Déconnecter</Link>
            :
            <>
            <Link href="/sign-in" className=" bg-[#17252A] p-3 rounded-lg text-white hover:bg-yellow-400 hover:text-black">Se connecter</Link>
            <Link href="/sign-up" className=" bg-[#17252A] p-3 rounded-lg text-white hover:bg-yellow-400 hover:text-black">{"S'inscrire"}</Link>
            </>
            }
        </div>
    </header>
  );
}

export default Header;