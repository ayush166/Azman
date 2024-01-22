import React from 'react';

export const DefaultSecurity = () => {
  // State for each setting can be managed here if these settings need to be interactive

  return (
    <div className="bg-white p-4 rounded-md shadow">
      <h2 className="text-lg font-bold mb-4">Default Security</h2>

      
      
      <div className="mb-3">
        <label className="font-semibold">Check Protocol Limits:</label>
        <div className="flex items-center">
          <input type="radio" id="protocolYes" name="protocolLimits" value="yes" />
          <label htmlFor="protocolYes" className="ml-2">Yes</label>
          <input type="radio" id="protocolNo" name="protocolLimits" value="no" className="ml-4" />
          <label htmlFor="protocolNo" className="ml-2">No</label>
        </div>
        <p className="text-sm text-gray-600">Set to Yes to check size limit on various HTTP protocol elements like request length, header length etc. These checks prevent possible Buffer Overflow attacks. Recommended: Yes</p>
      </div>

    

      <div className="flex justify-end mt-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Save</button>
        <button className="bg-gray-300 text-black px-4 py-2 rounded ml-2 hover:bg-gray-400">Cancel</button>
      </div>
    </div>
  );
};


