
import React, { useState } from 'react';
import { Mail, CheckCircle } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <section className="gradient-purple-blue py-16 px-4">
      <div className="container mx-auto text-center">
        <div className="max-w-2xl mx-auto">
          <Mail className="w-16 h-16 text-white mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Stay Updated
          </h2>
          <p className="text-purple-100 text-lg mb-8">
            Subscribe to our newsletter and be the first to know about new arrivals, 
            exclusive deals, and special offers!
          </p>

          {isSubscribed ? (
            <div className="bg-green-500 text-white p-4 rounded-lg flex items-center justify-center space-x-2 max-w-md mx-auto">
              <CheckCircle className="w-5 h-5" />
              <span>Thank you for subscribing!</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-4 py-3 rounded-full border-none focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <button
                type="submit"
                className="bg-yellow-400 text-purple-800 px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          )}

          <p className="text-purple-200 text-sm mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
