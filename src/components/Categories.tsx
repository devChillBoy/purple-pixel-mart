
import React from 'react';
import { Smartphone, Shirt, Home, Dumbbell, Book, Sparkles, Laptop, Watch } from 'lucide-react';

const Categories = () => {
  const categories = [
    { name: 'Electronics', icon: Smartphone, color: 'bg-blue-500', items: '12.5k' },
    { name: 'Fashion', icon: Shirt, color: 'bg-pink-500', items: '8.2k' },
    { name: 'Home & Garden', icon: Home, color: 'bg-green-500', items: '5.7k' },
    { name: 'Sports', icon: Dumbbell, color: 'bg-orange-500', items: '3.9k' },
    { name: 'Books', icon: Book, color: 'bg-indigo-500', items: '15.3k' },
    { name: 'Beauty', icon: Sparkles, color: 'bg-purple-500', items: '4.1k' },
    { name: 'Computers', icon: Laptop, color: 'bg-gray-500', items: '2.8k' },
    { name: 'Watches', icon: Watch, color: 'bg-yellow-500', items: '1.6k' },
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Shop by Category
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Explore our wide range of products across different categories
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.name}
                className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-xl transition-all duration-300 hover-scale cursor-pointer group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`${category.color} text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  <IconComponent className="w-8 h-8" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">{category.name}</h3>
                <p className="text-gray-500 text-sm">{category.items} items</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;
