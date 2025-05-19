import React from 'react';

const Button = ({ children, variant = "primary", icon, className = "" }) => {
  return (
    <button
      className={`
        flex items-center justify-center gap-2 rounded-full font-medium transition-colors
        ${variant === "primary" 
          ? "bg-blue-600 text-white hover:bg-blue-700" 
          : "border border-gray-300 bg-white text-gray-800 hover:bg-gray-50"}
        ${className}
      `}
    >
      <span>{children}</span>
      {icon}
    </button>
  );
};

export default Button;