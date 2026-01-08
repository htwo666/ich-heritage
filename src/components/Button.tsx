import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  ...props 
}) => {
  const baseStyles = "px-6 py-2.5 rounded-lg font-medium transition-all duration-200 active:scale-95 flex items-center justify-center gap-2";
  const variants = {
    primary: "bg-[#C04851] text-white hover:bg-[#a03c44] shadow-md",
    secondary: "bg-[#e29c45] text-white hover:bg-[#d18b34] shadow-md",
    outline: "border-2 border-[#C04851] text-[#C04851] hover:bg-[#C04851] hover:text-white"
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};
