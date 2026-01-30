'use client';

import React from 'react';
import SocialMediaHero from '@/components/services/social-media-management/SocialMediaHero';
import SocialMediaFeatures from '@/components/services/social-media-management/SocialMediaFeatures';
import SocialMediaHowWeManageIt from '@/components/services/social-media-management/SocialMediaHowWeManageIt';
import SocialMediaPackages from '@/components/services/social-media-management/SocialMediaPackages';
import SocialMediaFAQ from '@/components/services/social-media-management/SocialMediaFAQ';
import CTASection from '@/components/home/CTASection';
import { content } from '@/content';

export default function SocialMediaManagementPage() {
    const cta = content.services.socialMedia.cta;
    return (
        <>
            <SocialMediaHero />
            <SocialMediaFeatures />
            <SocialMediaHowWeManageIt />
            <SocialMediaPackages />
            <SocialMediaFAQ />
            <CTASection
                title={cta.title}
                description={cta.description}
                button={cta.button}
                href="/book-a-call"
            />
        </>
    );
}
