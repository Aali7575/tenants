//import React from 'react'
import { HiOutlineStatusOnline } from "react-icons/hi";
const OnlinePlant = () => {
  return (
    <div className="overflow-hidden border border-indigo-200 bg-gray-50 rounded-xl">
    <div className="px-5 py-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="flex text-sm font-medium text-gray-500">
            <HiOutlineStatusOnline
              style={{
                marginRight: "8px",
                fontSize: "20px",
                color: "green",
              }}
            />
            {/* Running Plant */}
            Active Listings 
          </p>
          <p className="mt-2 text-xl font-bold text-gray-900">
            1,693 Online
          </p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default OnlinePlant