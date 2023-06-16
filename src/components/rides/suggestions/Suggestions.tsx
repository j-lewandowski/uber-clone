import { Link } from 'react-router-dom';
import SuggestionItem from './SuggestionItem';

import { FaCarSide, FaCalendarAlt, FaSuitcaseRolling } from 'react-icons/fa';
import { BiPackage } from 'react-icons/bi';

function Suggestions() {
  return (
    <div className="flex flex-col mx-4">
      <div className="flex justify-between">
        <p className="font-uberBold text-xl">Suggestions</p>
        <Link to="/services" className="font-uber">
          See all
        </Link>
      </div>
      <ul className="flex justify-around mt-4">
        <SuggestionItem
          name="Ride"
          icon={<FaCarSide className="h-8 w-8" />}
          promo={true}
        />
        <SuggestionItem
          name="Reserve"
          icon={<FaCalendarAlt className="h-8 w-8" />}
          promo={false}
        />
        <SuggestionItem
          name="Package"
          icon={<BiPackage className="h-8 w-8" />}
          promo={false}
        />
        <SuggestionItem
          name="Travel"
          icon={<FaSuitcaseRolling className="h-8 w-8" />}
          promo={false}
        />
      </ul>
    </div>
  );
}

export default Suggestions;
