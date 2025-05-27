import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import OperatingSystemContent from '../components/OperatingSystemContent';

const OperatingSystem = () => {
  return (
    <div className="min-h-screen bg-black text-white font-montserrat">
      <Header />
      
      <div className="flex">
        <Sidebar />
        <main className="flex-1">
          <OperatingSystemContent />
        </main>
      </div>
    </div>
  );
};

export default OperatingSystem;