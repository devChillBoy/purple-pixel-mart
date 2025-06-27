
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Star, Heart, ShoppingCart, Minus, Plus, Truck, Shield, RotateCcw } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);

  // Mock product data - in real app, this would be fetched based on ID
  const product = {
    id: parseInt(id || '1'),
    name: 'iPhone 15 Pro Max 256GB',
    price: 1199,
    originalPrice: 1299,
    rating: 4.8,
    reviews: 324,
    images: ['📱', '📱', '📱', '📱'],
    description: 'The iPhone 15 Pro Max features a titanium design, A17 Pro chip, and advanced camera system with 5x Telephoto camera.',
    features: [
      'A17 Pro chip with 6-core GPU',
      '6.7-inch Super Retina XDR display',
      'Pro camera system (48MP Main, 12MP Ultra Wide, 12MP Telephoto)',
      'Up to 29 hours video playback',
      'Face ID for secure authentication'
    ],
    specifications: {
      'Display': '6.7-inch Super Retina XDR',
      'Chip': 'A17 Pro',
      'Storage': '256GB',
      'Camera': '48MP Pro camera system',
      'Battery': 'Up to 29 hours video playback',
      'Water Resistance': 'IP68'
    }
  };

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    console.log(`Added ${quantity} ${product.name} to cart`);
  };

  const increaseQuantity = () => setQuantity(prev => prev + 1);
  const decreaseQuantity = () => setQuantity(prev => prev > 1 ? prev - 1 : 1);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <button 
          onClick={() => navigate(-1)}
          className="text-purple-600 hover:text-purple-800 mb-4"
        >
          ← Back to Products
        </button>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-white rounded-lg shadow-md overflow-hidden">
              <div className="w-full h-full flex items-center justify-center text-9xl">
                {product.images[selectedImage]}
              </div>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square bg-white rounded-lg border-2 flex items-center justify-center text-2xl ${
                    selectedImage === index ? 'border-purple-500' : 'border-gray-200'
                  }`}
                >
                  {image}
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">{product.name}</h1>
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
                <span className="text-gray-600">({product.reviews} reviews)</span>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <span className="text-3xl font-bold text-purple-600">${product.price}</span>
              <span className="text-xl text-gray-500 line-through">${product.originalPrice}</span>
              <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-semibold">
                Save ${product.originalPrice - product.price}
              </span>
            </div>

            <p className="text-gray-600 leading-relaxed">{product.description}</p>

            {/* Quantity and Add to Cart */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <span className="font-medium">Quantity:</span>
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button onClick={decreaseQuantity} className="p-2 hover:bg-gray-100">
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-4 py-2 min-w-12 text-center">{quantity}</span>
                  <button onClick={increaseQuantity} className="p-2 hover:bg-gray-100">
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="flex space-x-4">
                <button 
                  onClick={handleAddToCart}
                  className="flex-1 gradient-purple-blue text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center justify-center space-x-2"
                >
                  <ShoppingCart className="w-5 h-5" />
                  <span>Add to Cart</span>
                </button>
                <button 
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className={`p-3 rounded-lg border-2 transition-colors ${
                    isWishlisted ? 'bg-red-500 text-white border-red-500' : 'border-gray-300 hover:border-red-500'
                  }`}
                >
                  <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-current' : ''}`} />
                </button>
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-4 py-6 border-t border-b border-gray-200">
              <div className="text-center space-y-2">
                <Truck className="w-6 h-6 text-purple-600 mx-auto" />
                <p className="text-sm font-medium">Free Shipping</p>
                <p className="text-xs text-gray-500">On orders over $50</p>
              </div>
              <div className="text-center space-y-2">
                <Shield className="w-6 h-6 text-purple-600 mx-auto" />
                <p className="text-sm font-medium">Warranty</p>
                <p className="text-xs text-gray-500">1 year warranty</p>
              </div>
              <div className="text-center space-y-2">
                <RotateCcw className="w-6 h-6 text-purple-600 mx-auto" />
                <p className="text-sm font-medium">Returns</p>
                <p className="text-xs text-gray-500">30-day returns</p>
              </div>
            </div>

            {/* Key Features */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Key Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Specifications */}
        <div className="mt-12 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-6">Specifications</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {Object.entries(product.specifications).map(([key, value]) => (
              <div key={key} className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium text-gray-700">{key}</span>
                <span className="text-gray-600">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetail;
