'use client';

import React from 'react';
import PageHeader from '@/components/common/PageHeader';
import { content } from '@/content';

const WebDevHero = () => {
    return (
        <PageHeader
            title={content.services.webdev.page.title}
            description={content.services.webdev.page.description}
        />
    );
};

export default WebDevHero;