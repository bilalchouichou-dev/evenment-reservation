'use client';
import Image from "next/image";
import Link from "next/link";


function dashboard() {
    return (
        <>
            <header class="bg-gray-800 text-white flex justify-between items-center p-4">
                <div class="text-2xl font-bold">MyDashboard</div>
                <div class="flex items-center space-x-4">
                    <input type="text" placeholder="Search..." class="py-2 px-4 rounded"/>
                    <div class="relative">
                        <img src="user-profile.jpg" alt="User Profile" class="w-10 h-10 rounded-full cursor-pointer"/>
                        <div class="absolute right-0 mt-2 w-48 bg-white text-gray-800 rounded-lg shadow-lg hidden group-hover:block">
                            <a href="#" class="block px-4 py-2 hover:bg-gray-100">Settings</a>
                            <a href="#" class="block px-4 py-2 hover:bg-gray-100">Logout</a>
                        </div>
                    </div>
                </div>
            </header>
            <div class="flex">
                <aside class="bg-gray-100 w-64 p-6 shadow">
                    <nav>
                        <ul>
                            <li class="mb-4"><a href="#" class="text-gray-800 font-semibold hover:text-blue-500">Home</a></li>
                            <li class="mb-4"><a href="#" class="text-gray-800 font-semibold hover:text-blue-500">Profile</a></li>
                            <li class="mb-4"><a href="#" class="text-gray-800 font-semibold hover:text-blue-500">Messages</a></li>
                            <li class="mb-4"><a href="#" class="text-gray-800 font-semibold hover:text-blue-500">Settings</a></li>
                        </ul>
                    </nav>
                </aside>
                <main class="flex-1 p-6">
                    <section class="mb-6">
                        <h2 class="text-2xl font-bold mb-4">User Profile</h2>
                        <p class="mb-2">Name: John Doe</p>
                        <p>Email: john.doe@example.com</p>
                    </section>
                    <section>
                        <h2 class="text-2xl font-bold mb-4">Recent Activities</h2>
                        <ul class="list-disc list-inside">
                            <li>Logged in at 10:00 AM</li>
                            <li>Updated profile at 10:30 AM</li>
                            <li>Sent a message at 11:00 AM</li>
                        </ul>
                    </section>
                </main>
            </div>
            <footer class="bg-gray-800 text-white text-center p-4">
                <p>&copy; 2024 MyDashboard. All rights reserved.</p>
            </footer>
            </>
    )
}
export default dashboard;


