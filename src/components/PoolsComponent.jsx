import React from 'react';

const PoolsContent = () => {
  const poolsData = [
    {
      id: 1,
      name: 'USDD-3CRV',
      icon: '💰', // This would be replaced with actual token icons
      vApy: '0%',
      tvl: '$0',
      capital: '≈$0.00',
      rewards: '≈$0.00'
    },
    {
      id: 2,
      name: 'PWRD-3CRV',
      icon: '💎',
      vApy: '0%',
      tvl: '$0',
      capital: '≈$0.00',
      rewards: '≈$0.00'
    },
    {
      id: 3,
      name: 'FRAX-3CRV',
      icon: '🔥',
      vApy: '0%',
      tvl: '$0',
      capital: '≈$0.00',
      rewards: '≈$0.00'
    }
  ];

  return (
    <div className="p-8">
      {/* Header Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="bg-gray-900/40 border border-gray-800 rounded-lg p-6">
          <h3 className="text-gray-400 text-sm font-medium uppercase tracking-wider mb-3">
            TOTAL CAPITAL
          </h3>
          <div className="text-white text-3xl font-bold">
            $0.00
          </div>
        </div>
        <div className="bg-gray-900/40 border border-gray-800 rounded-lg p-6">
          <h3 className="text-gray-400 text-sm font-medium uppercase tracking-wider mb-3">
            TOTAL REWARDS
          </h3>
          <div className="text-white text-3xl font-bold">
            $0.00
          </div>
        </div>
      </div>

      {/* Pools Table */}
      <div className="bg-gray-900/40 border border-gray-800 rounded-lg overflow-hidden">
        {/* Table Header */}
        <div className="grid grid-cols-6 gap-4 p-6 border-b border-gray-800 text-gray-400 text-sm font-medium uppercase tracking-wider">
          <div></div>
          <div>vAPY</div>
          <div>TVL</div>
          <div className='hidden sm:block'>CAPITAL</div>
          <div  className='hidden sm:block'>REWARDS</div>
        </div>

        {/* Table Rows */}
        {poolsData.map((pool) => (
          <div key={pool.id} className="grid grid-cols-5 gap-4 p-6 border-b border-gray-800 last:border-b-0 hover:bg-gray-800/30 transition-colors">
            {/* Pool Name & Icon */}
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                {pool.icon}
              </div>
              <span className="text-white font-medium">{pool.name}</span>
            </div>

            {/* vAPY */}
            <div className="flex items-center">
              <span className="text-green-400 font-medium">{pool.vApy}</span>
            </div>

            {/* TVL */}
            <div className="flex items-center">
              <span className="text-white">{pool.tvl}</span>
            </div>

            {/* Capital */}
            <div className="flex items-center">
              <span className="text-white">{pool.capital}</span>
            </div>

            {/* Rewards */}
            <div className="flex items-center">
              <span className="text-white">{pool.rewards}</span>
            </div>

            {/* Actions */}
           <div className="flex items-center gap-2 w-full ">
              <button className="px-4 py-1 text-xs font-medium text-gray-400 border border-gray-600 rounded hover:border-gray-500 hover:text-white transition-colors">
                DEPOSIT
              </button>
              <button className="px-4 py-1 text-xs font-medium text-gray-400 border border-gray-600 rounded hover:border-gray-500 hover:text-white transition-colors">
                WITHDRAW
              </button>
              <button className="px-4 py-1 text-xs font-medium text-gray-400 border border-gray-600 rounded hover:border-gray-500 hover:text-white transition-colors">
                CLAIM
              </button>
            </div>
          </div>
        ))}
        
         
      </div>
    </div>
  );
};

export default PoolsContent;
