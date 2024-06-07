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
  const eventManagementRef = useRef()
  const AddEventRef = useRef()
  const complaintManagementRef = useRef()
  const changingSections = (e,btn1,btn2,section)=>{
    btn1.current.classList.remove('bg-white')
    btn1.current.classList.add('bg-gray-100')
    btn2.current.classList.remove('bg-white')
    btn2.current.classList.add('bg-gray-100')
    e.target.classList.remove('bg-gray-100')
    e.target.classList.add('bg-white')
    setMain(section)
  }
  return (
    <aside className="flex flex-col w-[24rem] text-black bg-gray-100 min-h-screen max-w-50%" >
      <div className="flex flex-col">
        <button ref={eventManagementRef} className="text-left bg-white px-10 py-4 text-lg font-semibold text-gray-800 hover:text-gray-600" onClick={(e)=>{changingSections(e,AddEventRef,complaintManagementRef,'eventManagement')}}>Gestion des événements</button>
        <button ref={AddEventRef} className="text-left px-10 py-4 text-lg font-semibold text-gray-800 hover:text-gray-600" onClick={(e)=>{changingSections(e,eventManagementRef,complaintManagementRef,'eventAdd')}}>Ajouter des événements</button>
        <button ref={complaintManagementRef} className="text-left px-10 py-4 text-lg font-semibold text-gray-800 hover:text-gray-600" onClick={(e)=>{changingSections(e,AddEventRef,eventManagementRef,null)}}>Gestion des plaintes</button>
      </div>
    </aside>
  );
}

export default DashSide;