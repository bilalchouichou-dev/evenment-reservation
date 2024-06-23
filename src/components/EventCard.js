'use client';
import Image from "next/image";
import Link from "next/link";
import { CldImage } from 'next-cloudinary';

function EventsCards({ titre, ville, imageId, date ,productId}) {

  return (
    <div className="goup bg-[#dddddd]  rounded-2xl overflow-hidden shadow-xl h-60 text-[#17252A] hover:scale-105 hover:shadow-[#8fcfcb]">
          <Link href={"/events/" + productId}>
          {imageId?
            <CldImage
            width="500"
            height="500"
            src={imageId}
            alt="Image de l'événement"
            className="w-full h-40 object-cover object-center" 
          />:
          <div className="flex w-full h-40 justify-center items-center bg-indigo-100">
            <p className="text-lg text-center text-red-400" > image inexistant </p>
          </div>
          }
          <div className="p-4 ">
              <h2 className="text-xl font-semibold mb-2 ">{titre}</h2>
                  <p>{ville} le {date}</p>
          </div>
          </Link>
    </div>
  );
}

export default EventsCards;