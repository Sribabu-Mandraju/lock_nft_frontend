import React from 'react';

const PriceChart = () => {
  return (
    <div className="bg-gray-900/40 border border-gray-800 rounded-lg p-6 col-span-2">
      <div className="flex items-center justify-between mb-6">
        <div>
          <div className="text-white text-4xl font-bold mb-2">$0.0000</div>
          <div className="text-gray-400 text-sm">MAY 27, 2025 4:41 PM</div>
        </div>
        <div className="flex items-center gap-6">
          <div className="text-right">
            <div className="text-gray-400 text-sm mb-1">STABLZ/USD</div>
            <div className="text-white font-bold">PRICE</div>
          </div>
          <div className="text-right">
            <div className="text-gray-400 text-sm mb-1"></div>
            <div className="text-gray-500 font-bold">LIQUIDITY</div>
          </div>
        </div>
      </div>
      
      <div className="flex items-center gap-4 mb-8">
        <div className="flex items-center gap-2">
          <button className="w-8 h-6 bg-white rounded-full flex items-center justify-center">
            <div className="w-3 h-3 bg-black rounded-full"></div>
          </button>
          <span className="text-white text-sm font-medium">1D</span>
        </div>
        <span className="text-gray-500 text-sm">1M</span>
      </div>

      <div className="relative h-64 w-full">
        <svg
          viewBox="0 0 800 200"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
            </linearGradient>
          </defs>
          
          <path
            d="M0,120 Q100,110 200,100 T400,90 Q500,80 600,70 Q650,60 700,50 Q750,40 800,30"
            fill="none"
            stroke="#10b981"
            strokeWidth="2"
            className="animate-pulse"
          />
          
          <path
            d="M0,120 Q100,110 200,100 T400,90 Q500,80 600,70 Q650,60 700,50 Q750,40 800,30 L800,200 L0,200 Z"
            fill="url(#chartGradient)"
          />
        </svg>
      </div>
    </div>
  );
};

export default PriceChart;