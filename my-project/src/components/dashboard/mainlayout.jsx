/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import LogoutModal from "../logout/logoutmoodal";

const AppLayout = (props) => {
 // const { children } = props;
  const [showModal, setShowModal] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const handleShowModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="h-screen w-screen flex overflow-hidden">
      <LogoutModal showModal={showModal} closeModal={closeModal} />
      
      <div className={`fixed inset-y-0 left-0 z-50 transform ${isMenuOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 xl:transform-none xl:static xl:inset-y-0 bg-red-900 xl:flex xl:w-64 xl:flex-col`}>
        <div className="flex flex-col flex-grow pt-5 overflow-y-auto">
          <div className="flex items-center justify-center flex-shrink-0 px-4">
            {/* Add your logo here if needed */}
            {/* <img className="w-auto h-15 mt-4" src={MainLogo} alt="" /> */}
          </div>
          <div className="flex flex-col flex-1 px-3 mt-12">
            <div className="space-y-4">
              <nav className="flex-1 space-y-2">
                
                <Link to="/agentdashboard/dashboarditempage">
                  <div className={`flex items-center mt-2 px-4 py-2.5 text-sm font-medium ${location.pathname === "/agentdashboard/dashboarditempage" ? "bg-red-700 text-white" : "text-white"} transition-all duration-200 rounded-lg hover:bg-gray-700 group`}>
                    <svg
                      className="flex-shrink-0 w-5 h-5 mr-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                    Agents Dashboard
                  </div>
                </Link>

                <Link to="/agentdashboard/propertymanagement">
                  <div className={`flex items-center mt-2 px-4 py-2.5 text-sm font-medium ${location.pathname === "/agentdashboard/propertymanagement" ? "bg-gray-700 text-white" : "text-white"} transition-all duration-200 rounded-lg hover:bg-gray-700 group`}>
                    <svg
                      className="flex-shrink-0 w-5 h-5 mr-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                    Property Management
                  </div>
                </Link>

                <Link to="/agentdashboard/servicerequest">
                  <div className={`flex items-center mt-2 px-4 py-2.5 text-sm font-medium ${location.pathname === "/agentdashboard/servicerequest" ? "bg-gray-700 text-white" : "text-white"} transition-all duration-200 rounded-lg hover:bg-gray-700 group`}>
                    <svg
                      className="flex-shrink-0 w-5 h-5 mr-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                    Service Request Management
                  </div>
                </Link>
                

                <Link to="/agentdashboard/settings">
                  <div className={`flex items-center mt-2 px-4 py-2.5 text-sm font-medium ${location.pathname === "/agentdashboard/settings" ? "bg-gray-700 text-white" : "text-white"} transition-all duration-200 rounded-lg hover:bg-gray-700 group`}>
                    <svg
                      className="flex-shrink-0 w-5 h-5 mr-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                    Settings
                  </div>

                  
                </Link>
                <Link to="/agentdashboard/support">
                  <div className={`flex items-center mt-2 px-4 py-2.5 text-sm font-medium ${location.pathname === "/agentdashboard/support" ? "bg-gray-700 text-white" : "text-white"} transition-all duration-200 rounded-lg hover:bg-gray-700 group`}>
                    <svg
                      className="flex-shrink-0 w-5 h-5 mr-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                    Support
                  </div>
                </Link>
                
              </nav>
            </div>

            <div className="pb-12 mt-auto">
              <button
                type="button"
                onClick={handleShowModal}
                className="flex items-center justify-between w-full px-4 py-3 text-sm font-medium text-white transition-all duration-200 rounded-lg bg-gray-700 border border-gray-500"
              >
                <img
                  className="flex-shrink-0 object-cover w-6 h-6 mr-3 rounded-full"
                  src="https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/previews/settings/4/avatar-female.png"
                  alt="User Avatar"
                />
                Log Out
                <svg
                  className="w-5 h-5 ml-auto"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col xl:pl-64">
        <div className="sticky top-0 z-10 flex-shrink-0 h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4 sm:px-6 md:px-8">
          <div className="flex items-center">
            <button
              type="button"
              className="p-2 -m-2 text-gray-600 transition-all duration-200 lg:hidden md:hidden hover:text-gray-800"
              onClick={toggleMenu}
            >
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            <div className="flex flex-1 max-w-xs ml-4">
              <label htmlFor="search" className="sr-only">
                Search
              </label>
              <div className="relative w-full">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8 16l-6-6m0 0l6-6m-6 6h18"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  name="search"
                  id="search"
                  className="block w-full py-2 pl-10 border-gray-300 rounded-lg focus:ring-red-600 focus:border-red-600 sm:text-sm"
                  placeholder="Search here"
                />
              </div>
            </div>
          </div>
          <div className="ml-4 flex-shrink-0">
            <button type="button" className="flex items-center text-sm rounded-full text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <span className="sr-only">Open user menu</span>
              <img
                className="h-8 w-8 rounded-full"
                src="https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/previews/settings/4/avatar-female.png"
                alt=""
              />
            </button>
          </div>
        </div>
        <main className="flex-grow overflow-y-auto">
          <div className="py-6">
            <div className="px-4 sm:px-6 md:px-8">
              <h0 className="text-2xl font-semibold text-gray-900"> </h0>
            </div>
            {/* <div className="px-4 sm:px-6 md:px-8">{children}</div> */}
          </div>
        </main>
      </div>
    </div>
  );
};

export default AppLayout;
