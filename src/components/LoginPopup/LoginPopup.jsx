import React, { useState } from 'react';
import { X } from 'lucide-react';

const LoginPopup = ({ setShowLogin }) => {
  // State to toggle between signup and login forms
  const [isLogin, setIsLogin] = useState(false);
  
  // Form data state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    agreeTerms: false
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      {/* Popup Container */}
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md mx-4 p-6">
        {/* Close Button */}
        <div className="flex justify-end mb-4">
          <button 
            onClick={() => setShowLogin(false)}
            className="text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Close popup"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Form Header */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">
            {isLogin ? 'Login' : 'Create Account'}
          </h2>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field - Only for Signup */}
          {!isLogin && (
            <div className="mb-5">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 placeholder-gray-800 placeholder:font-semibold"
                placeholder="Enter your name"
                required={!isLogin}
              />
            </div>
          )}

          {/* Email/Phone Field */}
          <div className="mb-5">
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 placeholder-gray-800 placeholder:font-semibold"
              placeholder="Enter email or phone number"
              required
            />
          </div>

          {/* Password Field */}
          <div className="mb-5">
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 placeholder-gray-800 placeholder:font-semibold"
              placeholder="Enter password"
              required 
            />
          </div>

          {/* Terms Checkbox - Only for Signup */}
          {!isLogin && (
            <div className="flex items-start space-x-2 mb-5">
              <input
                type="checkbox"
                name="agreeTerms"
                checked={formData.agreeTerms}
                onChange={handleInputChange}
                className="mt-1 h-4 w-4 text-orange-500 focus:ring-orange-500 border-gray-300 rounded"
                required
              />
              <label className="text-sm text-gray-700">
                By continuing, I agree to the Terms and Conditions.
              </label>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-900 text-white font-semibold py-2 px-4 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
          >
            {isLogin ? 'Login' : 'Create Account'}
          </button>
        </form>

        {/* Toggle Link */}
     <div className="text-center mt-4">
  {isLogin ? (
    <p className="text-sm font-medium">
      Don't have an account?{" "}
      <button
        onClick={() => setIsLogin(false)}
        className="text-orange-500 hover:text-orange-900 transition-colors"
      >
        Sign up here
      </button>
    </p>
  ) : (
    <p className="text-sm font-medium">
      Already have an account?{" "}
      <button
        onClick={() => setIsLogin(true)}
        className="text-orange-500 hover:text-orange-900 transition-colors"
      >
        Login here
      </button>
    </p>
  )}
</div>

      </div>
    </div>
  );
};

export default LoginPopup;
