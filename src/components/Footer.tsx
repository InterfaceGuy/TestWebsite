import React from 'react';
import { Instagram, Mail, Facebook, Youtube, ChevronDown } from 'lucide-react'; // Added ChevronDown to import

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-gray-300 py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1: Logo and Description */}
        <div>
          {/* Placeholder for Logo */}
          <img src="/path/to/your/logo.png" alt="Youth In The World Logo" className="h-10 w-auto mb-4" />
          <p className="text-sm mb-4">
            We share and promote volunteering and international mobility activities that promote learning and social transformation
          </p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white transition-colors duration-200"><Instagram size={20} /></a>
            <a href="#" className="hover:text-white transition-colors duration-200"><Mail size={20} /></a>
            <a href="#" className="hover:text-white transition-colors duration-200"><Facebook size={20} /></a>
            <a href="#" className="hover:text-white transition-colors duration-200"><Youtube size={20} /></a>
          </div>
        </div>

        {/* Column 2: Start Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Start</h3>
          <ul>
            <li className="mb-2"><a href="#" className="hover:text-white transition-colors duration-200">Opportunities at OMSN</a></li>
            <li className="mb-2"><a href="#" className="hover:text-white transition-colors duration-200">European Solidarity Corps</a></li>
            <li className="mb-2"><a href="#" className="hover:text-white transition-colors duration-200">Youth exchanges</a></li>
            <li className="mb-2"><a href="#" className="hover:text-white transition-colors duration-200">Youth Technicians Mobility</a></li>
          </ul>
        </div>

        {/* Column 3: Resources & Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
          <ul>
            <li className="mb-2"><a href="#" className="hover:text-white transition-colors duration-200">About us</a></li>
            <li className="mb-2"><a href="#" className="hover:text-white transition-colors duration-200">Blog</a></li>
            <li className="mb-2"><a href="#" className="hover:text-white transition-colors duration-200">Contact</a></li>
          </ul>
           {/* Placeholder for Contact Form */}
           <div className="mt-8">
             <h3 className="text-lg font-semibold text-white mb-4">Contact Form (Placeholder)</h3>
             {/* Form elements would go here */}
           </div>
        </div>
      </div>
       {/* Language Selector Placeholder */}
       <div className="mt-8 text-center text-sm">
         {/* Language selector goes here */}
         <p>Language: EN <ChevronDown className="inline-block h-4 w-4 ml-1" /></p>
       </div>
    </footer>
  );
};

export default Footer;
