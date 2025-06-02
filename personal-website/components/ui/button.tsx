import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'outline';
}

export function Button({ children, className, variant = "default", ...props }: ButtonProps) {
  const base = "px-4 py-2 rounded font-semibold";
  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-blue-600 text-blue-600 bg-white hover:bg-blue-50"
  };
  return (
    <button className={`${base} ${variants[variant]} ${className || ""}`} {...props}>
      {children}
    </button>
  );
} 