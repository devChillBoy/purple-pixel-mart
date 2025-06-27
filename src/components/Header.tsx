
import React, { useState } from 'react';
import { Search, ShoppingCart, User, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { getTotalItems } = useCart();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top banner */}
      <div className="gradient-purple-blue text-white py-2 px-4 text-center text-sm">
        Free shipping on orders over $50! 🚚
      </div>
      
      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="gradient-purple-blue text-white p-2 rounded-lg">
              <div className="w-8 h-8 flex items-center justify-center font-bold text-xl">
                D
              </div>
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              DigiShop
            </h1>
          </Link>

          {/* Search bar */}
          <div className="hidden md:flex flex-1 max-w-xl mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search for products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 pl-12 border-2 border-gray-200 rounded-full focus:border-purple-500 focus:outline-none transition-colors"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>
          </div>

          {/* User actions */}
          <div className="flex items-center space-x-4">
            <button className="hidden md:flex items-center space-x-2 text-gray-700 hover:text-purple-600 transition-colors">
              <User className="w-5 h-5" />
              <span>Account</span>
            </button>
            
            <Link to="/cart" className="relative p-2 text-gray-700 hover:text-purple-600 transition-colors">
              <ShoppingCart className="w-6 h-6" />
              {getTotalItems() > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </Link>

            {/* Mobile menu button */}
            <button 
              className="md:hidden p-2"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile search */}
        <div className="md:hidden mt-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 pl-12 border-2 border-gray-200 rounded-full focus:border-purple-500 focus:outline-none"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-200">
            <nav className="space-y-2">
              <Link to="/shop" className="block py-2 text-gray-700 hover:text-purple-600">Shop</Link>
              <Link to="/about" className="block py-2 text-gray-700 hover:text-purple-600">About</Link>
              <Link to="/contact" className="block py-2 text-gray-700 hover:text-purple-600">Contact</Link>
              <Link to="/cart" className="block py-2 text-gray-700 hover:text-purple-600">Cart</Link>
              <a href="#" className="block py-2 text-gray-700 hover:text-purple-600">Account</a>
            </nav>
          </div>
        )}
      </div>

      {/* Navigation */}
      <nav className="hidden md:block bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex space-x-8 py-3">
            <Link to="/shop" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">Shop</Link>
            <Link to="/about" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">About</Link>
            <Link to="/contact" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">Contact</Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
