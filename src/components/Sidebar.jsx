import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { label: 'OVERVIEW', path: '/', active: location.pathname === '/' },
    { label: 'POOLS', path: '/pools', active: location.pathname === '/pools' },
    { label: 'REAL WORLD ASSETS', path: '/rwa', active: location.pathname === '/rwa' },
    { label: 'STAKING', path: '/staking', active: location.pathname === '/staking' },
    { label: 'OPERATING SYSTEM', path: '/os', active: location.pathname === '/os' },
  ];

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <aside className="w-[300px] bg-black  min-h-screen font-montserrat">
      <nav className=" space-y-2">
        {menuItems.map((item) => (
          <div
            key={item.label}
            className={`flex justify-start px-16 items-center text-[12px]  font-medium cursor-pointer transition-colors h-[60px] ${
              item.active
                ? 'bg-white text-black '
                : 'text-white hover:text-white hover:bg-gray-800/50 rounded'
            }`}
            onClick={() => handleNavigation(item.path)}
          >
            {item.label}
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
