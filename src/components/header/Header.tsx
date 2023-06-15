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
    <header className="absolute font-uberBold flex w-full justify-center my-10">
      <HeaderItem
        text="Rides"
        image={<FaCar />}
        menuOption={menuOption}
        index={1}
        changeMenuOption={setMenuOption}
      />
      <HeaderItem
        text="Delivery"
        image={<IoFastFood />}
        menuOption={menuOption}
        index={2}
        changeMenuOption={setMenuOption}
      />
    </header>
  );
}

export default Header;
