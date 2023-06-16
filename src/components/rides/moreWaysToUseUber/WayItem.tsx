import { Link } from 'react-router-dom';
import { HiArrowLongRight } from 'react-icons/hi2';

interface propTypes {
  image: string;
  title: string;
  desc: string;
  path?: string;
}

function WayItem({ image, title, desc, path = 'pageNotFound' }: propTypes) {
  return (
    <Link to={path} className="flex flex-col py-2">
      <div
        className="h-48 w-72 bg-cover rounded-lg"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="flex flex-col">
        <div className="flex items-center space-x-2">
          <p className="font-uber text-lg">{title}</p>
          <HiArrowLongRight className="h-5 w-5" />
        </div>
        <p className="font-uber text-sm text-gray-500">{desc}</p>
      </div>
    </Link>
  );
}

export default WayItem;
