import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const navLinks = [
  { text: 'Home', href: '/' },
  { text: 'About Us', href: '/about' },
  { text: 'Services', href: '/services' },
  { text: 'Portfolio', href: '/portfolio' },
  { text: 'Leadership', href: '/leadership' },
  { text: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = location.pathname === '/';

  return (
    <>
      {/* Topbar for Contact Details */}
      {/* <div className="hidden lg:flex w-full bg-slate-900 text-slate-300 py-2 border-b border-slate-800 text-xs font-medium z-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex justify-between items-center">
           <div className="flex items-center space-x-6">
              <span className="flex items-center"><Globe className="w-3 h-3 mr-2" /> Indonesia</span>
              <span className="flex items-center"><Phone className="w-3 h-3 mr-2" /> +62 21 0000 0000</span>
           </div>
           <div className="flex items-center space-x-4">
              <a href="#" className="hover:text-accent transition-colors">Careers</a>
              <a href="#" className="hover:text-accent transition-colors">News</a>
              <a href="#" className="hover:text-accent transition-colors">Client Portal</a>
           </div>
        </div>
      </div> */}

      <nav
        className={cn(
          "fixed w-full z-40 transition-all duration-500",
          scrolled || !isHome
            ? "bg-white shadow-md py-4 top-0"
            : "bg-transparent py-6 top-5",
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center group">
              <span
                className={cn(
                  "font-black text-2xl tracking-tighter transition-colors relative",
                  scrolled || !isHome ? "text-primary" : "text-white",
                )}
              >
                PT KRCP<span className="text-accent">.</span>
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-accent transition-all group-hover:w-full"></span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.href;
                const linkColor =
                  scrolled || !isHome
                    ? isActive
                      ? "text-accent"
                      : "text-slate-600 hover:text-primary"
                    : isActive
                      ? "text-accent"
                      : "text-slate-300 hover:text-white";

                return (
                  <Link
                    key={link.text}
                    to={link.href}
                    className={cn(
                      "px-4 py-2 text-sm font-semibold transition-all relative overflow-hidden group",
                      linkColor,
                    )}
                  >
                    <span className="relative z-10">{link.text}</span>
                    {isActive && (
                      <motion.div
                        className="absolute bottom-0 left-4 right-4 h-[2px] bg-accent"
                        layoutId="nav-underline"
                      />
                    )}
                  </Link>
                );
              })}

              <div className="pl-4 ml-2 border-l border-white/20">
                <Link
                  to="/contact"
                  className="bg-accent hover:bg-accent/90 text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all transform hover:scale-105 active:scale-95 shadow-md"
                >
                  Get a Quote
                </Link>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={cn(
                  "p-2 rounded-md transition-colors",
                  scrolled || !isHome ? "text-slate-800" : "text-white",
                )}
              >
                {isOpen ? (
                  <X className="h-7 w-7" />
                ) : (
                  <Menu className="h-7 w-7" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden absolute top-full left-0 w-full bg-white shadow-2xl border-t border-slate-100 overflow-hidden"
            >
              <div className="px-4 py-6 space-y-2 flex flex-col">
                {navLinks.map((link) => (
                  <Link
                    key={link.text}
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "px-4 py-3 rounded-lg text-lg font-bold transition-colors flex items-center justify-between",
                      location.pathname === link.href
                        ? "bg-primary/5 text-primary"
                        : "text-slate-700 hover:bg-slate-50 hover:text-primary",
                    )}
                  >
                    {link.text}
                  </Link>
                ))}
                <div className="pt-4 mt-2 border-t border-slate-100">
                  <Link
                    to="/contact"
                    onClick={() => setIsOpen(false)}
                    className="w-full flex justify-center bg-primary text-white font-bold py-4 rounded-xl text-lg"
                  >
                    Partner With Us
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
