'use client';

import { useSession } from "next-auth/react";
import { useRef, useState } from "react";

function Form({session}) {
    const prenomRef = useRef()
    const nomRef = useRef()
    const usernameRef = useRef()
    const feedbackRef = useRef()
    const [feedback,setFeedback] = useState()

    const changerDonner = (e)=>{
        e.preventDefault()
        const updatedUserData = {
            username: usernameRef.current.value,
            nom: nomRef.current.value,
            prenom: prenomRef.current.value,
          };
          
          const options = {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedUserData), 
          };
          
          fetch('/api/user-dashboard/changer-infos', options)
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
                console.log('Success:', data);

            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
                feedbackRef.current.classList.remove('text-green-600')
                feedbackRef.current.classList.add('text-red-600')
                setFeedback('infos fourni non valide')
            });
    }
    return (
        <form className="flex justify-center bg-white p-8 rounded-lg w-[80%]" onSubmit={(e)=>{changerDonner(e)}}>
            <div className="w-[70%]">
                <div className="mb-4">
                    <label htmlFor="nom" className="block text-gray-700 text-sm font-medium mb-2">Nom</label>
                    <input ref={nomRef} type="text" id="nom" name="nom" className="shadow-sm appearance-none border border-gray-300 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Votre nom" required defaultValue={session&&session.user.nom}/>
                </div>
                <div className="mb-4">
                    <label htmlFor="prenom" className="block text-gray-700 text-sm font-medium mb-2">Prénom</label>
                    <input ref={prenomRef} type="text" id="prenom" name="prenom" className="shadow-sm appearance-none border border-gray-300 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Votre prénom" required defaultValue={session&&session.user.prenom}/>
                </div>
                <div className="mb-4">
                    <label htmlFor="username" className="block text-gray-700 text-sm font-medium mb-2">Nom d'utilisateur</label>
                    <input ref={usernameRef} type="text" id="username" name="username" className="shadow-sm appearance-none border border-gray-300 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Votre nom d'utilisateur" required defaultValue={session&&session.user.username}/>
                </div>
                <div className="flex items-center justify-center gap-6">
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">Changer Vouz donner</button>
                    <button type="reset" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">Réinitialiser</button>
                </div>
                <p className='font-semibold text-center text-lg p-4' ref={feedbackRef}>{feedback}</p>
            </div>
        </form>
    );
  }
  
  export default Form;