'use client';

import Image from "next/image";
import Link from "next/link";
import logo from "@/../public/white.png";
import { useRef } from "react";



function EventHeader({eventsData , setEventsData}) {
    const searchRef = useRef();
    const searching = async()=>{
        const searchTitle = searchRef.current.value
        if(searchTitle == '' || !searchTitle || searchTitle == undefined)
        {
          return null
        }
        try {
            const xhr = new XMLHttpRequest();
              xhr.open("get", "/api/events/search" + "?search=" + searchTitle , true);
              xhr.addEventListener("load", () => {
              if (xhr.status != 200) return alert("error" + xhr.response);
              let data = JSON.parse(xhr.response);
              setEventsData(data);
                console.log("this is data from searrchc" + data)

              });
              xhr.addEventListener("error", () => {
              alert("error");
              });
              xhr.send()
            setEventsData(data)
          }catch (error) {
              console.error('Error fetching data:', error);
          }
    }

  return (
    <header className="flex flex-row justify-between items-center h-1/6 p-4 bg-[#3AAFA7]">
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
        <div class="flex space-x-4 items-center">
            <a href="/sign-up" className="bg-[#17252A] p-3 rounded-lg text-white hover:bg-yellow-400 hover:text-black">{"S'inscrire"}</a>
            <a href="/sign-in" className="bg-[#17252A] p-3 rounded-lg text-white hover:bg-yellow-400 hover:text-black">Se connecter</a>
        </div>
    </header>
  );
}

export default EventHeader;