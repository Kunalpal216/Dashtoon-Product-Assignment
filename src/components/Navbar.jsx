import { Link, Outlet } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { onSubmitClick } from "../redux/comicPanelSlice";
import { ToastContainer } from "react-toastify";

export default function Navbar() {
    return <>
        <ToastContainer />
        <nav class="bg-white border-gray-200 dark:bg-gray-900">
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
                <img src="logo.png" class="h-16" alt="Flowbite Logo" />
                    <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Nasty Comics</span>
                </a>
                {/* <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button> */}
                <div class="block w-auto" id="navbar-default">
                    <ul class="font-medium flex p-2 md:p-0 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 dark:bg-gray-900 dark:border-gray-900">
                        <li>
                            <Link to="/" class="block py-2 px-2 text-white rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</Link>
                        </li>
                        <li>
                            <Link to="/comic-strip" class="block py-2 x-2 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Create</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <Outlet />
    </>;
}