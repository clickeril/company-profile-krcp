import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { useEffect } from 'react';

export default function Layout() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 font-sans antialiased text-slate-900 selection:bg-accent selection:text-primary">
      <Navbar />
      <main className={`flex-grow w-full ${isHome ? 'pt-0' : 'pt-32 pb-10'}`}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
