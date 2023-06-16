import { HiUserCircle } from 'react-icons/hi';
import { BsStarFill } from 'react-icons/bs';
import Options from '../components/options/Options';

function Account() {
  return (
    <div className="p-6 pt-6">
      <div className="flex justify-between items-center mb-2">
        <div className="font-uberBold text-3xl">
          <p>Jakub</p>
          <p>Lewandowski</p>
        </div>
        <div>
          <HiUserCircle className="h-16 w-16" />
        </div>
      </div>
      <div className="mb-2">
        <div className="flex px-2 w-fit items-center space-x-3 bg-gray-300 rounded-3xl">
          <BsStarFill />
          <span>5.00</span>
        </div>
      </div>
      <Options />
    </div>
  );
}

export default Account;
