'use client'
import Link from "next/link";
import ThemeChanger from "./DarkSwitch";
import { Disclosure } from "@headlessui/react";
import Logo from "../public/img/logo.png";
import Image from 'next/image';
import { useEffect, useState } from "react";

export default function Navbar() {
  const navigation = ["Home", "About Us", "Privacy Policy"];
  const [isScrolled, setIsScrolled] = useState(false);

   // Efek untuk menambahkan event listener scroll
   useEffect(() => {
    console.log("scroll",window.scrollY)
    const handleScroll = () => {
      if (window.scrollY > 50) { // Jika scroll lebih dari 50px
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Cleanup event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
   
      <nav className={`${isScrolled ? 'bg-white shadow-md' : ''} sticky top-0 z-50  flex flex-wrap items-center justify-between py-3 px-8 w-full`}>
        {/* Logo  */}
        <Disclosure>
          {({ open }) => (
            <>
              <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
              
                  <a className="flex items-center space-x-2 text-2xl font-medium text-green-500 dark:text-gray-100">
                    <span>
                    <Image
                    className="w-auto h-auto max-w-full aspect-auto"
                    src={Logo}
                    alt="Logo"
                    width={35} // Replace with your desired width
                    height={35} // Replace with your desired height
                    priority // Ensures the logo loads quickly
                    layout="fixed"
                  />
                    </span>
                    <span className="text-2xl font-medium text-black">Majelis Sabilul Khairaat</span>
                  </a>
              

                <Disclosure.Button
                  aria-label="Toggle Menu"
                  className="px-2 py-1 ml-auto text-gray-500 rounded-md lg:hidden hover:text-green-500 focus:text-green-500 focus:bg-green-100 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700">
                  <svg
                    className="w-6 h-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24">
                    {open && (
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                      />
                    )}
                    {!open && (
                      <path
                        fillRule="evenodd"
                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                      />
                    )}
                  </svg>
                </Disclosure.Button>

                <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden">
                  <>
                    {navigation.map((item, index) => (
                    
                        <a href={`#${item}`} className="w-full px-4 py-2 -ml-4 text-black rounded-md hover:text-green-500 focus:text-green-500 focus:outline-none">
                          {item}
                        </a>
                    
                    ))}
                  
        
                    
                  </>
                </Disclosure.Panel>
              </div>
            </>
          )}
        </Disclosure>

        {/* menu  */}
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className=" items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {navigation.map((menu, index) => (
              <li className="mr-3 nav__item" key={index}>
             
                  <a href={`#${menu}`} className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md hover:text-green-500 focus:text-green-500 focus:bg-green-100 focus:outline-none">
                    {menu}
                  </a>
                
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden mr-3 space-x-3 lg:flex nav__item">
        
          
         

          {/* <ThemeChanger /> */}
        </div>
      </nav>
  );
}
