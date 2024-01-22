// Navigation.jsx
import React from 'react';
import { Menubar } from 'components/layout/MenuBar';
import { useMenu } from '@/context/MenuContext';

const Navigation = () => {
  const { activeMenu } = useMenu();

  return (
   
      <div className="max-w-[83.75rem] mx-[17.5rem]">
        <div className="flex pl-[5rem] justify-between bg-custom-blue items-center py-3">
          {/* Logo and Links */}
          <div className="flex items-center">
            <div className="text-white text-lg font-bold">Barracuda | CloudGen WAF</div>
          
          </div>

          <div className='flex'>
            <div>
              Help
            </div>
            <div>
              SignOut
            </div>
            <div>
              <select name="English" id="">
                <option value="">English</option>
              </select>
            </div>
          </div>
        </div>

        {/* Menubar */}
        <Menubar />
      </div>
   
  );
};

export default Navigation;
