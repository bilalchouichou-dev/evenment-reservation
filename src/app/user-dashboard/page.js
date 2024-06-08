'use client';
import Image from "next/image";
import Link from "next/link";
import DashHeader from '@/components/DashboardHeader';
import DashSide from "@/components/DashboardSideBar";
import DonnePersForm from "@/components/PersDonneesForm";
import UserEvent from '@/components/UserEvent';
import ChangementMDPForm from '@/components/ChangementMotDePasse'
import { useRouter , useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import PlainteForm from '@/components/PlainteFrom';
import { useSession } from "next-auth/react";


function dashboard() {
    const router = useRouter();
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
        if(session&&session.user.role == 'admin'){
            setUnauthenticatedMsg("les admins non pas d'accées a cette page. Redirection dans 3 secondes.")
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
            fetch('/api/user-dashboard/reserved-events?iduser='+session.user.id , options)
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
            {session&&session.user.role == 'user'?(
                <>
                    <DashHeader DashType={'User Dashboard'} session={session}/>
                    <section className="flex h-[42rem]">
                        <DashSide setMain={setMain}/>
                        {(!main || main === 'donnePers') ? (
                        <DonnePersForm session={session}/>
                        ) : main === 'resEvent' ? (
                        <UserEvent session={session} events={events}/>
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


