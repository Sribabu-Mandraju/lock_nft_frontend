import React from 'react';

const RealWorldAssetsContent = () => {
  return (
    <div className="p-[30px_50px_50px]">
      {/* CANNAVEST Hero Section */}
      <div className="bg-[#414726] rounded-lg p-[40px]  text-center">
        <div className="flex items-center justify-center  gap-5">
            <div className="w-[50px]  h-[50px] rounded-full flex items-center justify-center">
          <img src="canlog.png" alt="" />
            </div>  
          <h1 className="text-4xl font-bold text-white my-[23px]">CANNAVEST</h1>
        </div>
        <p className="text-green-200 text-[12px] font-medium">
          CANNAVEST REAL WORLD ASSET POOL NOW LIVE
        </p>
      </div>

      {/* Tabs Section */}
      <div className="mb-8">
        <div className="flex border-b border-gray-800">
          <button className="px-6 py-3 text-white border-b-2 border-white font-medium">
            POOLS
          </button>
          <button className="px-6 py-3 text-gray-400 hover:text-white font-medium">
            OTC
          </button>
        </div>
      </div>

      {/* Loading State */}
     <div className="relative w-16 h-16 mx-auto">
  <div className="absolute inset-0 animate-spin">
    <img src="spinner.png" alt="Outer Spinner" className="w-full h-full" />
  </div>
  <div className="absolute inset-2 animate-spin-reverse">
    <img src="spinner.png" alt="Inner Spinner" className="w-full h-full" />
  </div>
   <div className="absolute inset-4 animate-spin">
    <img src="spinner.png" alt="Inner Spinner" className="w-full h-full" />
  </div>
</div>
    </div>
  );
};

export default RealWorldAssetsContent;