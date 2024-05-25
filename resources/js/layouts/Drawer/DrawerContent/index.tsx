// project import
import NavCard from './NavCard';
import Navigation from './Navigation';
import SimpleBar from '@/components/third-party/SimpleBar';
import React from 'react';
// ==============================|| DRAWER CONTENT ||============================== //

export default function DrawerContent() {
  return (
    <>
      <SimpleBar sx={{ '& .simplebar-content': { display: 'flex', flexDirection: 'column' } }}>
        <Navigation />
        <NavCard />
      </SimpleBar>
    </>
  );
}
