// app/book-a-call/page.tsx
'use client';

import React, { useEffect } from 'react';

export default function BookACall() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const calLink = 'growth-space-lanka-p3bfrc/15min';

    const initCal = () => {
      try {
        (window as any).Cal('init', '15min', { origin: 'https://app.cal.com' });
        (window as any).Cal.ns['15min']('inline', {
          elementOrSelector: '#cal-inline-container',
          config: { layout: 'month_view', useSlotsViewOnSmallScreen: true },
          calLink,
        });
        (window as any).Cal.ns['15min']('ui', { hideEventTypeDetails: true, layout: 'month_view' });
      } catch (e) {
        // Ignore initialization errors; script probably not loaded yet.
      }
    };

    if ((window as any).Cal && (window as any).Cal.loaded) {
      initCal();
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://app.cal.com/embed/embed.js';
    script.async = true;
    script.onload = initCal;
    document.head.appendChild(script);
  }, []);

  return (
    <div className="min-h-[80vh]">
      <div id="cal-inline-container" style={{ width: '100%', height: '100%' }} />
    </div>
  );
}

