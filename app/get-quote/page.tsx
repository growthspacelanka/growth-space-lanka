// app/get-quote/page.tsx
'use client';

import React, { useEffect } from 'react';

export default function GetQuote() {
  useEffect(() => {
    // Inject Cal.com embed script and initialize calendar
    if (typeof window === 'undefined') return;

    // Avoid injecting multiple times
    if ((window as any).Cal && (window as any).Cal.loaded) {
      // initialize namespace if necessary
      try {
        (window as any).Cal('init', '15min', { origin: 'https://app.cal.com' });
        (window as any).Cal.ns['15min']('inline', {
          elementOrSelector: '#my-cal-inline-15min',
          config: { layout: 'month_view', useSlotsViewOnSmallScreen: true },
          calLink: 'growth-space-lanka-p3bfrc/15min',
        });
        (window as any).Cal.ns['15min']('ui', { hideEventTypeDetails: true, layout: 'month_view' });
      } catch (e) {
        // ignore
      }
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://app.cal.com/embed/embed.js';
    script.async = true;
    script.onload = () => {
      try {
        (window as any).Cal('init', '15min', { origin: 'https://app.cal.com' });
        (window as any).Cal.ns['15min']('inline', {
          elementOrSelector: '#my-cal-inline-15min',
          config: { layout: 'month_view', useSlotsViewOnSmallScreen: true },
          calLink: 'growth-space-lanka-p3bfrc/15min',
        });
        (window as any).Cal.ns['15min']('ui', { hideEventTypeDetails: true, layout: 'month_view' });
      } catch (e) {
        // ignore
      }
    };
    document.head.appendChild(script);

    return () => {
      // optional cleanup: remove script (leave Cal loaded)
    };
  }, []);

  return (
    <div style={{ width: '100%', minHeight: '80vh' }}>
      <div id="my-cal-inline-15min" style={{ width: '100%', height: '100%' }} />
    </div>
  );
}