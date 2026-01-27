// app/get-quote/page.tsx
'use client';

import React, { useEffect, useState } from 'react';

export default function GetQuote() {
  const [error, setError] = useState<string | null>(null);
  const calLink = 'growth-space-lanka-p3bfrc/15min';

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const initCal = () => {
      try {
        (window as any).Cal('init', '15min', { origin: 'https://app.cal.com' });
        (window as any).Cal.ns['15min']('inline', {
          elementOrSelector: '#my-cal-inline-15min',
          config: { layout: 'month_view', useSlotsViewOnSmallScreen: true },
          calLink,
        });
        (window as any).Cal.ns['15min']('ui', { hideEventTypeDetails: true, layout: 'month_view' });
      } catch (e: any) {
        console.error('Cal init error:', e);
        setError(String(e?.message || e));
      }
    };

    // If already loaded, just init
    if ((window as any).Cal && (window as any).Cal.loaded) {
      initCal();
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://app.cal.com/embed/embed.js';
    script.async = true;
    script.onload = () => {
      initCal();
    };
    script.onerror = (e) => {
      console.error('Failed to load Cal script', e);
      setError('Failed to load Cal.com embed script.');
    };
    document.head.appendChild(script);

    return () => {
      // no-op
    };
  }, []);

  return (
    <div style={{ width: '100%', minHeight: '80vh' }}>
      {error ? (
        <div className="max-w-3xl mx-auto p-8">
          <p className="text-red-600 font-semibold mb-4">Failed to load booking widget</p>
          <p className="text-gray-700 mb-4">{error}</p>
          <p className="mb-4">You can still open the booking page directly:</p>
          <a
            href={`https://cal.com/${calLink}`}
            target="_blank"
            rel="noreferrer"
            className="inline-block px-6 py-3 bg-primary text-white rounded-full"
          >
            Open booking page
          </a>
        </div>
      ) : (
        <div id="my-cal-inline-15min" style={{ width: '100%', height: '100%' }} />
      )}
    </div>
  );
}