'use client';

import React from 'react';
import PageHeader from '@/components/common/PageHeader';
import ContactForm from '@/components/contact/ContactForm';
import ContactInfo from '@/components/contact/ContactInfo';

export default function ContactPage() {
    return (
        <>
            <PageHeader
                titleKey="contact.page.title"
                descriptionKey="contact.page.description"
            />
            <ContactInfo />

            <ContactForm />

            {/* Contact Info section will be added here */}
        </>
    );
}