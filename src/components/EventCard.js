import Image from "next/image";
import Link from "next/link";
function EventsCards({ titre, ville, imageSrc, date ,productId}) {

  return (
    <div className="bg-[#dddddd]  rounded-2xl overflow-hidden shadow-xl h-60 text-[#17252A] hover:scale-105 hover:shadow-[#8fcfcb]">
          <Link href={"/events/" + productId}>
          <Image src={imageSrc} alt="Image de l'événement" className="w-full h-40 object-cover object-center" />
          <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{titre}</h2>
                  <p>{ville} le {date}</p>
          </div>
          </Link>
    </div>
  );
}

export default EventsCards;