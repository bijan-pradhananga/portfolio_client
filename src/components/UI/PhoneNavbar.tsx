'use client'
import { useState } from "react";

interface NavLinkProps {
    isMenuOpen?: boolean,
    toggleMenu: () => void
}

const PhoneNavbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <HamButton toggleMenu={toggleMenu} />
            <PhoneNavLink isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        </>

    )
}

const HamButton = ({ toggleMenu }: NavLinkProps) => {
    return (
        <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            onClick={toggleMenu}
        >
            <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
            >
                <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M1 1h15M1 7h15M1 13h15"
                />
            </svg>
        </button>
    )
}

const PhoneNavLink = ({ isMenuOpen, toggleMenu }: NavLinkProps) => {
    return (
        <div
            className={`${isMenuOpen ? 'translate-x-0' : '-translate-x-full'
                } fixed top-0 left-0 w-full h-full bg-gray-50 dark:bg-gray-900 bg-opacity-95 z-30 transition-transform duration-500 ease-in-out`}
        >
            {/* Close Button (X) */}
            <button
                type="button"
                className="absolute top-5 right-5 text-black dark:text-white w-10 h-10 flex justify-center items-center rounded hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400"
                onClick={toggleMenu}
            >
                <span className="sr-only">Close menu</span>
                <svg
                    className="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                    />
                </svg>
            </button>

            <ul className="flex flex-col justify-center items-center h-full space-y-8 dark:text-white text-2xl font-semibold">
                <li>
                    <a href="#" className="hover:text-blue-500 transition-colors duration-300">
                        Home
                    </a>
                </li>
                <li>
                    <a href="#" className="hover:text-blue-500 transition-colors duration-300">
                        About
                    </a>
                </li>
                <li>
                    <a href="#skills" className="hover:text-blue-500 transition-colors duration-300">
                        Skills
                    </a>
                </li>
                <li>
                    <a href="#" className="hover:text-blue-500 transition-colors duration-300">
                        Projects
                    </a>
                </li>
                <li>
                    <a href="#" className="hover:text-blue-500 transition-colors duration-300">
                        Contact
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default PhoneNavbar