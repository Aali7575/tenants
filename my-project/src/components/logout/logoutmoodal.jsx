//import React from 'react';
import { Link } from "react-router-dom";


import PropTypes from 'prop-types';

const LogoutModal = ({ showModal, closeModal }) => {
  LogoutModal.propTypes = {
    showModal: PropTypes.bool.isRequired,
    closeModal: PropTypes.func.isRequired,
  };

  return (
   
    showModal && (
      <div className="fixed inset-0 z-50 overflow-auto bg-gray-900 bg-opacity-75 flex justify-center items-center">
        <div className="bg-gray-100 h-96 w-full max-w-md p-6 rounded-lg flex flex-col items-center justify-center space-y-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-12 h-12 animate-spin"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
            />
          </svg>

          <p className="text-center text-xl font-bold text-gray-900">
            Logout of your account
          </p>
          <p className="text-center text-sm font-medium text-gray-500">
            Are you sure you want to log out?
          </p>
          <div className="flex flex-col space-y-4">
            <Link to="/admin">
              <button
                type="button"
                className=" inline-flex items-center justify-center w-full px-32 py-3 text-sm font-semibold leading-5 text-white transition-all duration-200 bg-indigo-900 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 hover:bg-indigo-500"
              >
               Yes, Log Me Out
              </button>
            </Link>

            <button
              onClick={closeModal}
              type="button"
              className="inline-flex items-center justify-center w-full px-32 py-3 text-sm font-semibold leading-5 text-white transition-all duration-200 bg-red-700 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 hover:bg-red-500 "
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default LogoutModal;
