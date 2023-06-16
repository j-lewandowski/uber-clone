import { useContext } from 'react';
import HomePageContext from '../../../context/HomePageContext';

import { FaSearch, FaChevronDown } from 'react-icons/fa';
import { IoTimeSharp } from 'react-icons/io5';

function SearchBar() {
  interface contextTypes {
    searchValue: string;
  }

  const { searchValue } = useContext(HomePageContext) as contextTypes;

  const lastLocations = [
    { name: 'Poznań' },
    { name: 'Biedronka', address: 'Stanisława Woźniaka 1, Kórnik' },
  ]; // Dummy Data

  return (
    <div className="mx-4 flex flex-col justify-center items-center ">
      <div className="w-full bg-gray-200 rounded-full p-4 px-6 font-uberBold flex items-center justify-between">
        <div className="flex items-center justify-center space-x-4">
          <FaSearch className="h-5 w-5" />
          <p className="text-xl">Where to?</p>
        </div>
        {/* This will be another component later on */}
        <div className="flex items-center justify-center p-2 bg-white rounded-full space-x-2">
          <IoTimeSharp />
          <p className="font-uber">Now</p>
          <FaChevronDown />
        </div>
      </div>

      {/* This will be another component */}
      <div className="w-full mt-6">
        {lastLocations.map((location, i) => (
          <div className="flex items-center pb-6">
            <IoTimeSharp className="w-8 h-8 mr-4 text-gray-600" />
            <div
              className={`flex flex-col w-full ${
                i !== lastLocations.length - 1 && 'border-b-2'
              }`}
            >
              <p>{location.name}</p>
              {location.address ? <p>{location.address}</p> : <p>&nbsp;</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchBar;
