'use client';

import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const Container = ({ children, className = '' }: ContainerProps) => {
  return (
    <div className={`w-[1200px] mx-auto ${className}`}>
      {children}
    </div>
  );
};
