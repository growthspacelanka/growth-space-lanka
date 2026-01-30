'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function GetQuoteRedirect() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      const timer = setTimeout(() => {
        router.replace('/book-a-call');
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [mounted, router]);

    return (
    <main className="flex h-full items-center justify-center min-h-screen">
      <div className="text-center">
        <p className="text-lg">Redirecting...</p>
                        </div>
    </main>
  );
}
