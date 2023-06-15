import { useLocation, Link } from 'react-router-dom';
import { ReactNode } from 'react';

interface Props {
  name: string;
  icon: ReactNode;
  path: string;
}

function NavbarItem({ name, icon, path }: Props) {
  const location = useLocation();

  return (
    <Link
      to={path}
      className={`flex flex-col items-center justify-center hover:cursor-pointer ${
        location.pathname === path ? 'text-black scale-110' : 'text-gray-500'
      }`}
    >
      {icon}
      {name}
    </Link>
  );
}

export default NavbarItem;
