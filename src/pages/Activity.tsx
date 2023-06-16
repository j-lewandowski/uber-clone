import { FaSlidersH } from 'react-icons/fa';

function Activity() {
  return (
    <div className="p-6 pt-10 flex flex-col">
      <h1 className="font-uberBold text-3xl mb-6">Activity</h1>
      <div className="flex justify-between items-center">
        <p className="font-uber text-lg">Past</p>
        <button className="p-2 bg-gray-300 rounded-full">
          <FaSlidersH />
        </button>
      </div>
      <div>{/* Last Ride component */}</div>
      <div>{/* Last 3 rides component */}</div>
    </div>
  );
}

export default Activity;
