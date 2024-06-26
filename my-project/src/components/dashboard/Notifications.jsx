/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";

// eslint-disable-next-line react/prop-types
const Notification = ({
    showNotificationsModal,
    handleCloseNotificationsModal, // This prop contains the notifications data
  }) => {
    const notifications = [
        {
          id: 1,
          title: 'New message received',
          time: '20 minutes ago',
          description: 'Notice submitted by Gracious at Unit 3'
        },
        {
          id: 2,
          title: 'New message received',
          time: '3 hours ago',
          description: 'New service request submitted by Chido for plumbing services at Shop 143.'
        },
        {
          id: 3,
          title: 'New message received',
          time: '4 hours ago',
          description: 'New service request for an electrician by Rudo at Unit 109'
        }
      ];
    return (
      <>
        {showNotificationsModal && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            {/* Overlay */}
            <div className="fixed inset-0 bg-gray-900 bg-opacity-50 backdrop-filter backdrop-blur-sm"></div>
            
            {/* Modal content container */}
            <div className="absolute z-10 bg-white w-full max-w-3xl overflow-hidden shadow-lg rounded-xl transform transition-all sm:w-full">
              
              {/* Close button */}
              <div className="absolute top-0 right-0 pt-3 pr-3">
                <button
                  type="button"
                  onClick={handleCloseNotificationsModal}
                  className="p-1 text-gray-400 transition-all duration-200 bg-white rounded-md hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
                >
                  <span className="sr-only">Close</span>
                  <svg
                    className="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </button>
              </div>
  
              {/* Notifications list */}
              <div className="bg-gray-100 p-4 overflow-auto" style={{ maxHeight: '80vh' }}>
                <h1 className="text-xl font-bold mb-4">Notifications</h1>
                {notifications.map(notification => (
                  <div key={notification.id} className="bg-gray-200 p-4 rounded-lg mb-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="bg-blue-500 text-white rounded-full p-2">
                          {/* Icon placeholder */}
                        </div>
                        <div>
                          <div className="flex gap-3">
                            <div>
                              <p className="text-md text-gray-700 font-medium">{notification.title}</p>
                            </div>
                            <div>
                              <p className="inline text-sm text-gray-500">{notification.time}</p>
                            </div>
                          </div>
                          <p className="text-xs text-gray-500">{notification.description}</p>
                        </div>
                      </div>
                      <button className="text-xs bg-[#06380b] text-white font-bold border-2 rounded-md py-3 px-4">
                        View
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </>
    );
  };
  
  export default Notification;
  
