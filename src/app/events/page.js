'use client';
import Image from "next/image";
/*import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'*/
import EventsHeader from '@/components/EventsHeader'
import SideBar from '@/components/SideBar'
import EventsMain from "@/components/EventsMain";
import { useState } from "react";


export default function Events() {
  const [eventsData,setEventsData] = useState(null)
  return (
    <>
    <EventsHeader eventsData={eventsData} setEventsData={setEventsData}/>
    <div className="flex">
        <SideBar eventsData={eventsData} setEventsData={setEventsData}/>
        <EventsMain eventsData={eventsData} setEventsData={setEventsData}/>
    </div>
    </>
  );
}