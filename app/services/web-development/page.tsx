'use client';

import React from 'react';
import WebDevHero from '@/components/services/web-development/WebDevHero';
import WebDevFeatures from '@/components/services/web-development/WebDevFeatures';
import WebDevTechStack from '@/components/services/web-development/WebDevTechStack';
import WebDevFAQ from '@/components/services/web-development/WebDevFAQ';
import CTASection from '@/components/home/CTASection';

export default function WebDevelopmentPage() {
    return (
        <>
            <WebDevHero />
            <WebDevFeatures />
            <WebDevTechStack />
            <WebDevFAQ />
            <CTASection />
            {/* Other sections will be added here */}
        </>
    );
};