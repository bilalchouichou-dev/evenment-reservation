import Image from "next/image";
/*import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'*/
import EventsHeader from '@/components/EventsHeader'
import SideBar from '@/components/SideBar'
import EventsMain from "@/components/EventsMain";


export default function Events() {
  return (
    <>
    <EventsHeader/>
    <div className="flex">
        <SideBar/>
        <EventsMain/>
    </div>
    </>
  );
}