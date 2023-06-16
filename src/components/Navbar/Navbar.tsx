import { useState } from 'react';

import NavbarItem from './NavbarItem';
import { FaHome, FaUser } from 'react-icons/fa';
import { HiOutlineSquares2X2 } from 'react-icons/hi2';
import { BiReceipt } from 'react-icons/bi';

function Navbar() {
  return (
    <nav className="w-full bg-white absolute bottom-0 pb-2 border-t-2 border-gray-400 font-uber z-50 rounded-b-3xl">
      <div className="flex justify-around items-center pt-4">
        <NavbarItem
          name="Home"
          icon={<FaHome className="h-6 w-6" />}
          path="/"
        />
        <NavbarItem
          name="Services"
          icon={<HiOutlineSquares2X2 className="h-6 w-6" />}
          path="/services"
        />
        <NavbarItem
          name="Activity"
          icon={<BiReceipt className="h-6 w-6" />}
          path="/activity"
        />
        <NavbarItem
          name="Account"
          icon={<FaUser className="h-6 w-6" />}
          path="/account"
        />
      </div>
    </nav>
  );
}

export default Navbar;
