'use client';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/../public/white.png";
import { useState, useRef } from "react";
import { redirect } from "next/navigation";

function Header () {
    const profileOptionsRef = useRef()

    const [isPOptionsAffiche,setIsPOptionsAffich]=useState(false)

    const { data: session } = useSession({
        required: true,
        onUnauthenticated() {
        },
    });

  return (
    <header className="flex flex-row justify-between items-center p-4 bg-[#3AAFA7] ">
        {isPOptionsAffiche&&(
            <ul ref={profileOptionsRef} className="absolute bg-white text-black rounded-lg p-3 top-20 right-4 font-semibold text-start">
            <li className="flex gap-3 items-center mb-2">
                <FontAwesomeIcon icon={faUser} className=" h-5 w-5"/>
                dashboard
            </li>
            <li className='flex gap-3 items-center'>
                <FontAwesomeIcon icon={faRightFromBracket} className=" h-5 w-5"/>
                deconnecter
            </li>
            </ul>
        )}
        
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

        <div className="flex space-x-4 items-center">
                {session ? (
                    <>
                    <Link href="/api/auth/signout?callbackUrl=/" className="bg-[#17252A] p-3 rounded-lg text-white hover:bg-yellow-400 hover:text-black ">Se Deconnecter</Link>
                    <Image onClick={()=>{isPOptionsAffiche?setIsPOptionsAffich(false):setIsPOptionsAffich(true)}} src={'/no-profile.png'} alt="profile" width={200} height={200} className=" w-14 h-14"/>
                    </>
                ) : (
                    <>
                    <Link href="/sign-in" className=" bg-[#17252A] p-3 rounded-lg text-white hover:bg-yellow-400 hover:text-black">Se Connecter</Link>
                    <Link href="/sign-up" className=" bg-[#17252A] p-3 rounded-lg text-white hover:bg-yellow-400 hover:text-black">{"S'inscrire"}</Link>
                    </>
                )}
        </div>
    </header>
  );
}

export default Header;