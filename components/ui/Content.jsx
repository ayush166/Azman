// Content.jsx
import React from 'react';
import{ DashboardContent} from '@/ui/dashboard/DashboardContent';
import {ServicesContent }from 'components/ui/ServicesContent';
import {DefaultSecurity} from 'components/ui/DefaultSecurity';
import {Certificates} from 'components/ui/Certificates';
import { useMenu } from '@/context/MenuContext';

const Content = () => {
  const { activeSubMenu } = useMenu();

  return (
    <>
      <div className='max-w-[83.75rem]  bg-secondary-white mx-[17.5rem]'>
      {activeSubMenu === 'Dashboard' && <DashboardContent />}
      {activeSubMenu === 'Services' && <ServicesContent />}
      {activeSubMenu === 'Default Security' && <DefaultSecurity />}
      {activeSubMenu === 'Certificates' && <Certificates />}
      </div>
    </>
  );
};

export default Content;
