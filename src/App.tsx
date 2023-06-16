import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';

import Home from './pages/Home';
import Services from './pages/Services';
import Activity from './pages/Activity';
import Account from './pages/Account';
import { HomePageProvider } from './context/HomePageContext';
import NotFound from './pages/NotFound';
import Login from './pages/Login';

function App() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-green-100 md:flex md:flex-col">
      <h1 className="hidden md:block font-uberBold text-black text-6xl">
        Uber clone
      </h1>
      <div className="w-full min-h-screen max-w-md bg-white md:min-h-[75%] md:max-h-[900px] md:max-w-md md:m-8 md:rounded-3xl md:border-4 md:border-black relative">
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
            <Route path="/login" element={<Login />} />
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
