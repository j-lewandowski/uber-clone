import { FaCarSide, FaCalendarAlt, FaSuitcaseRolling } from 'react-icons/fa';
import { BiPackage } from 'react-icons/bi';
import { IoFastFood } from 'react-icons/io5';
import ServiceItem from '../components/services/ServiceItem';

function Services() {
  return (
    <div className="p-6 pt-10 flex flex-col">
      <h1 className="font-uberBold text-3xl mb-6">Services</h1>
      <p className="font-uber text-lg">Go anywhere, get anything</p>
      <div className="grid grid-cols-3 grid-rows-2 mt-6 gap-y-4">
        <ServiceItem
          name="Ride"
          icon={<FaCarSide className="h-8 w-8" />}
          promo={true}
        />
        <ServiceItem
          name="Reserve"
          icon={<FaCalendarAlt className="h-8 w-8" />}
          promo={false}
        />
        <ServiceItem
          name="Package"
          icon={<BiPackage className="h-8 w-8" />}
          promo={false}
        />
        <ServiceItem
          name="Travel"
          icon={<FaSuitcaseRolling className="h-8 w-8" />}
          promo={false}
        />
        <ServiceItem
          name="Food"
          icon={<FaSuitcaseRolling className="h-8 w-8" />}
          promo={true}
        />
      </div>
    </div>
  );
}

export default Services;
