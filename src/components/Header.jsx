import React from 'react';

const Header = () => {
  return (
    <header className="flex items-center justify-between p-6 bg-black font-montserrat">
      <div className="flex items-center px-[40px]">
        <div className="text-white text-xl font-bold tracking-wider">
          <img src="logo.png" alt="" className='h-[22px] w-[87px]' />
        </div>
      </div>
      <button className="px-[40px] py-2 bg-transparent  text-white text-[12px] font-medium rounded hover:border-gray-500 transition-colors">
        CONNECT
      </button>
    </header>
  );
};

export default Header;