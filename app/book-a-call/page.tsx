'use client';

import React, { useEffect } from 'react';
import PageHeader from '@/components/common/PageHeader';

export default function BookACallPage() {
  useEffect(() => {
    // Load Cal.com embed script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.innerHTML = `
      (function (C, A, L) { 
        let p = function (a, ar) { a.q.push(ar); }; 
        let d = C.document; 
        C.Cal = C.Cal || function () { 
          let cal = C.Cal; 
          let ar = arguments; 
          if (!cal.loaded) { 
            cal.ns = {}; 
            cal.q = cal.q || []; 
            d.head.appendChild(d.createElement("script")).src = A; 
            cal.loaded = true; 
          } 
          if (ar[0] === L) { 
            const api = function () { p(api, arguments); }; 
            const namespace = ar[1]; 
            api.q = api.q || []; 
            if(typeof namespace === "string"){
              cal.ns[namespace] = cal.ns[namespace] || api;
              p(cal.ns[namespace], ar);
              p(cal, ["initNamespace", namespace]);
            } else p(cal, ar); 
            return;
          } 
          p(cal, ar); 
        }; 
      })(window, "https://app.cal.com/embed/embed.js", "init");
      
      Cal("init", "15min", {origin:"https://app.cal.com"});
      
      Cal.ns["15min"]("inline", {
        elementOrSelector:"#my-cal-inline-15min",
        config: {"layout":"month_view","useSlotsViewOnSmallScreen":"true"},
        calLink: "growth-space-lanka/15min",
      });
      
      Cal.ns["15min"]("ui", {
        "hideEventTypeDetails":false,
        "layout":"month_view",
        "theme":"light"
      });
    `;
    document.head.appendChild(script);

    return () => {
      // Cleanup: remove script on unmount
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <>
      <PageHeader
        titleKey="bookACall.page.title"
        descriptionKey="bookACall.page.description"
      />
      <main className="flex min-h-screen items-center justify-center py-8">
        <div className="container mx-auto px-4 flex justify-center">
          <div className="w-full max-w-6xl">
            <div className="rounded-lg overflow-hidden">
              <div 
                id="my-cal-inline-15min" 
                style={{
                  width: '100%',
                  height: '100%',
                  overflow: 'scroll',
                  minHeight: '700px'
                }}
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
