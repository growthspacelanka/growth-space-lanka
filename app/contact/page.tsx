'use client';

import React from 'react';
import PageHeader from '@/components/common/PageHeader';
import ContactInfo from '@/components/contact/ContactInfo';
import { content } from '@/content';

export default function ContactPage() {
    return (
        <>
            <PageHeader
                title={content.contact.page.title}
                description={content.contact.page.description}
            />
            <ContactInfo />
        </>
    );
}