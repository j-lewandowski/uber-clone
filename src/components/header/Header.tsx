import HeaderItem from './HeaderItem';

import rideIcon from '../../assets/images/rideIcon.webp';
import uberEatsIcon from '../../assets/images/uberEatsIcon.webp';

import { FaCar } from 'react-icons/fa';
import { IoFastFood } from 'react-icons/io5';

// @ TODO
// Add smooth transition between options

function Header() {
  return (
    <header className="font-uberBold flex w-full justify-center pt-10 mb-3 z-50 top-0 pb-4 shadow-sm absolute bg-white md:rounded-t-3xl">
      <HeaderItem text="Rides" image={<FaCar />} index={1} />
      <HeaderItem text="Delivery" image={<IoFastFood />} index={2} />
    </header>
  );
}

export default Header;
