'use client';

import React from 'react';
import AiHero from '@/components/services/ai-solutions/AiHero';
import AiFeatures from '@/components/services/ai-solutions/AiFeatures';
import AiTechStack from '@/components/services/ai-solutions/AiTechStack';
import AiFAQ from '@/components/services/ai-solutions/AiFAQ';
import CTASection from '@/components/home/CTASection';
export default function AiSolutionsPage() {
    return (
        <>
            <AiHero />
            <AiFeatures />
            <AiTechStack />
            <AiFAQ />
            <CTASection />
            {/* Other sections will be added here */}
        </>
    );
}