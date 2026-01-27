// app/book-a-call/page.tsx
'use client';

import React from 'react';

export default function BookACall() {
  const calUrl = 'https://cal.com/growth-space-lanka-p3bfrc/15min?embed=1';

  return (
    <main className="flex h-full items-center justify-center">
      <div className="main text-default flex min-h-full w-full flex-col items-center overflow-visible">
        <div className="max-w-[1200px] w-full px-4 py-8">
          <div
            className="booker rounded-md border p-0"
            style={{
              '--booker-meta-width': '280px',
              '--booker-main-width': '640px',
              '--booker-timeslots-width': '280px',
              display: 'grid',
              gridTemplateColumns: 'var(--booker-meta-width) 1fr var(--booker-timeslots-width)',
              gap: '16px',
              minHeight: '650px',
            } as React.CSSProperties}
          >
            <div style={{ gridColumn: '1 / 4' }}>
              <iframe
                src={calUrl}
                title="Book a call"
                style={{
                  width: '100%',
                  height: '650px',
                  border: 'none',
                  borderRadius: 12,
                  overflow: 'hidden',
                }}
                loading="lazy"
                sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-modals"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

