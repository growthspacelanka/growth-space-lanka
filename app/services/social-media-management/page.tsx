'use client';

import React from 'react';
import SocialMediaHero from '@/components/services/social-media-management/SocialMediaHero';
import CTASection from '@/components/home/CTASection';

export default function SocialMediaManagementPage() {
    return (
        <>
            <SocialMediaHero />
            {/* Placeholder content - to be optimized later */}
            <section className="py-20 md:py-40 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto text-center">
                        <p className="text-xl text-gray-500 font-light">
                            Content coming soon. This page will be optimized with detailed information about our Social Media Management packages.
                        </p>
                    </div>
                </div>
            </section>
            <CTASection />
        </>
    );
}
