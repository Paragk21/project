import {Menu,X} from "lucide-react";
import {useState} from "react";
import React from 'react';
import logo from '../assets/logo.png'; // Corrected import statement
import { navItems } from '../constants';

const Navbar = () => {
    const [mobileDrawerOpen,setMobileDrawerOpen] = useState(false);

        const toggleNavbar = () =>{
            setMobileDrawerOpen(!mobileDrawerOpen);
        }
return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
        <div className="container px-4 mx-auto relative text-sm">
            <div className="flex justify-between item-center">
                <div className="flex items-center flex-shrink-0">
                    <img className='h-10 w-10 mr-2' src={logo} alt="logo" />
                    <span className="text-xl tracking-tight">VirtualR</span>
                </div>
                {/* Desktop Nav */}
                <ul className='hidden lg:flex ml-14 space-x-12' >
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <a href={item.href}className="hover:underline">{item.label}
                            </a>
                        </li>
                    ))}
                </ul>
                <div className="hidden lg:flex justify-center space-x-6 items-center">
                    <a href="#" className='py-2 px-3 border rounded-md hover:bg-neutral-700'>
                        Sign In
                    </a>
                    <a href="#" className="py-2 px-3 bg-gradient-to-r from-violet-500 to-violet-800 text-white rounded-md hover:from-violet-600 hover:to-violet-900">Create an account</a>
                </div>
                {/* Mobile Drawer */}
                <div className="lg:hidden md-flex flex-col justify-end">
                    <button onClick={toggleNavbar} aria-label="Toggle menu" >
                        {mobileDrawerOpen ? <X /> : <Menu/>}
                    </button>
                </div>
            </div>
            {mobileDrawerOpen && (
                <div className="fixed right-0 z-20 bg-neutral-900 bg-opacity-80 w-full p-12 felx-col justify-center items-center lg:hidden">
                    <ul>
                        {navItems.map((item, index) => (
                            <li key={index} className="py-4" >
                                <a href={item.href} className="block py-2 text-center hover:underline">{item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <div className="flex space-x-6">
                        <a href="#" className="py-2 px-3 border rounded-md" >
                            Sign In
                        </a>
                        <a href="#" className="py-2 px-3 bg-gradient-to-r from-violet-500 to-violet-800 text-white rounded-md">Create an account</a>
                    </div>
                </div>
            )}
        </div>
    </nav>
  );
}

export default Navbar;
