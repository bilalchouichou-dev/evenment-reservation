'use client';
import Image from "next/image";
import Link from "next/link";
import DashHeader from '@/components/DashboardHeader';
import DashSide from "@/components/AdminDashboardSideBar";
import DonnePersForm from "@/components/PersDonneesForm";
import UserEvent from '@/components/UserEvent';
import ChangementMDPForm from '@/components/ChangementMotDePasse'
import { useRouter , useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import PlainteForm from '@/components/PlainteFrom';
import EventManagement from '@/components/EventManagement';
import AddEventFrom from '@/components/addEventForm';
import { useSession } from "next-auth/react";


function dashboard() {
    const [villeList,setVilleList] = useState(null)
    const [categories,setCategories] = useState(null)
    const router = useRouter()
    useEffect(() => {
        const fetchData = () => {
          fetch("/api/events/villes")
            .then(response => {
              if (!response.ok) {
                throw new Error("Error fetching cities: " + response.statusText);
              }
              return response.json();
            })
            .then(data => {
              setVilleList(data);
            })
            .catch(error => {
              console.error("Error fetching cities:", error);
              alert("Error fetching cities: " + error.message);
            });
    
          fetch("/api/events/categories")
            .then(response => {
              if (!response.ok) {
                throw new Error("Error fetching categories: " + response.statusText);
              }
              return response.json();
            })
            .then(data => {
              setCategories(data);
            })
            .catch(error => {
              console.error("Error fetching categories:", error);
              alert("Error fetching categories: " + error.message);
            });
        };
    
        fetchData();
      }, []);
    const [unauthenticatedMsg,setUnauthenticatedMsg] = useState('')
    const [events,setEvents]=useState(null)
    const { data: session, status} = useSession({
        required: true,
        onUnauthenticated() {
            const timer = setTimeout(() => {
                router.push('/sign-in');
              }, 3000);
        setUnauthenticatedMsg("Tu dois s'authentifier pour accéder à cette page. \n Redirection dans 3 secondes.")
        },
      });
    const [main,setMain] = useState(null)

    useEffect(()=>{
        if(session&&session.user.role == 'user'){
            setUnauthenticatedMsg("les utilisateurs non pas d'accées a cette page. Redirection dans 3 secondes.")
            const timer = setTimeout(() => {
                router.push('/sign-in');
            }, 3000);
        }
    },[session])    
    useEffect(()=>{
        if(session){
            const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            };
            fetch('/api/admin-dashboard/events-management/get-events' , options)
                .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.json();
                })
                .then(data => {
                    setEvents(data)
                })
                .catch(error => {
                    console.error('There was a problem with the fetch operation:', error);
                });
        }
      },[session])
    
    return (
        <>
            {session&&session.user.role == 'admin'?(
                <>
                    <DashHeader DashType={'Admin Dashboard'} session={session}/>
                    <section className="flex min-h-[42rem]">
                        <DashSide setMain={setMain}/>
                        {(!main || main === 'eventManagement') ? (
                          <EventManagement events={events} categories={categories} villes={villeList}/>
                        ) : main === 'eventAdd' ? (
                          <AddEventFrom categories={categories} villes={villeList}/>
                        ) : main === 'plaintes' ? (
                          <PlainteForm session={session}/>
                        ) : main === 'changementMDP' ? ( 
                        <ChangementMDPForm/>
                        ) : null}
                    </section>
                </>
            ):(
                <div className="flex justify-center items-center h-screen">
                    <p className="font-bold text-red-600 text-xl">
                        {unauthenticatedMsg}
                    </p>
                </div>
                
              )
            }    
        </>
    )
}
export default dashboard;


