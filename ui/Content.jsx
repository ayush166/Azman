// Content.jsx
import React from 'react';
import{ DashboardContent} from '@/ui/DashboardContent';
import {ServicesContent }from '@/ui/ServicesContent';
import {DefaultSecurity} from '@/ui/DefaultSecurity';
import {Certificates} from '@/ui/Certificates';
import { useMenu } from '@/context/MenuContext';

const Content = () => {
  const { activeSubMenu } = useMenu();

  return (
    <>
      <div className='mt-5 max-w-[85rem] mx-auto'>
      {activeSubMenu === 'Dashboard' && <DashboardContent />}
      {activeSubMenu === 'Services' && <ServicesContent />}
      {activeSubMenu === 'Default Security' && <DefaultSecurity />}
      {activeSubMenu === 'Certificates' && <Certificates />}
      </div>
    </>
  );
};

export default Content;
