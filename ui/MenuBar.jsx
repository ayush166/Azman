
import { useState } from "react";
import { menuItems } from "@/lib/menuItems";
import clsx from "clsx";
import {DashboardContent} from "@/ui/DashboardContent";
import {ServicesContent} from "@/ui/ServicesContent";
import { DefaultSecurity } from "@/ui/DefaultSecurity";
import {Certificates} from "@/ui/Certificates";
import { useMenu } from '@/context/MenuContext';
export const Menubar = () => {
 // Use the context to get the current active menu state and the function to update it.
 const { activeMenu, activeSubMenu, handleMenuChange } = useMenu();

    // const [activeMenu, setActiveMenu] = useState('BASIC');
    // const [activeSubMenu, setActiveSubMenu] = useState('Dashboard');
  
  
    // Function to handle clicking a main menu item.
  const handleMainMenuClick = (menuItem) => {
    // Here you can define what the default sub menu should be when clicking a main menu item
    const defaultSubMenu = menuItem === 'BASIC' ? 'Dashboard' : 'Policy Manager';
    handleMenuChange(menuItem, defaultSubMenu);
  };


  // Function to handle clicking a sub menu item.
  const handleSubMenuClick = (subMenuItem) => {
    handleMenuChange(activeMenu, subMenuItem);
  };


  return (
    <nav className=" text-black bg-custom-blue mx-[5.5rem]">
     
       
          {/* Main Menu */}
          <div className="flex justify-between">

          
          <MainMenu activeMenu={activeMenu} onMainMenuClick={handleMainMenuClick} />
          <div className="relative text-gray-600">
            <input
              type="search"
              name="serch"
              placeholder="Search help topics"
              className="bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none"
            />
            <button type="submit" className="absolute right-0 top-0 mt-2.5 mr-3">
              {/* Insert search icon here */}
            </button>
          </div>
</div>
          {/* Sub Menu */}
         
         
        <SubMenu activeMenu={activeMenu} activeSubMenu={activeSubMenu} onSubMenuClick={handleSubMenuClick} />
    </nav>
  );
};

// MainMenu.jsx
 const MainMenu = ({ activeMenu, onMainMenuClick }) => {
  const mainMenuItems = ['BASIC', 'SECURITY POLICIES', 'WEBSITES', 'BOT MITIGATION', 'ACCESS CONTROL', 'NETWORKS', 'ADVANCED'];

  return (
    <div className="flex mx-[4.5rem]">
      {mainMenuItems.map((item) => (
        <button
          key={item}
          className={clsx(
            'px-3 mx-2 py-2 rounded-t-md text-sm font-bold transition-colors duration-150',
            {
              'bg-custom-white ': activeMenu === item,
              'bg-custom-gray': activeMenu !== item,
            }
          )}
          onClick={() => onMainMenuClick(item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
};






// SubMenu.jsx
const SubMenu = ({ activeMenu, activeSubMenu, onSubMenuClick }) => {
  return (
    <div className="flex gap-3 bg-custom-lightwhite text-black  rounded-md flex-wrap max-w-[85rem] mx-auto py-5">
      {menuItems[activeMenu].map((subItem) => (
        <button
        key={subItem}
        className={clsx(
          'rounded-md text-xs font-semibold cursor-pointer transition-colors duration-200',
          {
            'border-black border-2 bg-custom-white px-3': activeSubMenu === subItem,
            'text-blue-500 ': activeSubMenu !== subItem,
          }
        )}
        onClick={() => onSubMenuClick(subItem)}
      >
        {subItem}
      </button>
    ))}
  </div>
);
};
