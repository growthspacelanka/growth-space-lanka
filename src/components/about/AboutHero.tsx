'use client';

import React from 'react';
import PageHeader from '@/components/common/PageHeader';

const AboutHero: React.FC = () => {
    return (
        <PageHeader
            titleKey="about.title"
            descriptionKey="about.subtitle"
        />
    );
};

export default AboutHero;