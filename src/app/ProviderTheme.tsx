'use client';

import React from 'react';
import { ThemeProvider } from 'next-themes';

export function ProviderTheme({
    children,
  }: {
    children: React.ReactNode
  }){
    return (
        <ThemeProvider>
            {children}
        </ThemeProvider>
    )
}