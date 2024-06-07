'use client';
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { CldImage } from 'next-cloudinary';


function EventsMain({ titre, ville, images, date, prix, location, description, place}) {
    console.log(images)
  return (
        <main className=" p-9 text-black" >
            <section className=" flex gap-8 min-h-[30rem] justify-between">
                <div className="flex justify-between items-center w-6/12">
                    <FontAwesomeIcon icon={faChevronLeft} className=" h-10 w-10 hover:scale-125 hover:cursor-pointer"/>
                    <span className=" w-5/6">
                        {images?images.map((image, index) => (
                            <CldImage
                                key={index}
                                width={500}
                                height={500}
                                src={image}
                                alt="Image de l'événement"
                                className="w-full h-[30rem] object-center rounded-xl"
                            />
                        )):(<p className=" text-center font-semibold text-red-700">désolé il n'existe pas d'images pour le moment</p>)}
                    </span>
                    <FontAwesomeIcon icon={faChevronRight} className=" h-10 w-10 hover:scale-125 hover:cursor-pointer"/>
                </div>
                <div className="flex flex-col w-6/12 justify-between min-h-[30rem]">
                    <h1 className="text-2xl font-semibold mb-2 font-serif capitalize">{titre}</h1>
                    <p>{ville} le {date}</p>
                    <p> <span className=" font-bold text-m"> {prix} dh</span> par ticket</p>
                    <p>{place} place disponible</p>
                    <h2 className="text-lg font-semibold mb-2">A propos</h2>
                    <p className=" ">{description}</p>
                    <div>
                        <label htmlFor="nombreTicket" className="text-xl font-bold">réservervation</label>
                        <div className="flex justify-between w-2/5 pt-3 ">
                            <input id="nombreTicket" name="nombreTicket" type="number" min="1" max={place} className="appearance-none w-28 h-10 relative block p-4 border border-gray-300 placeholder-gray-500 bg-[#DEF2F1] text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 font-semibold text-lg" />
                            <button className="bg-[#17252A] p-2 rounded-lg text-white hover:bg-yellow-400 hover:text-black w-28 h-10"> réserver</button>
                        </div>
                    </div>
                </div>
            </section>
            <section className=" pl-16 mt-16">
                    <h2 className="text-2xl font-semibold mb-4">Localisation</h2>
                    <iframe
                        src={location}
                        className=" h-48 w-full"
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