'use client';

import { useSession } from "next-auth/react";
import { useRef, useState } from "react";

function Form({session,categories,villes }) {
    const placesRef = useRef()
    const prixRef = useRef()
    const feedbackRef = useRef()
    const titreRef = useRef()
    const dateRef = useRef()
    const locationRef = useRef()
    const idvilleRef = useRef()
    const idcategorieRef = useRef()
    const descriptionRef = useRef()
    const [feedback,setFeedback] = useState()

    const changerDonner = (e,titre,prix,places,date,location,ville,categorie,description)=>{
        e.preventDefault()
        const addedEvent = {
            titre: titre,
            prix: prix,
            places: places,
            date: date,
            location: location,
            ville: ville,
            categorie: categorie,
            description: description
          };
          
          const options = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(addedEvent), 
          };
          
          fetch('/api/admin-dashboard/events-management/add-event', options)
            .then(response => {
              if (!response.ok) {
                feedbackRef.current.classList.remove('text-green-600')
                feedbackRef.current.classList.add('text-red-600')
                (response.status == 400&&setFeedback('infos fourni non valide'))
                throw new Error('Network response was not ok ' + response.statusText);
              }
              return response.json();
            })
            .then(data => {
                feedbackRef.current.classList.remove('text-red-600')
                feedbackRef.current.classList.add('text-green-600')
                setFeedback(data.message)
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
                feedbackRef.current.classList.remove('text-green-600')
                feedbackRef.current.classList.add('text-red-600')
                setFeedback('infos fourni non valide')
            });
    }
    return (
      <form className="flex justify-center bg-white p-8 rounded-lg w-[80%]" onSubmit={(e)=>{changerDonner(e,titreRef.current.value,prixRef.current.value,placesRef.current.value,dateRef.current.value,locationRef.current.value,idvilleRef.current.value,idcategorieRef.current.value,descriptionRef.current.value)}}>
      <div className="w-[70%]">
        <div className="mb-4">
          <label htmlFor="titre" className="block text-gray-700 text-sm font-medium mb-2">Titre</label>
          <input ref={titreRef} type="text" id="titre" name="titre" className="shadow-sm appearance-none border border-gray-300 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="titre" required defaultValue={session && session.user.nom} />
        </div>
        <div className="mb-4">
          <label htmlFor="places" className="block text-gray-700 text-sm font-medium mb-2">Places</label>
          <input ref={placesRef} type="text" id="places" name="places" className="shadow-sm appearance-none border border-gray-300 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="places" required defaultValue={session && session.user.places} />
        </div>
        <div className="mb-4">
          <label htmlFor="prix" className="block text-gray-700 text-sm font-medium mb-2">Prix</label>
          <input ref={prixRef} type="text" id="prix" name="prix" className="shadow-sm appearance-none border border-gray-300 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="prix" required defaultValue={session && session.user.prix} />
        </div>
        <div className="mb-4">
          <label htmlFor="date" className="block text-gray-700 text-sm font-medium mb-2">Date</label>
          <input ref={dateRef} type="date" id="date" name="date" className="shadow-sm appearance-none border border-gray-300 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" required defaultValue={session && session.user.date} />
        </div>
        <div className="mb-4">
          <label htmlFor="location" className="block text-gray-700 text-sm font-medium mb-2">Location</label>
          <input ref={locationRef} type="text" id="location" name="location" className="shadow-sm appearance-none border border-gray-300 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="location" required defaultValue={session && session.user.location} />
        </div>
        <div className="mb-4">
          <label htmlFor="idville" className="block text-gray-700 text-sm font-medium mb-2">Ville</label>
          <select ref={idvilleRef} id="idville" name="idville" className="shadow-sm appearance-none border border-gray-300 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" required>
            {villes && villes.map((ville, index) => (
              <option key={index} value={ville.idville}>{ville.nomville}</option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="idcategorie" className="block text-gray-700 text-sm font-medium mb-2">Catégorie</label>
          <select ref={idcategorieRef} id="idcategorie" name="idcategorie" className="shadow-sm appearance-none border border-gray-300 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" required>
            {categories && categories.map((categorie, index) => (
              <option key={index} value={categorie.id}>{categorie.titrecategorie}</option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700 text-sm font-medium mb-2">Description</label>
          <textarea ref={descriptionRef} id="description" name="description" className="shadow-sm appearance-none border border-gray-300 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" rows="4" placeholder="description" required defaultValue={session && session.user.description}></textarea>
        </div>
        <div className="flex items-center justify-center gap-6">
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">Ajouter L'événement</button>
          <button type="reset" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">Réinitialiser</button>
        </div>
        <p className='font-semibold text-center text-lg p-4' ref={feedbackRef}>{feedback}</p>
      </div>
    </form>
    );
  }
  
  export default Form;