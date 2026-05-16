import React, { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';

const Diensten = lazy(() => import('./pages/Diensten').then(module => ({ default: module.Diensten })));
const Projecten = lazy(() => import('./pages/Projecten').then(module => ({ default: module.Projecten })));
const OverOns = lazy(() => import('./pages/OverOns').then(module => ({ default: module.OverOns })));
const Contact = lazy(() => import('./pages/Contact').then(module => ({ default: module.Contact })));

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col font-body">
        <Navbar />
        <main className="flex-grow">
          <Suspense fallback={<div className="flex bg-[#0F0A09] min-h-screen flex-col items-center justify-center"><div className="w-12 h-12 border-4 border-[#1a1210] border-t-[#D4A44C] rounded-full animate-spin"></div></div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/diensten" element={<Diensten />} />
              <Route path="/projecten" element={<Projecten />} />
              <Route path="/over-ons" element={<OverOns />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
