import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 bg-white z-50 ${isScrolled ? 'shadow-sm' : ''}`}>
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <span className="text-black font-montserrat text-2xl font-bold">a<span className="text-[#FF0000]">v</span>o</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <Link href="/" className={`uppercase text-sm font-montserrat tracking-wide transition duration-300 ${location === '/' ? 'text-[#FF0000]' : 'text-[#333333] hover:text-[#FF0000]'}`}>
            HOME
          </Link>
          <Link href="/about" className={`uppercase text-sm font-montserrat tracking-wide transition duration-300 ${location === '/about' ? 'text-[#FF0000]' : 'text-[#333333] hover:text-[#FF0000]'}`}>
            ABOUT
          </Link>
          <Link href="/work" className={`uppercase text-sm font-montserrat tracking-wide transition duration-300 ${location === '/work' ? 'text-[#FF0000]' : 'text-[#333333] hover:text-[#FF0000]'}`}>
            WORK
          </Link>
          <Link href="/blog" className={`uppercase text-sm font-montserrat tracking-wide transition duration-300 ${location === '/blog' ? 'text-[#FF0000]' : 'text-[#333333] hover:text-[#FF0000]'}`}>
            BLOG
          </Link>
          <Link href="/contact" className={`uppercase text-sm font-montserrat tracking-wide transition duration-300 ${location === '/contact' ? 'text-[#FF0000]' : 'text-[#333333] hover:text-[#FF0000]'}`}>
            CONTACT
          </Link>
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button 
            type="button" 
            className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600" 
            aria-label="toggle menu"
            onClick={toggleMenu}
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
              <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-4 py-2 space-y-1">
            <Link href="/" className={`block py-2 ${location === '/' ? 'text-[#FF0000]' : 'text-[#333333]'}`}>
              HOME
            </Link>
            <Link href="/about" className={`block py-2 ${location === '/about' ? 'text-[#FF0000]' : 'text-[#333333]'}`}>
              ABOUT
            </Link>
            <Link href="/work" className={`block py-2 ${location === '/work' ? 'text-[#FF0000]' : 'text-[#333333]'}`}>
              WORK
            </Link>
            <Link href="/blog" className={`block py-2 ${location === '/blog' ? 'text-[#FF0000]' : 'text-[#333333]'}`}>
              BLOG
            </Link>
            <Link href="/contact" className={`block py-2 ${location === '/contact' ? 'text-[#FF0000]' : 'text-[#333333]'}`}>
              CONTACT
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
