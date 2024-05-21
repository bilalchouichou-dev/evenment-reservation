'use client';

import Image from "next/image";
import Link from "next/link";
import EventCard from "@/components/EventCard";
import festival from "@/../public/festival.jpg";
import homeBg from "@/../public/home-bg.jpg";
import sport from "@/../public/sport.jpg";
import workshop from "@/../public/workshop.jpg";
import { useEffect, useState } from "react";


function EventsMain({eventsData , setEventsData}) {
  const [searchTitle,setSearchTitle] = useState(null)
  
  useEffect(()=> {
    const fetchData = async() => {
    try {
      const xhr = new XMLHttpRequest();
        xhr.open("get", "/api/events" , true);
        xhr.addEventListener("load", () => {
        if (xhr.status != 200) return alert("error" + xhr.response);
        let data = JSON.parse(xhr.response);
        setEventsData(data);
        });
        xhr.addEventListener("error", () => {
        alert("error");
        });
        xhr.send()
        
    }catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  },[])
  
  console.log("rendrering")

  return (
    <main className="grid gap-6 min-h-screen p-5 gap-y-6 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-full">
      {/*<EventCard id={10} titre={"arabic games awards"} ville={"fes"} date={"10/12/2024"} imageSrc={festival}/>*/}
      {eventsData && eventsData.map((event, index) => (
        <EventCard
          productId={event.idevent}
          key={index}  
          id ={event.id}
          titre={event.titre} 
          ville={event.nomville}  
          date={event.date} 
          /*imageSrc={event.imageSrc} flex flex-row min-h-screen w-4/5 p-9 gap-6 gap-y-6 flex-wrap*//>
      ))}
    </main>
  );
}

export default EventsMain;