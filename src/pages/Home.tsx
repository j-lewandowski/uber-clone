import Rides from '../components/rides/Rides';
import Delivery from '../components/delivery/Delivery';

import Header from '../components/header/Header';
import { useContext } from 'react';
import { HomePageProvider } from '../context/HomePageContext';
import HomePageContext from '../context/HomePageContext';

interface contextTypes {
  menuOption: number;
}

function Home() {
  const { menuOption } = useContext(HomePageContext) as contextTypes;

  return (
    <div className="h-full w-full ">
      <Header />
      {menuOption === 1 ? (
        <Rides />
      ) : menuOption === 2 ? (
        <Delivery />
      ) : (
        <h1>No page</h1>
      )}
    </div>
  );
}

export default Home;
