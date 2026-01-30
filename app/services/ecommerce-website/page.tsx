'use client';

import React from 'react';
import AiHero from '@/components/services/ai-solutions/AiHero';
import AiFeatures from '@/components/services/ai-solutions/AiFeatures';
import AiTechStack from '@/components/services/ai-solutions/AiTechStack';
import AiPackages from '@/components/services/ai-solutions/AiPackages';
import AiFAQ from '@/components/services/ai-solutions/AiFAQ';
import CTASection from '@/components/home/CTASection';

export default function EcommerceWebsitePage() {
    return (
        <>
            <AiHero />
            <AiFeatures />
            <AiTechStack />
            <AiPackages />
            <AiFAQ />
            <CTASection />
        </>
    );
}
