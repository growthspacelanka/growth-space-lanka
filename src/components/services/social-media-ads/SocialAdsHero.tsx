'use client';

import React from 'react';
import PageHeader from '@/components/common/PageHeader';
import { content } from '@/content';

const SocialAdsHero = () => {
    return (
        <PageHeader
            title={content.services.socialAds.page.title}
            description={content.services.socialAds.page.description}
        />
    );
};

export default SocialAdsHero;
