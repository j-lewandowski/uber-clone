import { useState } from 'react';
import HeaderItem from './HeaderItem';

import rideIcon from '../../assets/images/rideIcon.webp';
import uberEatsIcon from '../../assets/images/uberEatsIcon.webp';

import { FaCar } from 'react-icons/fa';
import { IoFastFood } from 'react-icons/io5';

// @ TODO
// Add smooth transition between options

function Header() {
  const [menuOption, setMenuOption] = useState<number>(1);

  return (
    <header className="font-uberBold flex w-full justify-center my-10 z-10 pb-4 shadow-sm">
      <HeaderItem text="Rides" image={<FaCar />} index={1} />
      <HeaderItem text="Delivery" image={<IoFastFood />} index={2} />
    </header>
  );
}

export default Header;
