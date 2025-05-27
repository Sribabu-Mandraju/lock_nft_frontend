import React from 'react';
import { IoMdMenu } from "react-icons/io";

const Header = ({ toggleSidebar }) => {
  return (
    <header className="fixed w-full flex items-center justify-between bg-black/30 lg:bg-black font-montserrat h-[70px] backdrop-blur-lg">
      <div className="flex items-center md:px-[40px]">
        <div className="text-white text-xl font-bold tracking-wider">
          <button onClick={toggleSidebar} className="lg:hidden text-lg mx-3">
            <IoMdMenu className="text-2xl" />
          </button>
          <img src="logo.png" alt="" className="h-[22px] w-[87px] hidden md:hidden" />
        </div>
      </div>
      <button className="px-[40px] py-2 bg-transparent text-white text-[12px] font-medium rounded hover:border-gray-500 transition-colors">
        CONNECT
      </button>
    </header>
  );
};

export default Header;
