import SearchBar from './searchBar/SearchBar';
import Suggestions from './suggestions/Suggestions';
import MoreWaysToUseUber from './moreWaysToUseUber/MoreWaysToUseUber';

function Rides() {
  return (
    <div className="pt-28 pb-16 h-full w-full overflow-y-auto no-scrollbar">
      <SearchBar />
      <Suggestions />
      <MoreWaysToUseUber />
    </div>
  );
}

export default Rides;
