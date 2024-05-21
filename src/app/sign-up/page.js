'use client';
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";


function SignUp() {
    const [isBtnDisabled , setisBtnDisabled] = useState()
    const firstName = useRef()
    const lastName = useRef()
    const username = useRef()
    const password = useRef()
    const confirmPass = useRef()
    const errorLigne = useRef()
    const signUpBtn = useRef()
    
    const changingButtonAppearance = (state) => {
        if(state == 'inactive'){
            signUpBtn.current.classList.remove('hover:bg-indigo-700')
            signUpBtn.current.classList.remove('bg-[#17252A]')
            signUpBtn.current.classList.add('bg-gray-500')
        }else{
            signUpBtn.current.classList.remove('bg-gray-500')
            signUpBtn.current.classList.add('hover:bg-indigo-700')
            signUpBtn.current.classList.add('bg-[#17252A]')
        }
    }
    


    const validationSignUp = () => {
        const namesRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ' -]{1,40}$/
        const usernameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ' -]{8,32}$/
        const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,}$/;
        setisBtnDisabled(true)
        changingButtonAppearance('inactive')
        if(!namesRegex.test(firstName.current.value) ){
            errorLigne.current.innerText = 'your first name must start with alphabetics and less than 40 characters'
        }else if(!namesRegex.test(lastName.current.value) ){
            errorLigne.current.innerText = 'your Last name must start with alphabetics and less than 40 characters'
        }else if(!usernameRegex.test(username.current.value)){
            errorLigne.current.innerText = 'your username must start with alphabetics and between 8 and 32 characters'
        }else if(!passwordRegex.test(password.current.value)){
            errorLigne.current.innerText = 'your password must be longer than 8 and contain numbers plus alphabetics'
        }
        else if(password.current.value != confirmPass.current.value){
            errorLigne.current.innerText = 'your password confirmation doesnt mach youe confirmation'
        }
        else{
            changingButtonAppearance('active')
            errorLigne.current.innerText = ''
            setisBtnDisabled(false)
        }
    }
    const Verification = () => {
        console.log("clicked")
        try {
              const firstNameVal = firstName.current.value;
              const lastNameVal = lastName.current.value;
              const usernameVal = username.current.value;
              const passwordVal = password.current.value;
              const requestBody = JSON.stringify({  firstNameVal,lastNameVal,usernameVal, passwordVal });
              const xhr = new XMLHttpRequest();
              xhr.open('post', '/api/sign-up', true);
              xhr.setRequestHeader('Content-Type', 'application/json');
              xhr.addEventListener("load", () => {
              if (xhr.status != 200) return alert("error" + xhr.response);
              let data = JSON.parse(xhr.response);
              alert(data.message)
              });
              xhr.addEventListener("error", () => {
              alert("error");
              });

              xhr.send(requestBody);              
          }catch (error) {
              console.error('Error fetching data:', error);
            }
    }
    return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="max-w-md w-full p-6 rounded-lg shadow-lg bg-[#3AAFA7]">
                <h2 className="text-center text-3xl font-extrabold text-gray-900">Sign up for an account</h2>
                <div className="flex flex-col mt-8 space-y-6 h-72 justify-evenly">
                <div className="rounded-md shadow-sm -space-y-px">
                    <div>
                        <label htmlFor="first-name" className="sr-only" >First Name</label>
                        <input ref={firstName} onInput={validationSignUp} id="first-name" name="first-name" type="text" autoComplete="prenom" required className="appearance-none rounded-t-xl relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 bg-[#DEF2F1] text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="First Name" />
                    </div>
                    <div>
                        <label htmlFor="last-name" className="sr-only">Last Name</label>
                        <input ref={lastName} onInput={validationSignUp} id="last-name" name="last-name" type="text" autoComplete="nom" required className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 bg-[#DEF2F1] text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Last Name" />
                    </div>
                    <div>
                        <label htmlFor="username" className="sr-only">Email address</label>
                        <input ref={username} onInput={validationSignUp} id="username" name="username" type="text" autoComplete="username" required className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 bg-[#DEF2F1] text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Username" />
                    </div>
                    <div>
                        <label htmlFor="password" className="sr-only">Password</label>
                        <input ref={password} onInput={validationSignUp} id="password" name="password" type="password" autoComplete="new-password" required className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 bg-[#DEF2F1] text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" />
                    </div>
                    <div>
                        <label htmlFor="confirm-password" className="sr-only">confirm Password</label>
                        <input ref={confirmPass} onInput={validationSignUp} id="confirm-password" name="confirm-password" type="password" required className="appearance-none rounded-b-xl relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 bg-[#DEF2F1] text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Confirm Password" />
                    </div>
                </div>
                <div>
                    <button type="button" ref={signUpBtn} onClick={Verification} className="w-full py-2 px-4 bg-[#17252A] hover:bg-indigo-700 text-white font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" disabled={isBtnDisabled}>
                    Sign up
                    </button>
                </div>
                </div>
                <p ref={errorLigne} className=" text-red-600 h-7 text-center font-semibold"> </p>
            </div>
            </div>
    );
}

export default SignUp;



