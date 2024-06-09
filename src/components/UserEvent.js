
import Link from "next/link";
import { useEffect, useState } from "react";

const EventTable = ({session,events}) => {
    
    
    return (
      <div className="container mx-auto p-4">
        <table className="min-w-full border-collapse block md:table">
          <thead className="block md:table-header-group">
            <tr className="border border-gray-200 md:border-none block md:table-row">
              <th className="bg-gray-200 p-2 text-gray-600 font-bold md:border md:border-gray-300 text-left block md:table-cell">Nom de l&apos;événement</th>
              <th className="bg-gray-200 p-2 text-gray-600 font-bold md:border md:border-gray-300 text-left block md:table-cell">Date</th>
              <th className="bg-gray-200 p-2 text-gray-600 font-bold md:border md:border-gray-300 text-left block md:table-cell">Ville</th>
              <th className="bg-gray-200 p-2 text-gray-600 font-bold md:border md:border-gray-300 text-left block md:table-cell">Lien</th>
              <th className="bg-gray-200 p-2 text-gray-600 font-bold md:border md:border-gray-300 text-left block md:table-cell">Nombre de tickets réservée</th>
            </tr>
          </thead>
          <tbody className="block md:table-row-group text-black">
            {events&&events.map((event, index) => (
              <tr key={index} className="bg-white border border-gray-200 md:border-none block md:table-row">
                <td className="p-2 md:border md:border-gray-300 text-left block md:table-cell">{event.titre}</td>
                <td className="p-2 md:border md:border-gray-300 text-left block md:table-cell">{event.date}</td>
                <td className="p-2 md:border md:border-gray-300 text-left block md:table-cell">{event.nomville}</td>
                <td className="p-2 md:border md:border-gray-300 text-left block md:table-cell"><Link href={`/events/${event.idevent}`} className="text-blue-500 hover:underline">{`/events/${event.idevent}`}</Link></td>
                <td className="p-2 md:border md:border-gray-300 text-left block md:table-cell">{event.nombre_ticket}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default EventTable;
  