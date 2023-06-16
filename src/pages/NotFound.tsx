import { FaCarCrash } from 'react-icons/fa';
import { HiXMark } from 'react-icons/hi2';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="w-full h-full flex justify-center items-center flex-col relative">
      <Link to="/" className="absolute top-6 left-6 p-2 shadow-xl rounded-full">
        <HiXMark className="w-8 h-8" />
      </Link>
      <FaCarCrash className="w-20 h-20" />
      <p className="font-uberBold text-4xl">404</p>
      <p className="font-uberBold text-3xl text-gray-400"> Page Not Found</p>
    </div>
  );
}

export default NotFound;
