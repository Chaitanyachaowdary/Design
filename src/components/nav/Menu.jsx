import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { Home, Info, Newspaper, Mail, Globe } from "lucide-react";

export default function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate=useNavigate()
  

  return (
    <div className="fixed bottom-10 right-10 z-50 text-black w-[200px] animate-fade-in reveal delay-5">
      <div className="bg-gray-100 rounded shadow">
        {/* Menu Toggle */}
        <div className="flex items-center border-b border-black">
          <button
            className="flex items-center justify-between w-full px-4 py-2 text-lg font-medium"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            Menu
            <span className="ml-4 text-xl">{menuOpen ? "\u2715" : "+"}</span>
          </button>
        </div>

        

        {/* Slide-up Menu Items */}
        {menuOpen && (
          <div className="bg-white border-t border-black">
            <ul className="divide-y divide-black">
              <Link to={"/"} className="px-4 py-2 flex items-center hover:bg-gray-300">
               Home
              </Link>
              <Link to={"/about"} className="px-4 py-2 flex items-center hover:bg-gray-300">
                About
              </Link>
              <Link to={"/latest"} className="px-4 py-2 flex items-center hover:bg-gray-300">
                Latest
              </Link>
              <Link to={"/contact"} className="px-4 py-2 flex items-center hover:bg-gray-300">
                Contact
              </Link>
              <l className="px-4 py-2 flex items-center hover:bg-gray-300"  >
                Choose Global Chapter
              </l>
            </ul>
          </div>
        )}
     

        {/* Declare Now Always Visible */}
        <div className="border-t border-black ">
          <button className="w-full px-4 py-2 text-lg font-medium hover:bg-gray-300 text-left" onClick={()=>navigate('/', { state: { scrollTo: '#declare' } })} >
            Declare Now
          </button>
        </div>
      </div>
    </div>
    
  );
  
}
