//import React from 'react';
import { GiAutoRepair } from 'react-icons/gi';
import { Link } from 'react-router-dom';

const MajorBreakdowns = () => {
  // Define your array of objects containing the breakdown data
  const breakdowns = [
    // {
    //   status: 'PROGRESS',
    //   equipment: 'HOHAN TIPPER',
    //   code: 'FLT 102',
    //   issue: 'ALTERNATOR BELT',
    //   date: 'Feb 17, 2024',
    //   location: 'TEFOMA',
    //   statusColor: 'green',
    // },
    {
        status: 'PROGRESS',
        equipment: 'RESIDENTIAL APARTMENT',
        code: 'UNIT 102',
        issue: 'LEAKY ROOF',
        date: 'Feb 17, 2024',
        location: 'UNIT A, CHITUNGWIZA',
        statusColor: 'green',
      },
    // {
    //   status: 'PROGRESS',
    //   equipment: 'CAT EXCAVATOR',
    //   code: 'FCX 17',
    //   issue: 'BUCKET BROKEN',
    //   date: 'Feb 12, 2024',
    //   location: 'HEBE P4',
    //   statusColor: 'green',
    // },
    {
        status: 'PROGRESS',
        equipment: 'COMMERCIAL RETAIL SPACE',
        code: 'SHOP 17',
        issue: 'BROKEN HEAT SYSTEM',
        date: 'Feb 12, 2024',
        location: 'DANGAMVURA, MUTARE',
        statusColor: 'green',
      },
    // {
    //   status: 'PENDING',
    //   equipment: 'HOHAN TIPPER',
    //   code: 'FLT 52',
    //   issue: 'TYRE BURST',
    //   date: 'Jan 17, 2024',
    //   location: 'ZIMINYA',
    //   statusColor: 'yellow',
    // },
    {
        status: 'PENDING',
        equipment: 'OFFICE BUILDING',
        code: 'BUILDING A22',
        issue: 'PLUMBING ISSUE',
        date: 'Jan 17, 2024',
        location: 'MKOBA 25, GWERU',
        statusColor: 'yellow',
      },
    // {
    //   status: 'DECOMISSIONED',
    //   equipment: 'VOLVO EXCAVATOR',
    //   code: 'SXE 22',
    //   issue: 'OVERHEATING',
    //   date: 'Jan 17, 2023',
    //   location: 'TEFOMA',
    //   statusColor: 'red',
    // },
    {
        status: 'DECOMISSIONED',
        equipment: 'SINGLE FAMILY HOME',
        code: 'OFFICE 52',
        issue: 'ELECTRICAL FAULT ',
        date: 'Jan 17, 2023',
        location: 'GREENDALE, HARARE',
        statusColor: 'red',
      },
    // Add more breakdown objects as needed
  ];

  return (
    <div className="grid grid-cols-1 gap-5 sm:gap-6 lg:grid-cols-6">
      <div className="overflow-hidden bg-gray-50 border border-gray-200 lg:col-span-6 rounded-xl">
        <div className="px-4 py-5 sm:p-6">
          <div className="sm:flex sm:items-start sm:justify-between">
            <div>
              {/* <p className="flex text-base font-bold text-gray-900">
                <GiAutoRepair style={{ marginRight: '8px', fontSize: '20px' }} />
                MAJOR BREAKDOWNS
              </p> */}
              <p className="flex text-base font-bold text-gray-900">
                <GiAutoRepair style={{ marginRight: '8px', fontSize: '20px' }} />
                Critical Maintenance Issues
              </p>
              {/* <p className="mt-1 text-sm font-medium text-gray-500">
                Equipment which is on breakdown and their statuses.
              </p> */}
              <p className="mt-1 text-sm font-medium text-gray-500">
              Urgent Property Repairs and Status Updates
              </p>
            </div>

            <div className="mt-4 sm:mt-0">
              {/* <Link
                to="/breakdowns"
                title=""
                className="inline-flex items-center text-xs font-semibold tracking-widest text-gray-500 uppercase hover:text-gray-900"
              >
                See all Breakdowns
                <svg
                  className="w-4 h-4 ml-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"></path>
                </svg>
              </Link> */}
               <Link
                to="/breakdowns"
                title=""
                className="inline-flex items-center text-xs font-semibold tracking-widest text-gray-500 uppercase hover:text-gray-900"
              >
                View All Maintenance Issues
                <svg
                  className="w-4 h-4 ml-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>

        <div className="divide-y divide-gray-200">
          {breakdowns.map((breakdown, index) => (
            <div key={index} className="grid grid-cols-3 py-4 gap-y-4 lg:gap-0 lg:grid-cols-6">
              <div className="col-span-2 px-4 lg:py-4 sm:px-6 lg:col-span-1">
                <span className={`text-xs font-medium text-${breakdown.statusColor}-900 bg-${breakdown.statusColor}-500 rounded-full inline-flex items-center px-2.5 py-1`}>

                  {breakdown.status}
                </span>
              </div>

              <div className="px-4 text-right lg:py-4 sm:px-6 lg:order-last">
                <button
                  type="button"
                  className="inline-flex items-center justify-center w-8 h-8 text-gray-400 transition-all duration-200 bg-white rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
                >
                  <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
                  </svg>
                </button>
              </div>

              <div className="px-4 lg:py-4 sm:px-6 lg:col-span-2">
                <p className="text-sm font-bold text-gray-900">{breakdown.equipment}</p>
                <p className="mt-1 text-sm font-medium text-gray-500">{breakdown.code}</p>
              </div>

              <div className="px-4 lg:py-4 sm:px-6">
                <p className="text-sm font-bold text-gray-900">{breakdown.issue}</p>
                <p className="mt-1 text-sm font-medium text-gray-500">{breakdown.date}</p>
              </div>

              <div className="px-4 lg:py-4 sm:px-6">
                <p className="mt-1 text-sm font-medium text-gray-500">{breakdown.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MajorBreakdowns;