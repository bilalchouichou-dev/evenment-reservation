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



function EventHeader({DashType,session}) {
    const profileOptionsRef = useRef()

    const [isPOptionsAffiche,setIsPOptionsAffich]=useState(false)


  return (
    <header className="flex flex-row justify-between items-center h-1/6 p-3 bg-[#3AAFA7]">

        {isPOptionsAffiche&&(
            <ul ref={profileOptionsRef} className="absolute z-40 bg-[#DEF2F1] text-black rounded-lg p-1 top-5 right-4 font-semibold text-start">
              <li className='text-center mb-2 p-2 rounded-lg w-4/6'>{session.user.username}</li>
              <li >
                <Link href="/api/auth/signout?callbackUrl=/" className="flex gap-2 items-center hover:bg-gray-200 p-2 rounded-lg">
                  <FontAwesomeIcon icon={faRightFromBracket} className=" h-5 w-5"/>
                  <span>Se Deconnecter</span>
                </Link>
              </li>
            </ul>
        )}
        <h1 className="font-serif text-white text-3xl">
            <span className=' font-bold'>{DashType}</span>
        </h1>
        <div>
        </div>
        <div className="flex space-x-4 items-center">
              {session && (
                 <Image onClick={()=>{isPOptionsAffiche?setIsPOptionsAffich(false):setIsPOptionsAffich(true)}} src={'/no-profile.png'} alt="profile" width={200} height={200} className="z-50 w-16 h-16 hover:cursor-pointer"/>
              )}
        </div>
    </header>
  );
}

export default EventHeader;