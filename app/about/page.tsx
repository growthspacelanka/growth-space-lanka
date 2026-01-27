'use client';

import React from 'react';
import AboutHero from '@/components/about/AboutHero';
import AboutStory from '@/components/about/AboutStory';
import VisionMission from '@/components/about/VisionMission';
import TeamSection from '@/components/about/TeamSection';
import CTASection from '@/components/home/CTASection';

export default function AboutPage() {
    return (
        <>
            <AboutHero />
            <AboutStory />
            <VisionMission />
            <TeamSection />
            <CTASection />
            {/* More sections will be added here */}
        </>
    );
}