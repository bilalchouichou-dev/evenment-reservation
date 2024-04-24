import Image from "next/image";
import Link from "next/link";
import EventCard from "@/components/EventCard";
import festival from "@/../public/festival.jpg";
import homeBg from "@/../public/home-bg.jpg";
import sport from "@/../public/sport.jpg";
import workshop from "@/../public/workshop.jpg";

function EventsMain() {
  return (
    <main className="flex flex-row min-h-screen w-4/5 p-9 gap-6 gap-y-6 flex-wrap">
      <EventCard titre={"arabic games awards"} ville={"fes"} date={"10/12/2024"} imageSrc={festival}/>
      <EventCard titre={"match morocco vs germany"} ville={"taza"} date={"10/12/2024"} imageSrc={sport}/>
      <EventCard titre={"workshop about machinery"} ville={"marakech"} date={"10/12/2024"} imageSrc={workshop}/>
      <EventCard titre={"festival des couleurs"} ville={"agadir"} date={"10/12/2024"} imageSrc={festival}/>
      <EventCard titre={"présentation de projet tramway"} ville={"casa"} date={"10/12/2024"} imageSrc={homeBg}/>
      <EventCard titre={"workshop about routing"} ville={"rabat"} date={"10/12/2024"} imageSrc={workshop}/>
      <EventCard titre={"concert classical musique"} ville={"tanger"} date={"10/12/2024"} imageSrc={homeBg}/>
      <EventCard titre={"match real vs barcelona"} ville={"tetouan"} date={"10/12/2024"} imageSrc={sport}/>
      <EventCard titre={"arabic games awards"} ville={"fes"} date={"10/12/2024"} imageSrc={festival}/>
      <EventCard titre={"match morocco vs germany"} ville={"taza"} date={"10/12/2024"} imageSrc={sport}/>
      <EventCard titre={"workshop about machinery"} ville={"marakech"} date={"10/12/2024"} imageSrc={workshop}/>
      <EventCard titre={"festival des couleurs"} ville={"agadir"} date={"10/12/2024"} imageSrc={festival}/>
      <EventCard titre={"présentation de projet tramway"} ville={"casa"} date={"10/12/2024"} imageSrc={homeBg}/>
      <EventCard titre={"workshop about routing"} ville={"rabat"} date={"10/12/2024"} imageSrc={workshop}/>
      <EventCard titre={"concert classical musique"} ville={"tanger"} date={"10/12/2024"} imageSrc={homeBg}/>
      <EventCard titre={"match real vs barcelona"} ville={"tetouan"} date={"10/12/2024"} imageSrc={sport}/>
      <EventCard titre={"arabic games awards"} ville={"fes"} date={"10/12/2024"} imageSrc={festival}/>
      <EventCard titre={"match morocco vs germany"} ville={"taza"} date={"10/12/2024"} imageSrc={sport}/>
      <EventCard titre={"workshop about machinery"} ville={"marakech"} date={"10/12/2024"} imageSrc={workshop}/>
      <EventCard titre={"festival des couleurs"} ville={"agadir"} date={"10/12/2024"} imageSrc={festival}/>
      <EventCard titre={"présentation de projet tramway"} ville={"casa"} date={"10/12/2024"} imageSrc={homeBg}/>
      <EventCard titre={"workshop about routing"} ville={"rabat"} date={"10/12/2024"} imageSrc={workshop}/>
      <EventCard titre={"concert classical musique"} ville={"tanger"} date={"10/12/2024"} imageSrc={homeBg}/>
      <EventCard titre={"match real vs barcelona"} ville={"tetouan"} date={"10/12/2024"} imageSrc={sport}/>
      <EventCard titre={"arabic games awards"} ville={"fes"} date={"10/12/2024"} imageSrc={festival}/>
      <EventCard titre={"match morocco vs germany"} ville={"taza"} date={"10/12/2024"} imageSrc={sport}/>
      <EventCard titre={"workshop about machinery"} ville={"marakech"} date={"10/12/2024"} imageSrc={workshop}/>
      <EventCard titre={"festival des couleurs"} ville={"agadir"} date={"10/12/2024"} imageSrc={festival}/>
      <EventCard titre={"présentation de projet tramway"} ville={"casa"} date={"10/12/2024"} imageSrc={homeBg}/>
      <EventCard titre={"workshop about routing"} ville={"rabat"} date={"10/12/2024"} imageSrc={workshop}/>
      <EventCard titre={"concert classical musique"} ville={"tanger"} date={"10/12/2024"} imageSrc={homeBg}/>
      <EventCard titre={"match real vs barcelona"} ville={"tetouan"} date={"10/12/2024"} imageSrc={sport}/>
    </main>
  );
}

export default EventsMain;