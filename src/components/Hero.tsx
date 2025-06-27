
import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="gradient-purple-blue text-white py-16 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="animate-slide-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Shop Smart,
              <br />
              <span className="text-yellow-300">Save More!</span>
            </h1>
            <p className="text-xl mb-8 text-purple-100">
              Discover amazing deals on thousands of products. From electronics to fashion, 
              we have everything you need at unbeatable prices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/shop"
                className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center group"
              >
                Shop Now
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/shop"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-colors text-center"
              >
                View Categories
              </Link>
            </div>
          </div>
          <div className="text-center">
            <div className="relative">
              <div className="w-80 h-80 mx-auto bg-white bg-opacity-20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <div className="w-64 h-64 bg-white bg-opacity-30 rounded-full flex items-center justify-center">
                  <div className="text-6xl">🛍️</div>
                </div>
              </div>
              <div className="absolute top-8 left-8 bg-yellow-400 text-purple-800 px-4 py-2 rounded-full font-bold text-sm transform rotate-12">
                50% OFF
              </div>
              <div className="absolute bottom-8 right-8 bg-pink-400 text-white px-4 py-2 rounded-full font-bold text-sm transform -rotate-12">
                Free Ship
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
