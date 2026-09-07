import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '../lib/utils';
import Button from './Button';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Our Work', path: '/portfolio' },
    { name: 'Ladies in Tech', path: '/ladies-in-tech' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b",
        scrolled 
          ? "bg-brand-light/90 backdrop-blur-md border-brand-border py-4 shadow-sm" 
          : "bg-transparent border-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2 z-50">
          <span className={cn("font-heading font-bold text-2xl tracking-tight transition-colors", scrolled ? "text-brand-dark" : "text-brand-dark")}>
            FLASH<span className="text-brand-primary">DEV</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className={cn(
                "text-sm font-semibold transition-colors hover:text-brand-primary",
                location.pathname === link.path ? "text-brand-primary" : "text-brand-gray"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Button to="/contact" size="sm">Start a Project &rarr;</Button>
        </nav>

        {/* Mobile Nav Toggle */}
        <button 
          className="lg:hidden text-brand-dark z-50 p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        </div>
      </header>

      {/* Mobile Nav Menu */}
      <div 
        className={cn(
          "fixed inset-0 bg-brand-light flex flex-col justify-center items-center space-y-8 transition-transform duration-300 ease-in-out lg:hidden z-40",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {navLinks.map((link) => (
          <Link 
            key={link.name} 
            to={link.path}
            className={cn(
              "text-2xl font-heading font-bold transition-colors",
              location.pathname === link.path ? "text-brand-primary" : "text-brand-dark"
            )}
          >
            {link.name}
          </Link>
        ))}
        <Button to="/contact" className="mt-8">Start a Project &rarr;</Button>
      </div>
    </>
  );
}
