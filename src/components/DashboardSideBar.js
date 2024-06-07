'use client';

import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSliders } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useRef, useState } from "react";
import {creationPath} from "@/functions/creationUrl"
import { Router } from "next/router";
import { useRouter } from "next/navigation";


function DashSide({setMain}) {
  const donnéesRef = useRef()
  const eventRef = useRef()
  const plaintsRef = useRef()
  const changeMdpRef = useRef()
  const changingSections = (e,btn1,btn2,btn3,section)=>{
    btn1.current.classList.remove('bg-white')
    btn1.current.classList.add('bg-gray-100')
    btn2.current.classList.remove('bg-white')
    btn2.current.classList.add('bg-gray-100')
    btn3.current.classList.remove('bg-white')
    btn3.current.classList.add('bg-gray-100')
    e.target.classList.remove('bg-gray-100')
    e.target.classList.add('bg-white')
    setMain(section)
  }
  return (
    <aside className="flex flex-col w-[20%] min-w-72 text-black bg-gray-100" >
      <div className="flex flex-col">
        <button ref={donnéesRef} className="text-left bg-white px-10 py-4 text-lg font-semibold text-gray-800 hover:text-gray-600" onClick={(e)=>{changingSections(e,eventRef,plaintsRef,changeMdpRef,'donnePers')}}>infos personelle</button>
        <button ref={changeMdpRef} className="text-left px-10 py-4 text-lg font-semibold text-gray-800 hover:text-gray-600" onClick={(e)=>{changingSections(e,donnéesRef,plaintsRef,eventRef,'changementMDP')}}>chnager mot de passe</button>
        <button ref={eventRef} className="text-left px-10 py-4 text-lg font-semibold text-gray-800 hover:text-gray-600" onClick={(e)=>{changingSections(e,donnéesRef,plaintsRef,changeMdpRef,'resEvent')}}>évènement réservé</button>
        <button ref={plaintsRef} className="text-left px-10 py-4 text-lg font-semibold text-gray-800 hover:text-gray-600" onClick={(e)=>{changingSections(e,eventRef,donnéesRef,changeMdpRef,'plaintes')}}>Plaintes</button>
      </div>
    </aside>
  );
}

export default DashSide;