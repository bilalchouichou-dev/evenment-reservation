'use client';

import { useSession } from "next-auth/react";
import { useRef, useState } from "react";

function FormMDP({session}) {
    const ancienMotPasseRef = useRef()
    const nouvMotPAsseRef = useRef()
    const confirmerNouvMotPasseRef = useRef()
    const feedbackRef = useRef()
    const [feedback,setFeedback] = useState()

    const formValidation = ()=>{
      feedbackRef.current.classList.remove('text-green-600')
      feedbackRef.current.classList.add('text-red-600')
      const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,32}$/;
      if(!passwordRegex.test(ancienMotPasseRef.current.value)){
        setFeedback('ancien mot de passe doit respect la pattern')
        return false
      }else if(!passwordRegex.test(nouvMotPAsseRef.current.value)){
        setFeedback('nouveau mot de passe doit respect la pattern')
        return false
      }else if(nouvMotPAsseRef.current.value != confirmerNouvMotPasseRef.current.value){
        setFeedback('Le nouveau mot de passe et la confirmation ne sont pas égaux')
        return false
      }
      feedbackRef.current.classList.remove('text-red-600')
      feedbackRef.current.classList.add('text-green-600')
      return true
    }
    const changerMotPasse = (e)=>{
        setFeedback('')
        e.preventDefault()
        if(!formValidation()){
          return null
        }
        const changedMotPasse = {
            ancienMDP: ancienMotPasseRef.current.value,
            nouveauMDP: nouvMotPAsseRef.current.value,
          };
          
          const options = {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(changedMotPasse), 
          };
          
          fetch('/api/user-dashboard/changer-MDP', options)
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
          <form className="flex justify-center bg-white p-8 rounded-lg w-[80%]" onSubmit={(e)=>{changerMotPasse(e)}}>
          <div className="w-[70%]">
              <div className="mb-4">
                  <label htmlFor="ancienMotDePasse" className="block text-gray-700 text-sm font-medium mb-2">Ancien mot de passe</label>
                  <input ref={ancienMotPasseRef} type="password" id="ancienMotDePasse" name="ancienMotDePasse" className="shadow-sm appearance-none border border-gray-300 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Votre ancien mot de passe" required />
              </div>
              <div className="mb-4">
                  <label htmlFor="nouveauMotDePasse" className="block text-gray-700 text-sm font-medium mb-2">Nouveau mot de passe</label>
                  <input ref={nouvMotPAsseRef} type="password" id="nouveauMotDePasse" name="nouveauMotDePasse" className="shadow-sm appearance-none border border-gray-300 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Votre nouveau mot de passe" required />
              </div>
              <div className="mb-4">
                  <label htmlFor="confirmerNouveauMotDePasse" className="block text-gray-700 text-sm font-medium mb-2">Confirmer nouveau mot de passe</label>
                  <input ref={confirmerNouvMotPasseRef} type="password" id="confirmerNouveauMotDePasse" name="confirmerNouveauMotDePasse" className="shadow-sm appearance-none border border-gray-300 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Confirmer nouveau mot de passe" required />
              </div>
              <div className="flex items-center justify-center gap-6">
                  <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">Changer mot de passe</button>
                  <button type="reset" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">Réinitialiser</button>
              </div>
              <p className='font-semibold text-center text-lg p-4' ref={feedbackRef}>{feedback}</p>
          </div>
          </form>
      
    );
  }
  
  export default FormMDP;