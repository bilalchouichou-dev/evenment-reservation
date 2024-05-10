'use client';

import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSliders } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useRef, useState } from "react";


function EventsBar() {

  const [villeList,setVilleList] = useState(null)
  const [categories,setCategories] = useState(null)
  const dateRef = useRef();
  const prixRef = useRef();
  const villeRef = useRef();
  const categorieRef = useRef();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const villeXhr = new XMLHttpRequest();
        villeXhr.open("get", "/api/events/villes", true);
        villeXhr.addEventListener("load", () => {
          if (villeXhr.status !== 200) return alert("Error fetching cities: " + villeXhr.response);
          const villeData = JSON.parse(villeXhr.response);
          setVilleList(villeData);
        });
        villeXhr.addEventListener("error", () => {
          alert("Error fetching cities");
        });
        villeXhr.send();
  

        const categoriesXhr = new XMLHttpRequest();
        categoriesXhr.open("get", "/api/events/categories", true);
        categoriesXhr.addEventListener("load", () => {
          if (categoriesXhr.status !== 200) return alert("Error fetching categories: " + categoriesXhr.response);
          const categoriesData = JSON.parse(categoriesXhr.response);
          setCategories(categoriesData);
        });
        categoriesXhr.addEventListener("error", () => {
          alert("Error fetching categories");
        });
        categoriesXhr.send();
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    fetchData();
  }, []);
  const filtering = async ()=>{
    date=dateRef.current.value
    prix=prixRef.current.value
    ville=villeRef.current.value
    categorie=categorieRef.current.value
    if(date!= '' || prix!= '' || ville!='' || categorie!=''){
      try {
        const villeXhr = new XMLHttpRequest();
        villeXhr.open("get", "/api/events/filter" + "?date=" + date +"&prix=" + prix + "&ville=" + ville + "&categorie=" + categorie, true);
        villeXhr.addEventListener("load", () => {
          if (villeXhr.status !== 200) return alert("Error fetching cities: " + villeXhr.response);
          const villeData = JSON.parse(villeXhr.response);
          setVilleList(villeData);
        });
        villeXhr.addEventListener("error", () => {
          alert("Error fetching cities");
        });
        villeXhr.send();
  
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
  }
  return (
    <aside className="flex flex-col min-h-screen w-1/5 p-5 border-r-4 text-black">
      <div className=" flex flex-row  gap-4 mb-5">
        <FontAwesomeIcon icon={faSliders} className=" h-6 w-6"/>
        <span className=" text-xl font-semibold">filtrer</span>
      </div>
      <div className="flex flex-col gap-6">
        <div>
          <label for="date" className=" text-xl mb-4">Date:</label>
          <input ref={dateRef} id="date" name="date" type="date" className="w-full px-3 py-2 border border-gray-300 rounded-lg placeholder-gray-500 bg-[#DEF2F1] text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Date" />
        </div>
        <div>
          <label for="prix" className=" text-xl">Prix:</label>
          <input ref={prixRef} id="prix" name="prix" min={1} type="number" className="w-full px-3 py-2 border border-gray-300 rounded-lg placeholder-gray-500 bg-[#DEF2F1] text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="prix" />
        </div>
        <div>
          <label for="ville" className=" text-xl">Ville:</label>
          <select ref={villeRef} id="ville" className="w-full px-3 py-2 border border-gray-300 rounded-lg placeholder-gray-500 bg-[#DEF2F1] text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="ville">
              {villeList && villeList.map((event, index) => (
                <option value={event.nomville}>{event.nomville}</option>
              ))}
              <option value="" selected></option>
          </select>
        </div>
        <div>
        <label for="categorie" className=" text-xl ">Catégorie :</label>
          <select ref={categorieRef} id="categorie" className="w-full px-3 py-2 border border-gray-300 rounded-lg placeholder-gray-500 bg-[#DEF2F1] text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="categorie">
              {categories && categories.map((event, index) => (
                <option value={event.titrecategorie}>{event.titrecategorie}</option>
              ))}
              <option value="" selected></option>
          </select>
        </div>
        <button id="filtrer" className="bg-[#17252A] p-3 rounded-lg text-white hover:bg-yellow-400 hover:text-black mt-8">filtrer</button>
      </div>
    </aside>
  );
}

export default EventsBar;