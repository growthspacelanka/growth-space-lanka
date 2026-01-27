// components/contact/ContactInfo.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '@/hooks/useTranslation';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactInfo = () => {
    const { t } = useTranslation();

    const contactDetails = [
        {
            icon: <Mail className="w-6 h-6" />,
            title: t('contact.info.email.title'),
            content: 'hello@gotomarket.de',
            link: 'mailto:hello@gotomarket.de'
        },
        {
            icon: <Phone className="w-6 h-6" />,
            title: t('contact.info.phone.title'),
            content: '+49 123 456 789',
            link: 'tel:+49123456789'
        },
        {
            icon: <MapPin className="w-6 h-6" />,
            title: t('contact.info.address.title'),
            content: t('contact.info.address.content'),
            link: 'https://maps.google.com'
        }
    ];

    return (
        <section className="pt-20 md:pt-40">
            <div className="container mx-auto px-4">
                <div className="max-w-5xl mx-auto">
                    {/* Title */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-20"
                    >
                        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter">
                            {t('contact.info.title')}
                        </h2>
                        <p className="text-xl text-gray-500 font-light mt-6">
                            {t('contact.info.description')}
                        </p>
                    </motion.div>

                    {/* Contact Details */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {contactDetails.map((detail, index) => (
                            <motion.a
                                key={index}
                                href={detail.link}
                                target={detail.link.startsWith('http') ? '_blank' : undefined}
                                rel={detail.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="p-8 bg-white rounded-2xl border border-gray-100 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 group"
                            >
                                <div className="flex flex-col items-center text-center space-y-4">
                                    <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                        {detail.icon}
                                    </div>
                                    <h3 className="text-xl font-semibold">
                                        {detail.title}
                                    </h3>
                                    <p className="text-gray-500">
                                        {detail.content}
                                    </p>
                                </div>
                            </motion.a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactInfo;