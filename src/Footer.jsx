import React from 'react';
import { FaTwitter, FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';

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
              className="text-gray-600 hover:text-black transition"
              aria-label="Twitter"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16">
                <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
              </svg>
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
              className="text-gray-600 hover:text-blue-800 transition"
              aria-label="Facebook"
            >
              <FaLinkedin size={24} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
