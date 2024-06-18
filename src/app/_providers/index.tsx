'use client';

import React from 'react';

import { AuthProvider } from '../_providers/Auth';
import { CartProvider } from '../_providers/Cart';
import { ThemeProvider } from './Theme';
import { FilteerProvider } from './Filter';

export const Providers: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <ThemeProvider>
      <AuthProvider>
        <FilteerProvider>
          <CartProvider>{children}</CartProvider>
        </FilteerProvider>
      </AuthProvider>
    </ThemeProvider>
  );
};
