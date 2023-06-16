import WayItem from './WayItem';

import GoGreen from '../../../assets/images/GoGreen.jpg';
import SendPackage from '../../../assets/images/SendPackage.jpg';
import ChooseComfort from '../../../assets/images/ChooseComfort.png';
import SafetyToolkit from '../../../assets/images/SafetyToolkit.webp';

export default function MoreWaysToUseUber() {
  return (
    <div className="mt-2 mx-6">
      <div className="flex flex-col">
        <p className="font-uberBold text-xl">More ways to use Uber</p>
        <ul className="flex overflow-x-auto space-x-4">
          <WayItem
            image={GoGreen}
            title="Go green"
            desc="Ride in an EV or hybrid"
          />
          <WayItem
            image={SendPackage}
            title="Send a package"
            desc="On-demand delivery across town"
          />
          <WayItem
            image={ChooseComfort}
            title="Choose comfort"
            desc="Top-rated drivers, newer cars"
          />
          <WayItem
            image={SafetyToolkit}
            title="Safety Tookity"
            desc="On-trip help with safety issues"
          />
        </ul>
      </div>
    </div>
  );
}
