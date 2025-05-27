import React from "react";

const StakingContent = () => {
  return (
    <div className="min-h-screen p-[30px_50px_50px]">
      {/* Staking Banner */}
  <div className="bg-gradient-animation bg-[length:400%_400%] animate-gradient  rounded-lg p-[15px_30px] mb-8 flex items-center justify-between">
  <h1 className="text-white text-[13px] font-medium">
    Earn USDT by staking $OS
  </h1>
  <button className="p-[10px-20px] text-[12px] hover:bg-purple-700 text-white rounded font-medium transition-colors">
    DEPOSIT
  </button>
</div>
      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gray-900/40 border border-gray-800 rounded-lg p-6">
          <h3 className="text-gray-400 text-sm font-medium uppercase tracking-wider mb-3">
            TVL
          </h3>
          <div className="text-white text-2xl font-bold">$0</div>
        </div>

        <div className="bg-gray-900/40 border border-gray-800 rounded-lg p-6">
          <h3 className="text-gray-400 text-sm font-medium uppercase tracking-wider mb-3">
            REWARDS CLAIMED
          </h3>
          <div className="text-white text-2xl font-bold">0.00</div>
        </div>

        <div className="bg-gray-900/40 border border-gray-800 rounded-lg p-6">
          <h3 className="text-gray-400 text-sm font-medium uppercase tracking-wider mb-3">
            REWARDS ASSIGNED TO STAKERS
          </h3>
          <div className="text-white text-2xl font-bold">0.00</div>
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


      {/* Error Message */}
      {/* <div className="fixed bottom-6 right-6 bg-gray-900 border border-red-500 rounded-lg p-4 flex items-center">
        <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center mr-3">
          <div className="text-white text-xs font-bold">!</div>
        </div>
        <div className="text-white text-sm">
          UNABLE TO FETCH STAKING INFORMATION
        </div>
      </div> */}
    </div>
  );
};

export default StakingContent;
