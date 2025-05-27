import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import MetricCard from "../components/MetricCard";
import PriceChart from "../components/PriceChart";
import TokenStats from "../components/TokenStats";
import BuySection from "../components/BuySection";

const Overview = () => {
  return (
    <div className="relative min-h-screen bg-black text-white font-montserrat overflow-hidden">
      
   
      <div className="flex">
        <main className="flex-1 p-8">
          <BuySection />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div>
              <MetricCard
                title="TOTAL SUPPLY"
                value="100,000,000"
                hasInfo={true}
              />
            </div>
            <div>
              <MetricCard title="CIRCULATING SUPPLY" value="0" />
            </div>
            <div>
              <MetricCard title="MARKET CAP" value="$0" />
            </div>
            <div className="md:col-span-3">
              <MetricCard title="STABLZ STAKED" value="0" />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <PriceChart />
            <TokenStats />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Overview;
