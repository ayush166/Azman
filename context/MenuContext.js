// MenuContext.js
import React, { useState, createContext, useContext } from 'react';

const MenuContext = createContext();

export const useMenu = () => useContext(MenuContext);

export const MenuProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState('BASIC');
  const [activeSubMenu, setActiveSubMenu] = useState('Dashboard');

  const handleMenuChange = (menu, submenu) => {
    setActiveMenu(menu);
    setActiveSubMenu(submenu);
  };

  return (
    <MenuContext.Provider value={{ activeMenu, activeSubMenu, handleMenuChange }}>
      {children}
    </MenuContext.Provider>
  );
};
