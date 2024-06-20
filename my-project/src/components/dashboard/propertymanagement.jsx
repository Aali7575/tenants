

function PropertyManagement() {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Property Management</h1>
      <div className="space-y-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          List New Property
        </button>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Manage Existing Listings
        </button>
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          Administrative Tasks
        </button>
      </div>
      <div className="mt-6">
        <h2 className="text-xl font-semibold text-gray-800">Dummy Data</h2>
        <p className="text-gray-600">Property Count: 10</p>
        <p className="text-gray-600">Listings Under Review: 5</p>
        <p className="text-gray-600">Tasks Pending: 3</p>
      </div>
    </div>
  )
}

export default PropertyManagement