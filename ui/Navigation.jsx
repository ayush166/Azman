// Navigation.jsx
import React from 'react';
import { Menubar } from '@/ui/MenuBar';
import { useMenu } from '@/context/MenuContext';

const Navigation = () => {
  const { activeMenu } = useMenu();

  return (
    <nav className="">
      <div className="">
        <div className="flex pl-[5rem] justify-between bg-custom-blue items-center py-3 max-w-[85rem] mx-auto">
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
    </nav>
  );
};

export default Navigation;
