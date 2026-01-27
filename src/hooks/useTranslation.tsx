// src/hooks/useTranslation.tsx
'use client';

import React, { createContext, useContext, type ReactNode } from 'react';
import { translations, TranslationKey } from '@/translations';

interface TranslationContextValue {
  t: (key: TranslationKey) => string;
}

const TranslationContext = createContext<TranslationContextValue>({
  t: (key: TranslationKey) => key,
});

interface TranslationProviderProps {
  children: ReactNode;
}

export function TranslationProvider({ children }: TranslationProviderProps) {
  const t = (key: TranslationKey): string => {
    return translations.en[key] || key;
  };

  const contextValue: TranslationContextValue = {
    t,
  };

  return (
    <TranslationContext.Provider value={contextValue}>
      {children}
    </TranslationContext.Provider>
  );
}

export function useTranslation(): TranslationContextValue {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
}