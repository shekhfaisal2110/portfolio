import React from 'react';

// Badge component accepts variant (color styles), className (for custom styles), and children (content).
const Badge = ({ variant = 'default', className = '', children }) => {
  const badgeVariants = {
    default: 'bg-gray-200 text-gray-800 border border-gray-400',
    outline: 'bg-transparent text-gray-800 border border-gray-500',
    primary: 'bg-blue-500 text-white',
    secondary: 'bg-green-500 text-white',
    danger: 'bg-red-500 text-white',
    success: 'bg-green-700 text-white',
  };

  return (
    <span
      className={`inline-block px-3 py-1 text-sm font-semibold rounded-lg ${badgeVariants[variant]} ${className}`}
    >
      {children}
    </span>
  );
};

export default Badge; // Correct export syntax
