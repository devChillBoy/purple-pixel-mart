
import React, { useState } from 'react';
import { Filter, Search, SlidersHorizontal } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';

const Shop = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [showFilters, setShowFilters] = useState(false);

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'electronics', name: 'Electronics' },
    { id: 'fashion', name: 'Fashion' },
    { id: 'home', name: 'Home & Garden' },
    { id: 'sports', name: 'Sports' },
    { id: 'books', name: 'Books' },
    { id: 'beauty', name: 'Beauty' }
  ];

  const products = [
    {
      id: 1,
      name: 'iPhone 15 Pro Max 256GB',
      price: 1199,
      originalPrice: 1299,
      rating: 4.8,
      reviews: 324,
      image: '📱',
      badge: 'Best Seller',
      discount: 8,
      category: 'electronics'
    },
    {
      id: 2,
      name: 'MacBook Air M2 13-inch',
      price: 999,
      originalPrice: 1199,
      rating: 4.9,
      reviews: 156,
      image: '💻',
      discount: 17,
      category: 'electronics'
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
      discount: 25,
      category: 'electronics'
    },
    {
      id: 4,
      name: 'Nike Air Max 270',
      price: 89,
      originalPrice: 129,
      rating: 4.5,
      reviews: 267,
      image: '👟',
      discount: 31,
      category: 'fashion'
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
      discount: 18,
      category: 'electronics'
    },
    {
      id: 6,
      name: 'Canon EOS R6 Camera',
      price: 1899,
      originalPrice: 2499,
      rating: 4.7,
      reviews: 78,
      image: '📷',
      discount: 24,
      category: 'electronics'
    },
    {
      id: 7,
      name: 'Apple Watch Series 9',
      price: 399,
      originalPrice: 449,
      rating: 4.8,
      reviews: 289,
      image: '⌚',
      discount: 11,
      category: 'electronics'
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
      discount: 15,
      category: 'electronics'
    },
    {
      id: 9,
      name: 'Adidas Running Shoes',
      price: 79,
      originalPrice: 99,
      rating: 4.4,
      reviews: 156,
      image: '👟',
      discount: 20,
      category: 'sports'
    },
    {
      id: 10,
      name: 'Coffee Maker Premium',
      price: 159,
      originalPrice: 199,
      rating: 4.6,
      reviews: 89,
      image: '☕',
      discount: 20,
      category: 'home'
    },
    {
      id: 11,
      name: 'Skincare Set Deluxe',
      price: 89,
      originalPrice: 119,
      rating: 4.5,
      reviews: 234,
      image: '🧴',
      discount: 25,
      category: 'beauty'
    },
    {
      id: 12,
      name: 'Programming Books Bundle',
      price: 49,
      originalPrice: 79,
      rating: 4.7,
      reviews: 167,
      image: '📚',
      discount: 38,
      category: 'books'
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'newest':
        return b.id - a.id;
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Shop</h1>
          <p className="text-gray-600">{filteredProducts.length} products found</p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500"
              />
            </div>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500"
            >
              {categories.map(category => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500"
            >
              <option value="featured">Featured</option>
              <option value="newest">Newest</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>

            <button 
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg"
            >
              <SlidersHorizontal className="w-4 h-4" />
              <span>Filters</span>
            </button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sortedProducts.map((product, index) => (
            <div 
              key={product.id} 
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">No products found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
      
      <Footer />
    </div>
  );
};

export default Shop;
