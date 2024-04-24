import Image from "next/image";
import Link from "next/link";


function SignUp() {
  return (
    
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-md w-full p-6 rounded-lg shadow-lg bg-[#3AAFA7]">
            <h2 className="text-center text-3xl font-extrabold text-gray-900">Sign up for an account</h2>
            <form className="flex flex-col mt-8 space-y-6 h-72 justify-evenly">
            <div className="rounded-md shadow-sm -space-y-px">
                <div>
                    <label htmlFor="name" className="sr-only">Name</label>
                    <input id="name" name="name" type="text" autoComplete="name" required className="appearance-none rounded-t-xl relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 bg-[#DEF2F1] text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Name" />
                </div>
                <div>
                    <label htmlFor="email" className="sr-only">Email address</label>
                    <input id="email" name="email" type="email" autoComplete="email" required className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 bg-[#DEF2F1] text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address" />
                </div>
                <div>
                    <label htmlFor="password" className="sr-only">Password</label>
                    <input id="password" name="password" type="password" autoComplete="new-password" required className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 bg-[#DEF2F1] text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" />
                </div>
                <div>
                <label htmlFor="confirm-password" className="sr-only">Password</label>
                <input id="confirm-password" name="confirm-password" type="confirm-password" required className="appearance-none rounded-b-xl relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 bg-[#DEF2F1] text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Confirm Password" />
                </div>
            </div>

            <div>
                <button type="submit" className="w-full py-2 px-4 bg-[#17252A] hover:bg-indigo-700 text-white font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Sign up
                </button>
            </div>
            </form>
        </div>
        </div>
  );
}

export default SignUp;



