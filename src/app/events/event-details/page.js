import Image from "next/image";
/*import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'*/
import EventsHeader from '@/components/EventsHeader'
import EventDetailMain from '@/components/EventDetailMain'
import festival from "@/../public/festival.jpg";


export default function EventDetails() {
  return (
    <>
    <EventsHeader/>
    <EventDetailMain titre={"arabic games awards"} ville={"fes"} date={"10/12/2024"} imageSrc={festival} place={120} prix={80} location={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26390.40115194911!2d-4.0454636652343865!3d34.22812109999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd9e1706ecb23995%3A0x6cd1576de83d6d65!2sTaza!5e0!3m2!1sfr!2sma!4v1713956536659!5m2!1sfr!2sma"} description={"Les Arab Game Awards offrent une vitrine stratégique pour le marketing des jeux vidéo arabes. En récompensant l'excellence de l'industrie, cet événement permet aux développeurs et aux éditeurs de promouvoir leurs produits auprès d'un public régional et international. En plus d'accroître la visibilité et d'attirer de nouveaux partenaires potentiels, les Arab Game Awards favorisent le réseautage et les opportunités de collaboration au sein de l'industrie, contribuant ainsi à renforcer la croissance et l'innovation dans le domaine des jeux vidéo arabes."}/>
    </>
  );
}