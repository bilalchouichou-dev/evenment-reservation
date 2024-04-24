import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';


import logo from "@/../public/white.png";

function Footer() {
  return (
      <footer className="bg-[#17252A] text-white py-8">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-28">
          <div className="flex flex-col justify-center items-center">
            <Image src={logo} alt="logo" placeholder="blur"/>
            <h1 className="font-serif text-white text-3xl">
                <span>Event</span>
                <span className="text-yellow-400">Rise</span>
            </h1>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-justify">A propos</h2>
            <p>EventRise est une plateforme innovante qui simplifie la réservation d'événements. Notre mission est de vous offrir une expérience fluide et enrichissante, vous permettant de découvrir et de réserver facilement une variété d'événements culturels, artistiques, sportifs et éducatifs. Avec une interface intuitive et des fonctionnalités avancées, nous visons à être votre compagnon de confiance pour créer des souvenirs inoubliables et enrichir votre vie avec des expériences uniques.</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Quick Links</h2>
            <ul>
            <ul className="flex flex-col leading-10">
              <li className="mr-4">
                <Link href="/" className="text-white hover:text-yellow-400">Accueil</Link>
              </li>
              <li className="mr-4">
                <Link href="/events" className="text-white hover:text-yellow-400">Événements</Link>
              </li>
              <li className="mr-4">
                <Link href="/reserve" className="text-white hover:text-yellow-400">Réserver</Link>
              </li>
              <li className="mr-4">
                <Link href="/about" className="text-white hover:text-yellow-400">À propos</Link>
              </li>
              <li>
                <Link href="/contact" className="text-white hover:text-yellow-400">Contact</Link>
              </li>
            </ul>
            </ul>
          </div>
          </div>
          <div className="flex justify-evenly items-center p-10">
            <FontAwesomeIcon icon={faFacebook} className=" h-10 w-10"/>
            <FontAwesomeIcon icon={faInstagram} className=" h-10 w-10"/>
            <FontAwesomeIcon icon={faEnvelope} className=" h-10 w-10"/>
            <FontAwesomeIcon icon={faTwitter} className=" h-10 w-10"/>
            <FontAwesomeIcon icon={faPhone} className=" h-10 w-10"/>
          </div>
          <div className="mt-8 text-center text-xl">
            <p>&copy; 2024 EventRise. All rights reserved.</p>
          </div>
    </footer>
  );
}

export default Footer;