
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const EventTable = ({session,events,categories,villes}) => {
    const suppDialogRef = useRef()
    const modifDialogRef = useRef()
    const modifTitreRef = useRef()
    const modifPlacesRef = useRef()
    const modifPrixRef = useRef()
    const modifDateRef = useRef()
    const modifLocationRef = useRef()
    const modifVilleRef = useRef()
    const modifCategorieRef = useRef()
    const modifDescriptionRef = useRef()

    const [eventId,setEventId] = useState()
    const [eventToModify,setEventToModify] = useState(null)
    const [count, setCount] = useState(0);

    const refreshPage = () => {
      setCount(prevCount => prevCount + 1);
    };
    const supprimerEvent = (id)=>{
      const deletedEvent = {
          idEvent : id
        };
        
        const options = {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(deletedEvent),
        };
        
        fetch('/api/admin-dashboard/events-management/supprimer-event', options)
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
          })
          .then(data => {
              console.log('Success:', data);

          })
          .catch(error => {
              console.error('There was a problem with the fetch operation:', error);
          });
        refreshPage()
    }
    const modifierEvent = (idevent,titre,places,prix,date,location,ville,categorie,description)=>{
      const updatedEventData = {
          idevent : idevent,
          titre : titre,
          places : places,
          prix : prix,
          date : date,
          location : location,
          ville : ville,
          categorie : categorie,
          description : description
        };
        
        const options = {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updatedEventData),
        };
        
        fetch('/api/admin-dashboard/events-management/change-event', options)
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
          })
          .then(data => {
              console.log('Success:', data);

          })
          .catch(error => {
              console.error('There was a problem with the fetch operation:', error);
          });
          refreshPage()
    }
    

    return (
      <div className="container mx-auto p-4">
        <dialog ref={suppDialogRef}  className="p-5 rounded-md shadow-lg bg-white">
          <h2 className="text-lg font-semibold mb-4">Confirmer la suppression</h2>
          <p>{'Êtes-vous sûr de vouloir supprimer cet élément ?'} </p>
          <div className="mt-4 flex justify-end">
            <button className="bg-red-500 text-white px-4 py-2 rounded mr-2" onClick={()=>{supprimerEvent(eventId);suppDialogRef.current.close()}} >Oui</button>
            <button className="bg-gray-300 text-black px-4 py-2 rounded" onClick={()=>{suppDialogRef.current.close()}}>Non</button>
          </div>
        </dialog>
        <dialog ref={modifDialogRef} onSubmit={(e)=>{e.preventDefault();modifierEvent(eventToModify.idevent,modifTitreRef.current.value,modifPlacesRef.current.value,modifPrixRef.current.value,modifDateRef.current.value,modifLocationRef.current.value,modifVilleRef.current.value,modifCategorieRef.current.value,modifDescriptionRef.current.value)}} className="p-5 rounded-md shadow-lg bg-white max-h-96 min-w-96">
          <h2 className="text-lg font-semibold mb-4">Modifier évènement</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700">Titre</label>
              <input ref={modifTitreRef} type="text" className="w-full p-2 border rounded" defaultValue={eventToModify&&(eventToModify.titre) } required/>
            </div>
            <div>
              <label className="block text-gray-700">Places disponibles</label>
              <input ref={modifPlacesRef} type="number" className="w-full p-2 border rounded" defaultValue={eventToModify&&(eventToModify.places)} required/>
            </div>
            <div>
              <label className="block text-gray-700">Prix</label>
              <input ref={modifPrixRef} type="number" className="w-full p-2 border rounded" defaultValue={eventToModify&&(eventToModify.prix)} required/>
            </div>
            <div>
              <label className="block text-gray-700">Date</label>
              <input ref={modifDateRef} type="date" className="w-full p-2 border rounded" defaultValue={eventToModify&&(eventToModify.date)} required/>
            </div>
            <div>
              <label className="block text-gray-700">Location</label>
              <input ref={modifLocationRef} type="text" className="w-full p-2 border rounded" />
            </div>
            <div>
              <label className="block text-gray-700">Ville</label>
              <select ref={modifVilleRef} className="w-full p-2 border rounded" required>
                  {villes && villes.map((event, index) => (
                    <option key={index} value={event.idville}>{event.nomville}</option>
                  ))}
              </select>
            </div>
            <div>
              <label className="block text-gray-700">Catégorie</label>
              <select ref={modifCategorieRef} className="w-full p-2 border rounded" required>
                {categories && categories.map((event, index) => (
                  <option key={index} value={event.id}>{event.titrecategorie}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-gray-700">Description</label>
              <textarea ref={modifDescriptionRef} className="w-full p-2 border rounded" rows="4" defaultValue={eventToModify&&(eventToModify.description)} ></textarea>
            </div>
            <div className="mt-4 flex justify-end">
              <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded mr-2" onClick={() => {modifDialogRef.current.close()}}>Modifier</button>
              <button type="button" className="bg-gray-300 text-black px-4 py-2 rounded" onClick={() => modifDialogRef.current.close()}>Annuler</button>
            </div>
          </form>
        </dialog>

        <table className="min-w-full border-collapse block md:table">
          <thead className="block md:table-header-group">
            <tr className="border border-gray-200 md:border-none block md:table-row">
              <th className="bg-gray-200 p-2 text-gray-600 font-bold md:border md:border-gray-300 text-left block md:table-cell">Nom de l&apos;événement</th>
              <th className="bg-gray-200 p-2 text-gray-600 font-bold md:border md:border-gray-300 text-left block md:table-cell">Date</th>
              <th className="bg-gray-200 p-2 text-gray-600 font-bold md:border md:border-gray-300 text-left block md:table-cell">Ville</th>
              <th className="bg-gray-200 p-2 text-gray-600 font-bold md:border md:border-gray-300 text-left block md:table-cell">Prix</th>
              <th className="bg-gray-200 p-2 text-gray-600 font-bold md:border md:border-gray-300 text-left block md:table-cell">Nombre De Place</th>
              <th className="bg-gray-200 p-2 text-gray-600 font-bold md:border md:border-gray-300 text-left block md:table-cell">Categorie</th>
              <th className="bg-gray-200 p-2 text-gray-600 font-bold md:border md:border-gray-300 text-left block md:table-cell w-[10%]">Description</th>
              <th className="bg-gray-200 p-2 text-gray-600 font-bold md:border md:border-gray-300 text-left block md:table-cell w-[20%]">Options</th>
            </tr>
          </thead>
          <tbody className="block md:table-row-group text-black">
            {events&&events.map((currentEvent) => (
              <tr id={currentEvent.idevent} key={currentEvent.idevent} className="bg-white border border-gray-200 md:border-none block md:table-row">
                <td className="p-2 md:border md:border-gray-300 text-left block md:table-cell">{currentEvent.titre}</td>
                <td className="p-2 md:border md:border-gray-300 text-left block md:table-cell">{currentEvent.date}</td>
                <td className="p-2 md:border md:border-gray-300 text-left block md:table-cell">{currentEvent.nomville}</td>
                <td className="p-2 md:border md:border-gray-300 text-left block md:table-cell">{currentEvent.prix}</td>
                <td className="p-2 md:border md:border-gray-300 text-left block md:table-cell">{currentEvent.places}</td>
                <td className="p-2 md:border md:border-gray-300 text-left block md:table-cell">{currentEvent.titrecategorie}</td>
                <td className="p-2 md:border md:border-gray-300 text-left block md:table-cell">{(currentEvent.description&&currentEvent.description.length > 100 )?(currentEvent.description.slice(0,100) + ' ...'):currentEvent.description}</td>
                <td className="p-2 md:border md:border-gray-300 text-left block md:table-cell"><button className="bg-blue-300 text-white px-4 py-2 rounded mr-2 mb-2" onClick={() =>{setEventToModify(currentEvent);modifDialogRef.current.showModal()}}>Modifier</button><button className="bg-red-300 text-white px-4 py-2 rounded" onClick={()=>{setEventId(currentEvent.idevent);suppDialogRef.current.showModal();}}>Supprimer</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default EventTable;
  