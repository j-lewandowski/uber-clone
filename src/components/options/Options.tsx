import { Link } from 'react-router-dom';

import { BsLifePreserver, BsShieldLockFill } from 'react-icons/bs';

function Options() {
  return (
    <div className="grid grid-rows-2 grid-cols-3 w-full gap-4">
      <Link
        to="/help"
        className="w-full flex flex-col items-center justify-center p-2 bg-gray-200 rounded-lg"
      >
        <BsLifePreserver className="h-6 w-6" />
        <p className="font-uber text-lg">Help</p>
      </Link>
      <Link
        to="/wallet"
        className="w-full flex flex-col items-center justify-center p-2 bg-gray-200 rounded-lg"
      >
        <BsLifePreserver className="h-6 w-6" />
        <p className="font-uber text-lg">Wallet</p>
      </Link>
      <Link
        to="/trips"
        className="w-full flex flex-col items-center justify-center p-2 bg-gray-200 rounded-lg"
      >
        <BsLifePreserver className="h-6 w-6" />
        <p className="font-uber text-lg">Trips</p>
      </Link>
      <Link
        to="safetyCheckup"
        className="w-full flex col-span-3 bg-gray-200 rounded-lg p-3 items-center justify-center"
      >
        <div className="font-uber w-full">
          <p className="text-xl">Safety check-up</p>
          <p className="text-sm">
            Boost your safety profile by turning on additional features
          </p>
        </div>
        <div className=" flex items-center justify-center pl-8 pr-2">
          <BsShieldLockFill className="h-12 w-12" />
        </div>
      </Link>
    </div>
  );
}

export default Options;
