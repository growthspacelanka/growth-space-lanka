'use client';

import React from 'react';
import AboutHero from '@/components/about/AboutHero';
import AboutStory from '@/components/about/AboutStory';
import VisionMission from '@/components/about/VisionMission';
import TeamSection from '@/components/about/TeamSection';
import CTASection from '@/components/home/CTASection';
import { content } from '@/content';

export default function AboutPage() {
    const aboutCta = content.about.ctaSection;
    return (
        <>
            <AboutHero />
            <AboutStory />
            <VisionMission />
            <TeamSection />
            <CTASection
                title={aboutCta.title}
                description={aboutCta.description}
                button={aboutCta.button}
                href="/book-a-call"
            />
        </>
    );
}