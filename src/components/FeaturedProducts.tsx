
import React from 'react';
import ProductCard from './ProductCard';
import { Link } from 'react-router-dom';

const FeaturedProducts = () => {
  const featuredProducts = [
    {
      id: 1,
      name: 'iPhone 15 Pro Max 256GB',
      price: 1199,
      originalPrice: 1299,
      rating: 4.8,
      reviews: 324,
      image: '📱',
      badge: 'Best Seller',
      discount: 8
    },
    {
      id: 2,
      name: 'MacBook Air M2 13-inch',
      price: 999,
      originalPrice: 1199,
      rating: 4.9,
      reviews: 156,
      image: '💻',
      discount: 17
    },
    {
      id: 3,
      name: 'Samsung 65" QLED TV',
      price: 899,
      originalPrice: 1199,
      rating: 4.6,
      reviews: 89,
      image: '📺',
      badge: 'Hot Deal',
      discount: 25
    },
    {
      id: 4,
      name: 'Nike Air Max 270',
      price: 89,
      originalPrice: 129,
      rating: 4.5,
      reviews: 267,
      image: '👟',
      discount: 31
    },
    {
      id: 5,
      name: 'Sony WH-1000XM5 Headphones',
      price: 329,
      originalPrice: 399,
      rating: 4.9,
      reviews: 445,
      image: '🎧',
      badge: 'Editor\'s Choice',
      discount: 18
    },
    {
      id: 6,
      name: 'Canon EOS R6 Camera',
      price: 1899,
      originalPrice: 2499,
      rating: 4.7,
      reviews: 78,
      image: '📷',
      discount: 24
    },
    {
      id: 7,
      name: 'Apple Watch Series 9',
      price: 399,
      originalPrice: 449,
      rating: 4.8,
      reviews: 289,
      image: '⌚',
      discount: 11
    },
    {
      id: 8,
      name: 'iPad Pro 12.9" M2',
      price: 1099,
      originalPrice: 1299,
      rating: 4.9,
      reviews: 167,
      image: '📟',
      badge: 'New Arrival',
      discount: 15
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Featured Products
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover our handpicked selection of trending and popular products
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {featuredProducts.map((product, index) => (
            <div 
              key={product.id} 
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            to="/shop"
            className="gradient-purple-blue text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity inline-block"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
