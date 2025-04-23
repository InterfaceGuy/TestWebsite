import React from 'react';
import { ChevronDown } from 'lucide-react'; // Using ChevronDown for dropdowns

const Header: React.FC = () => {
  return (
    <header className="bg-transparent absolute top-0 left-0 right-0 z-50 text-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          {/* Placeholder for Logo - replace with actual logo image if available */}
          <img src="/path/to/your/logo.png" alt="Youth In The World Logo" className="h-10 w-auto mr-2" />
          <span className="text-xl font-bold">Youth In The World</span>
        </div>
        <nav className="hidden md:flex space-x-6 items-center">
          <a href="#" className="hover:text-gray-300 transition-colors duration-200">Opportunities <ChevronDown className="inline-block h-4 w-4 ml-1" /></a>
          <a href="#" className="hover:text-gray-300 transition-colors duration-200">Resources</a>
          <a href="#" className="hover:text-gray-300 transition-colors duration-200">Blog</a>
          <a href="#" className="hover:text-gray-300 transition-colors duration-200">About Us</a>
          <a href="#" className="hover:text-gray-300 transition-colors duration-200">Contacts</a>
        </nav>
        <button className="md:hidden text-white hover:text-gray-300 focus:outline-none">
          {/* Mobile menu icon */}
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
