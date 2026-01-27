'use client';

import React from 'react';
import ServicesHero from '@/components/services/ServicesHero';
import ServicesList from '@/components/services/ServicesList';
import CTASection from '@/components/home/CTASection';

export default function ServicesPage() {
    return (
        <>
            <ServicesHero />
            <ServicesList />
            <CTASection />
        </>
    );
}