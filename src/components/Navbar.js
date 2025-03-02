import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { MdRealEstateAgent } from "react-icons/md";
const Navbar = () => {
  const [insertNewDataMenuOpen, setInsertNewDataMenuOpen] = useState(false);
  const [viewDatabaseMenuOpen, setViewDatabaseMenuOpen] = useState(false);

  const toggleInsertNewDataMenu = () => {
    setInsertNewDataMenuOpen(!insertNewDataMenuOpen);
  };

  const toggleDatabaseMenu = () => {
    setViewDatabaseMenuOpen(!viewDatabaseMenuOpen);
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <MdRealEstateAgent className=' font-extrabold text-5xl text-blue-600' />
          <span className="self-center text-4xl font-semibold whitespace-nowrap dark:text-white">
          EstateEase
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-dropdown"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-dropdown"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
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
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a
                href="/"
                className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <button
                id="dropdownNavbarLink1"
                onClick={toggleInsertNewDataMenu}
                data-dropdown-toggle="dropdownNavbar1"
                className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
              >
                Insert New Data{" "}
                <svg
                  className="w-2.5 h-2.5 ms-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>

              {insertNewDataMenuOpen && <div
                id="dropdownNavbar1" style={{position:"fixed"}}
                className="z-10   font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
              >
                <ul onClick={toggleInsertNewDataMenu}
                  className="py-2 text-sm text-gray-700 dark:text-gray-400"
                  aria-labelledby="dropdownNavbarLink1"
                >
                  <li>
                    <Link
                      to="/add_buyer"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Add Buyer
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/add_seller"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Add Seller
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/add_agent"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Add Agent
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/add_property"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Add Property
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/add_property_details"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Add Property Details
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/add_transaction"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Add Transaction
                    </Link>
                  </li>
                </ul>
              </div>}
            </li>
            <li>
              <button
                id="dropdownNavbarLink2"
                onClick={toggleDatabaseMenu}
                data-dropdown-toggle="dropdownNavbar2"
                className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
              >
                View Database{" "}
                <svg
                  className="w-2.5 h-2.5 ms-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>

              {viewDatabaseMenuOpen && <div
                id="dropdownNavbar2"
                style={{position:"fixed"}}
                className="z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
              >
                <ul
                  onClick={toggleDatabaseMenu}
                  className="py-2 text-sm text-gray-700 dark:text-gray-400"
                  aria-labelledby="dropdownNavbarLink2"
                >
                  <li>
                    <Link
                      to="/view_buyer"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      View Buyer table
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/view_seller"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      View Seller Table
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/view_agent"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      View Agent table
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/view_property"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      View Property table
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/view_property_details"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      View Property Details
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/view_transaction"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      View Transactions
                    </Link>
                  </li>
                </ul>
              </div>}
            </li>
            <li>
              <Link
                to="/ER"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Er Diagram
              </Link>
            </li>

            
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
