import React, { useState } from 'react';

const certificatesData = [
  // Dummy data for certificates
  {
    id: 1,
    name: 'demo_upload_ec...',
    commonName: 'test1.cuadapps.com',
    keyAlgorithm: 'ECDSA',
    ocspStapling: 'No',
    serviceEndpoint: 'No Service',
    expiry: 'Sep 8 16:38:20 2020 GMT',
    type: 'Uploaded',
    privateKey: 'Exportable',
  },
  // ... more certificates
];

 const CertificateSummaryBox = ({ title, count, color }) => {
  return (
    <div className={`flex-1 text-center p-4 border rounded shadow-lg mx-2 ${color}`}>
      <h3 className="font-bold">{title}</h3>
      <div className="text-3xl">{count}</div>
    </div>
  );
};

export const Certificates = () => {
  const [activeTab, setActiveTab] = useState('All');

  return (
    <div className="container mx-auto p-4">
      {/* Summary Boxes */}
      <div className="flex flex-wrap justify-between mb-6">
        <CertificateSummaryBox title="Total Certificates" count={20} color="bg-blue-100" />
        <CertificateSummaryBox title="Active Certificates" count={1} color="bg-green-100" />
        <CertificateSummaryBox title="Expiring Certificates" count={0} color="bg-yellow-100" />
        <CertificateSummaryBox title="Expired Certificates" count={19} color="bg-red-100" />
      </div>

      {/* Tabs */}
      <div className="flex border-b mb-4">
        {['All Certificates', 'Active Certificates', 'Expired Certificates', 'Expiring in 7 days'].map((tab) => (
          <div
            key={tab}
            className={`cursor-pointer p-2 ${activeTab === tab ? 'border-blue-500 text-blue-500 border-b-2' : 'text-gray-500'}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </div>
        ))}
      </div>

      {/* Certificates Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left p-4 border-b">Name</th>
              {/* ... other headers */}
            </tr>
          </thead>
          <tbody>
            {certificatesData.map((cert) => (
              <tr key={cert.id} className="hover:bg-gray-100">
                <td className="p-4 border-b">{cert.name}</td>
                {/* ... other certificate details */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

