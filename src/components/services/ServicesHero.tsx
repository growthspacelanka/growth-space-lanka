'use client';

import React from 'react';
import PageHeader from '@/components/common/PageHeader';
import { content } from '@/content';

const ServicesHero = () => {
    return (
        <PageHeader
            title={content.services.title}
            description={content.services.subtitle}
        />
    );
};

export default ServicesHero;