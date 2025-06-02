import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
}

interface CardContentProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children }: CardProps) {
  return <div className="bg-white rounded-lg shadow">{children}</div>;
}

export function CardContent({ children, className }: CardContentProps) {
  return <div className={className}>{children}</div>;
} 