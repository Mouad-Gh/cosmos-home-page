import { useState } from "react";

import {FaTelegramPlane , FaDiscord , FaTwitter} from 'react-icons/fa';

const Navbar = () => {

    const [menuOpen,setMenuOpen] = useState(false);

    const toggleClick = () => {
        if(window.innerWidth<768){
          setMenuOpen(!menuOpen);
        }
        
      }

    return ( 
    <header className="relative h-20 p-4 text-white" aria-label="primary navigation" >
        <div className="flex relative">

        <div className="flex ">
           <a className=" " href="#"> <img src="ApeLogo.png" alt="logo" className="h-10  object-cover"   /></a>
        </div>

        <ul className={`absolute top-[70px] left-0 right-0 md:inset-0 md:relative w-full h-[calc(100vh-70px)] md:h-auto z-50 bg-noir md:bg-transparent self-center flex flex-col md:flex-row justify-center items-center uppercase     gap-y-5 gap-x-3 ${menuOpen? "translate-x-0" : "-translate-x-full"}  md:translate-x-0 ease-in-out duration-300`} >
          <li className="text-xl ml-0 font-bold  "><a href="#" className="p-1 focus:outline-none focus-visible:ring-4 ring-rose rounded-full pb-3 selected">Holders</a></li>
          <li className="text-xl font-bold"><a href="#" className="p-1 focus:outline-none focus-visible:ring-4 ring-rose rounded-full pb-3 selected">Rarity</a></li>
          <li className="text-xl font-bold"><a href="#" className="p-1 focus:outline-none focus-visible:ring-4 ring-rose rounded-full pb-3 selected">Activity</a></li>
        
            <li className="pb-3 relative md:absolute right-1 inline-flex">
                <a href="f" className="px-1 lg:px-3 "><FaTwitter size={24} className='cursor-pointer hover:text-[#ff0032] ' /></a>
                <a href="f" className="px-1 lg:px-3 "><FaTelegramPlane size={24} className='cursor-pointer hover:text-[#ff0032] ' /></a>
                <a href="f" className="px-1 lg:px-3"><FaDiscord size={24}  className=" cursor-pointer hover:text-[#ff0032]" /></a>
            </li>
        </ul>

        

        { !menuOpen && <button className="absolute right-1 top-1 md:hidden" onClick={toggleClick} id="open">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><line x1="40" y1="128" x2="216" y2="128" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><line x1="40" y1="64" x2="216" y2="64" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><line x1="40" y1="192" x2="216" y2="192" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line></svg>
        </button>}
        { menuOpen && <button className="absolute right-1 top-1  md:hidden"  id="close" onClick={toggleClick}>
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><line x1="200" y1="56" x2="56" y2="200" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><line x1="200" y1="200" x2="56" y2="56" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line></svg>      
        </button>}
        
        </div>


    </header> );
}
 
export default Navbar;