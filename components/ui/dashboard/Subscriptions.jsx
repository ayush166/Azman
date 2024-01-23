// SubscriptionStatus.jsx
import { subscriptionData } from '@/lib/subscriptionData';
import React from 'react';

const SubscriptionStatus = () => {
  return (
    <div className='rounded border-2 border-[#CCCCCC] mx-4 w-full'>
      <div>
        <p className="text-md  bg-primary-blue text-custom-white font-bold pl-2 h-[1.9375rem] align-middle">
          Subscription Status
        </p>
      </div>
      <div className="bg-white p-2">
        {subscriptionData.map((sub, index) => (
          <div key={index} className="flex items-center justify-between mb-2">
            <span className="text-gray-600 flex-1 text-[0.875rem]">{sub.name}</span>
            <span className={`flex-shrink-0 px-3 py-1 inline-flex items-center justify-center text-[0.875rem] leading-5 font-semibold rounded-full ${sub.status === 'Current' ? 'text-primary-green' : 'text-red-600'}`}>
              {sub.status}
            </span>
            <span className="text-sm text-gray-500 flex-1 text-right">(Expires: {sub.expires})</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubscriptionStatus;
