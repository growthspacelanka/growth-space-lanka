'use client';

import React from 'react';
import PageHeader from '@/components/common/PageHeader';
import { content } from '@/content';

const AboutHero: React.FC = () => {
    return (
        <PageHeader
            title={content.about.title}
            description={content.about.subtitle}
        />
    );
};

export default AboutHero;