
import React from 'react';
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cartItems, updateQuantity, removeFromCart, getTotalPrice, getTotalItems } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <ShoppingBag className="w-24 h-24 text-gray-300 mx-auto mb-6" />
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Your cart is empty</h2>
          <p className="text-gray-600 mb-8">Add some products to your cart to see them here.</p>
          <Link 
            to="/shop" 
            className="gradient-purple-blue text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity inline-block"
          >
            Continue Shopping
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Shopping Cart</h1>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center text-2xl">
                    {item.image}
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800">{item.name}</h3>
                    <p className="text-purple-600 font-bold">${item.price}</p>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="p-1 hover:bg-gray-100 rounded"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-8 text-center">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="p-1 hover:bg-gray-100 rounded"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  
                  <div className="font-bold text-gray-800">
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>
                  
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="p-2 text-red-500 hover:bg-red-50 rounded"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          {/* Order Summary */}
          <div className="bg-white rounded-lg shadow-md p-6 h-fit">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Order Summary</h2>
            
            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span>Items ({getTotalItems()})</span>
                <span>${getTotalPrice().toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span className="text-green-600">Free</span>
              </div>
              <div className="flex justify-between">
                <span>Tax</span>
                <span>${(getTotalPrice() * 0.08).toFixed(2)}</span>
              </div>
              <div className="border-t pt-3">
                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span>${(getTotalPrice() * 1.08).toFixed(2)}</span>
                </div>
              </div>
            </div>
            
            <button className="w-full gradient-purple-blue text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity mb-3">
              Proceed to Checkout
            </button>
            
            <Link 
              to="/shop"
              className="block w-full text-center text-purple-600 hover:text-purple-800 font-medium"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Cart;
