import Image from "next/image";
/*import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'*/
import EventsHeader from '@/components/EventsHeader'
import EventDetailMain from '@/components/EventDetailMain'
import festival from "@/../public/festival.jpg";
import Main from '@/components/EventsMain'
import SideBar from '@/components/SideBar'
import Footer from '@/components/Footer'
import EventsMain from "@/components/EventsMain";


export default function EventDetails() {
  return (
    <>
    <EventsHeader/>
    <EventDetailMain titre={"arabic games awards"} ville={"fes"} date={"10/12/2024"} imageSrc={festival} place={120} prix={80} description={"Les Arab Game Awards offrent une vitrine stratégique pour le marketing des jeux vidéo arabes. En récompensant l'excellence de l'industrie, cet événement permet aux développeurs et aux éditeurs de promouvoir leurs produits auprès d'un public régional et international. En plus d'accroître la visibilité et d'attirer de nouveaux partenaires potentiels, les Arab Game Awards favorisent le réseautage et les opportunités de collaboration au sein de l'industrie, contribuant ainsi à renforcer la croissance et l'innovation dans le domaine des jeux vidéo arabes."}/>
    <Footer/>
    </>
  );
}