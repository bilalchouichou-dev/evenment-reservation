'use client';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/../public/white.png";
import { useState,useEffect ,useRef } from "react";

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
            <ul ref={profileOptionsRef} className="absolute z-40 bg-[#DEF2F1] text-black rounded-lg p-1 top-5 right-4 font-semibold text-start">
              <li className='text-center mb-2 p-2 rounded-lg w-4/6'>{session.user.username}</li>
              <li> 
                <Link href={session.user.role=='user'?('/user-dashboard'):session.user.role=='admin'?('/admin-dashboard'):null} className="flex gap-2 items-center mb-2 hover:bg-gray-200 p-2 rounded-lg">
                  <FontAwesomeIcon icon={faUser} className=" h-5 w-5"/>
                  <span>dashboard</span>
                </Link> 
              </li>
              <li >
                <Link href="/api/auth/signout?callbackUrl=/" className="flex gap-2 items-center hover:bg-gray-200 p-2 rounded-lg ">
                  <FontAwesomeIcon icon={faRightFromBracket} className=" h-5 w-5"/>
                  <span>Se Deconnecter</span>
                </Link>
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
                        <Image onClick={()=>{isPOptionsAffiche?setIsPOptionsAffich(false):setIsPOptionsAffich(true)}} src={'/no-profile.png'} alt="profile" width={200} height={200} className=" w-14 h-14 hover:cursor-pointer z-50"/>
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