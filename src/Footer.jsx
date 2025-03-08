import React from 'react';
import { FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="bg-white/20 py-4 my-8 border-t">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center px-4">
        
        {/* Copyright Text */}
        <p className="text-gray-600">© 2025 Company, Inc. All rights reserved.</p>
        
        {/* Social Media Icons */}
        <ul className="flex space-x-4 mt-4 sm:mt-0">
          <li>
            <a
              href="#"
              className="text-gray-600 hover:text-blue-500 transition"
              aria-label="Twitter"
            >
              <FaTwitter size={24} />
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-600 hover:text-pink-500 transition"
              aria-label="Instagram"
            >
              <FaInstagram size={24} />
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-600 hover:text-blue-700 transition"
              aria-label="Facebook"
            >
              <FaFacebook size={24} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
