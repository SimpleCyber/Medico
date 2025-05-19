import React from 'react';

const Button = ({ children, variant = "primary", icon, className = "" }) => {
  let variantClasses = "";

  if (variant === "primary") {
    variantClasses = "bg-blue-600 text-white hover:bg-blue-700";
  } else if (variant === "secondary") {
    variantClasses = "bg-transparent text-blue-600 border border-blue-700 hover:bg-blue-700 hover:text-white";
  } else {
    // fallback/default styles
    variantClasses = "border border-gray-300 bg-white text-gray-800 hover:bg-gray-50";
  }

  return (
    <button
      className={`flex items-center justify-center gap-2 rounded-full font-medium transition-colors ${variantClasses} ${className}`}
    >
      <span>{children}</span>
      {icon}
    </button>
  );
};

export default Button;
