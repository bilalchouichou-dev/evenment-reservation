'use client';
import Image from "next/image";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";


function SignIn() {
  const usernameRef = useRef()
  const passwordRef = useRef()
  const errorLigne = useRef()
  const router = useRouter()
  const handleSubmit = async (e) => {
    errorLigne.current.innerText = '';
    e.preventDefault();
    const res = await signIn("credentials", {
      username: usernameRef.current.value,
      password: passwordRef.current.value,
      redirect: false,
    });
    if(res.status===200){
      errorLigne.current.classList.remove('text-red-700')
      errorLigne.current.classList.add('text-green-700')
      errorLigne.current.innerText = 'vous êtes maintenant connecter avec succès !'
      setTimeout(()=>{router.back()},1000)
    }else{
      errorLigne.current.classList.remove('text-green-700')
      errorLigne.current.classList.add('text-red-700')
      errorLigne.current.innerText = 'Les identifiants fournis sont incorrects. Veuillez réessayer.'
    }
    console.log(res);
  };


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full p-6 rounded-lg shadow-lg bg-[#3AAFA7]">
        <h2 className="text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
        <form onSubmit={handleSubmit} className="flex flex-col mt-8 space-y-6 h-72 justify-evenly">
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="username" className="sr-only">Username</label>
              <input id="username" ref={usernameRef} name="username" type="username" autoComplete="username" required className="appearance-none rounded-t-xl relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 bg-[#DEF2F1] text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Username"  />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <input id="password" ref={passwordRef} name="password" type="password" autoComplete="current-password" required className="appearance-none rounded-b-xl relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 bg-[#DEF2F1] text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password"  />
            </div>
          </div>

          <div>
            <button type="submit" className="w-full py-2 px-4 bg-[#17252A] hover:bg-indigo-700 text-white font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Sign in
            </button>
          </div>
        </form>
        <p ref={errorLigne} className="h-7 text-center font-semibold mb-4"> </p>
      </div>
    </div>
  );
}

export default SignIn;