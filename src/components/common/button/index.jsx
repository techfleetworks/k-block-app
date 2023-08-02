import React from 'react';

const Button = ({ variant, className, onClick, children }) => {
  let buttonClassName =
    'px-4 py-2 rounded-md font-semibold focus:outline-none transition-colors';

  if (variant === 'primary') {
    buttonClassName += ' bg-black text-white hover:bg-gray-800';
  } else if (variant === 'secondary') {
    buttonClassName += ' bg-gray-200 text-black hover:bg-gray-300';
  } else if (variant === 'link') {
    buttonClassName +=
      ' bg-transparent text-blue-700 hover:text-white border border-blue-500 hover:border-transparent';
  }

  buttonClassName += ` ${className}`;

  return (
    <button className={buttonClassName} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
