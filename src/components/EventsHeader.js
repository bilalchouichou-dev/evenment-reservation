'use client';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/../public/white.png";
import { useSession } from "next-auth/react";
import { redirect } from 'next/dist/server/api-utils';
import { useRouter } from 'next/navigation';



function EventHeader() {
    const router = useRouter()
    const profileOptionsRef = useRef()

    const [isPOptionsAffiche,setIsPOptionsAffich]=useState(false)

    const { data: session, status} = useSession({
      required: true,
      onUnauthenticated() {
      }
    });
    const searchRef = useRef();
    const searching = async()=>{
        const searchTitle = searchRef.current.value
        if(searchTitle == '' || !searchTitle || searchTitle == undefined)
        {
          return null
        }
        router.push(window.location.pathname + '?search=' + searchTitle)
    }

  return (
    <header className="flex flex-row justify-between items-center h-1/6 p-3 bg-[#3AAFA7]">

        {isPOptionsAffiche&&(
            <ul ref={profileOptionsRef} className="absolute z-40 bg-[#DEF2F1] text-black rounded-lg p-1 top-5 right-4 font-semibold text-start">
              <li className='text-center mb-2 p-2 rounded-lg w-4/6'>{session.user.username}</li>
              <li>
                <Link href='#' className="flex gap-2 items-center mb-2 hover:bg-gray-200 p-2 rounded-lg">
                  <FontAwesomeIcon icon={faUser} className=" h-5 w-5"/>
                  <span>dashboard</span>
                </Link> 
              </li>
              <li >
                <Link href="/api/auth/signout?callbackUrl=/" className="flex gap-2 items-center hover:bg-gray-200 p-2 rounded-lg">
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
        <div>
            <input ref={searchRef} type="text" placeholder="Rechercher" className=" bg-[#DEF2F1] text-black px-4 py-2 rounded-lg outline-none mr-3 " />
            <button className="bg-[#17252A] p-2 rounded-lg text-white hover:bg-yellow-400 hover:text-black" onClick={searching}>Rechercher</button>
        </div>
        <div className="flex space-x-4 items-center">
              {session && (
                 <Image onClick={()=>{isPOptionsAffiche?setIsPOptionsAffich(false):setIsPOptionsAffich(true)}} src={'/no-profile.png'} alt="profile" width={200} height={200} className="z-50 w-16 h-16 hover:cursor-pointer"/>
              )}
              {session==null && (
                <>
                  <Link href="/sign-in" className=" bg-[#17252A] p-3 rounded-lg text-white hover:bg-yellow-400 hover:text-black ">Se Connecter</Link>
                  <Link href="/sign-up" className=" bg-[#17252A] p-3 rounded-lg text-white hover:bg-yellow-400 hover:text-black">{"S'inscrire"}</Link>
                </>
              )}
        </div>
    </header>
  );
}

export default EventHeader;