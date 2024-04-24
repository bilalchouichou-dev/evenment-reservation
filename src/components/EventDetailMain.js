import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
function EventsMain({ titre, ville, imageSrc, date, prix, location, description, place}) {
  return (
    <main className=" p-9 text-black" >
        <section className=" flex gap-8">
            <div className=" flex justify-between items-center w-6/12">
                <FontAwesomeIcon icon={faChevronLeft} className=" h-10 w-10 hover:scale-125"/>
                <span className=" w-5/6">
                    <Image src={imageSrc} alt="Image de l'événement" className="w-full h-[30rem] object-center rounded-xl"/>
                </span>
                <FontAwesomeIcon icon={faChevronRight} className=" h-10 w-10 hover:scale-125"/>
            </div>
            <div className="flex flex-col gap-5 w-6/12">
                <h1 className="text-2xl font-semibold mb-2 font-serif capitalize">{titre}</h1>
                <p>{ville} le {date}</p>
                <p> <span className=" font-bold text-m"> {prix} dh</span> par ticket</p>
                <p>{place} place disponible</p>
                <h2 className="text-lg font-semibold mb-2">A propos</h2>
                <p>{description}</p>
                <div>
                    <label htmlFor="nombreTicket" className="text-xl font-bold">réservervation</label>
                    <div className="flex justify-between w-2/5 pt-3 ">
                        <input id="nombreTicket" name="nombreTicket" type="number" min="1" max={place} className="appearance-none w-28 h-10 relative block p-4 border border-gray-300 placeholder-gray-500 bg-[#DEF2F1] text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 font-semibold text-lg" />
                        <button className="bg-[#17252A] p-2 rounded-lg text-white hover:bg-yellow-400 hover:text-black w-28 h-10"> réserver</button>
                    </div>
                </div>
            </div>
        </section>
        <section className=" p-16">
                <h2 className="text-2xl font-semibold mb-4">Localisation</h2>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26390.40115194911!2d-4.0454636652343865!3d34.22812109999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd9e1706ecb23995%3A0x6cd1576de83d6d65!2sTaza!5e0!3m2!1sfr!2sma!4v1713956536659!5m2!1sfr!2sma"
                    className="h-[30rem] w-6/12"
                    style={{ border: '0' }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Map"
                ></iframe>
        </section>
    </main>
  );
}

export default EventsMain;