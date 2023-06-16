import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface propTypes {
  name: string;
  icon: ReactNode;
  promo: boolean;
  path?: string;
  span?: boolean;
}

function ServiceItem({
  name,
  icon,
  promo,
  path = '/pageNotFound',
  span,
}: propTypes) {
  return (
    <Link to={path}>
      <div className="h-16 w-20 bg-gray-200 rounded-xl flex items-center justify-center relative z-0">
        {promo && (
          <div className="absolute w-[70%] text-center -top-3 left-[50%] -translate-x-[50%] z-10 bg-green-500 p-1 rounded-full text-xs text-white px-2">
            Promo
          </div>
        )}
        {icon}
      </div>
      <p className="text-center text-sm mt-2">{name}</p>
    </Link>
  );
}
export default ServiceItem;
