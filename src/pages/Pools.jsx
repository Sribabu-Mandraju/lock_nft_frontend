import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import PoolsContent from '../components/PoolsComponent';

const Pools = () => {
  return (
    <div className="min-h-screen bg-black text-white font-montserrat">
      <Header />
      
      <div className="flex">
        <Sidebar />
        <main className="flex-1">
          <PoolsContent />
        </main>
      </div>
    </div>
  );
};

export default Pools;