import React ,{ useState } from 'react'

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  return (
    <div>
      <nav className="bg-body-tertiary fixed top-0 left-0 right-0 shadow-md z-50">
        <div className="container mx-auto px-4 flex items-center justify-between h-16">
          <a href="#" className="text-white text-xl font-bold"> <img src='/Dailelogo.png' className='h-20'/> </a>
          <button
            className="text-white lg:hidden"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
          <div className="hidden lg:flex space-x-6">
            <a href="#" className="text-black hover:text-gray-500">Home</a>
            <a href="#" className="text-black hover:text-gray-500">Features</a>
            <a href="#" className="text-black hover:text-gray-500">Pricing</a>
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="text-black hover:text-gray-700 focus:outline-none"
              >
                Dropdown
              </button>
              {isDropdownOpen && (
                <ul className="absolute bg-white text-black right-0 mt-2 w-48 shadow-lg rounded">
                  <li><a href="#" className="block px-4 py-2 hover:bg-gray-200">Action</a></li>
                  <li><a href="#" className="block px-4 py-2 hover:bg-gray-200">Another action</a></li>
                  <li><a href="#" className="block px-4 py-2 hover:bg-gray-200">Something else here</a></li>
                </ul>
              )}
            </div>
          </div>
        </div>

        {/* Off-canvas Menu */}
        <div
          className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
            isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
          onClick={toggleMenu}
        ></div>
        <div
          className={`fixed top-0 right-0 w-64 bg-white h-full z-50 transform transition-transform duration-300 ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="p-4">
            <button
              className="text-gray-600 hover:text-gray-800 mb-4"
              onClick={toggleMenu}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-800 hover:text-gray-600">Home</a></li>
              <li><a href="#" className="text-gray-800 hover:text-gray-600">Features</a></li>
              <li><a href="#" className="text-gray-800 hover:text-gray-600">Pricing</a></li>
              <li className="relative">
                <button
                  onClick={toggleDropdown}
                  className="text-gray-800 hover:text-gray-600 focus:outline-none w-full text-left"
                >
                  Dropdown
                </button>
                {isDropdownOpen && (
                  <ul className="mt-2 space-y-2 pl-4">
                    <li><a href="#" className="text-gray-700 hover:text-gray-500">Action</a></li>
                    <li><a href="#" className="text-gray-700 hover:text-gray-500">Another action</a></li>
                    <li><a href="#" className="text-gray-700 hover:text-gray-500">Something else here</a></li>
                  </ul>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Nav
