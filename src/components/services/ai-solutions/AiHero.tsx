'use client';

import React from 'react';
import PageHeader from '@/components/common/PageHeader';
import { content } from '@/content';

const AiHero = () => {
    return (
        <PageHeader
            title={content.services.ai.page.title}
            description={content.services.ai.page.description}
        />
    );
};

export default AiHero;