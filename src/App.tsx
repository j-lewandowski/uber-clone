import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';

import Home from './pages/Home';
import Services from './pages/Services';
import Activity from './pages/Activity';
import Account from './pages/Account';
import { HomePageProvider } from './context/HomePageContext';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gray-500 md:flex md:flex-col">
      <h1 className="hidden md:block font-uberBold text-black text-6xl">
        Uber clone
      </h1>
      <div className="w-screen h-full max-w-md bg-white md:max-h-[900px] md:m-8 md:rounded-3xl md:border-4 md:border-black relative">
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <HomePageProvider>
                  <Home />
                </HomePageProvider>
              }
            />
            <Route path="/services" element={<Services />} />
            <Route path="/activity" element={<Activity />} />
            <Route path="/account" element={<Account />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Navbar />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
