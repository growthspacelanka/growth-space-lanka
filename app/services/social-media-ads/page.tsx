'use client';

import React from 'react';
import SocialAdsHero from '@/components/services/social-media-ads/SocialAdsHero';
import SocialAdsFeatures from '@/components/services/social-media-ads/SocialAdsFeatures';
import SocialAdsHowWeRunAds from '@/components/services/social-media-ads/SocialAdsHowWeRunAds';
import SocialAdsPackages from '@/components/services/social-media-ads/SocialAdsPackages';
import SocialAdsFAQ from '@/components/services/social-media-ads/SocialAdsFAQ';
import CTASection from '@/components/home/CTASection';
import { content } from '@/content';

export default function SocialMediaAdsPage() {
    const cta = content.services.socialAds.cta;
    return (
        <>
            <SocialAdsHero />
            <SocialAdsFeatures />
            <SocialAdsHowWeRunAds />
            <SocialAdsPackages />
            <SocialAdsFAQ />
            <CTASection
                title={cta.title}
                description={cta.description}
                button={cta.button}
                href="/book-a-call"
            />
        </>
    );
}
