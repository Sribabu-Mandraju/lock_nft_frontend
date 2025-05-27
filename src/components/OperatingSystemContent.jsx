import React from 'react';

const OperatingSystemContent = () => {
  return (
    <div className="p-8">
      {/* Operating System Banner */}
      <div className="bg-gradient-to-r from-blue-900/40 to-blue-800/40 border border-blue-700/50 rounded-lg p-8 mb-8">
        <h1 className="text-white text-xl font-medium mb-2">
          Need some $OS? Stake $STABLZ and receive $OS at a 1:1 ratio
        </h1>
        <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded font-medium transition-colors">
          STAKE
        </button>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-gray-900/40 border border-gray-800 rounded-lg p-6">
          <h3 className="text-gray-400 text-sm font-medium uppercase tracking-wider mb-3">
            TVL ($OS)
          </h3>
          <div className="text-white text-2xl font-bold">
            0.00
          </div>
        </div>
        
        <div className="bg-gray-900/40 border border-gray-800 rounded-lg p-6">
          <div className="flex items-center gap-2 mb-3">
            <h3 className="text-gray-400 text-sm font-medium uppercase tracking-wider">
              WEEKLY VAPR
            </h3>
            <div className="w-4 h-4 border border-gray-600 rounded-full flex items-center justify-center text-gray-500 text-xs">
              ?
            </div>
          </div>
          <div className="text-white text-2xl font-bold">
            N/A
          </div>
        </div>
        
        <div className="bg-gray-900/40 border border-gray-800 rounded-lg p-6">
          <h3 className="text-gray-400 text-sm font-medium uppercase tracking-wider mb-3">
            TOTAL REWARDS
          </h3>
          <div className="text-white text-2xl font-bold">
            $0.00
          </div>
        </div>
        
        <div className="bg-gray-900/40 border border-gray-800 rounded-lg p-6">
          <h3 className="text-gray-400 text-sm font-medium uppercase tracking-wider mb-3">
            TOTAL CLAIMED
          </h3>
          <div className="text-white text-2xl font-bold">
            $0.00
          </div>
        </div>
      </div>

      {/* Loading State */}
      <div className="flex items-center justify-center py-20">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-gray-700 border-t-white rounded-full animate-spin"></div>
        </div>
      </div>

      {/* Error Message */}
      <div className="fixed bottom-6 right-6 bg-gray-900 border border-red-500 rounded-lg p-4 flex items-center">
        <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center mr-3">
          <div className="text-white text-xs font-bold">!</div>
        </div>
        <div className="text-white text-sm">
          UNABLE TO FETCH OPERATING SYSTEM STAKING INFORMATION
        </div>
      </div>
    </div>
  );
};

export default OperatingSystemContent;