// Minimal fallback - returns empty string for unused translation keys
// This allows components that haven't been migrated yet to still work
'use client';

export function useTranslation() {
  return {
    t: (key: string) => {
      // Return empty string for now - these components should be migrated to content.ts
      console.warn(`Translation key "${key}" is deprecated. Please migrate to content.ts`);
      return '';
    },
  };
}
