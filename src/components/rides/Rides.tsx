import SearchBar from './searchBar/SearchBar';
import Suggestions from './suggestions/Suggestions';
import MoreWaysToUseUber from './moreWaysToUseUber/MoreWaysToUseUber';

function Rides() {
  return (
    <div>
      <SearchBar />
      <Suggestions />
      <MoreWaysToUseUber />
    </div>
  );
}

export default Rides;
