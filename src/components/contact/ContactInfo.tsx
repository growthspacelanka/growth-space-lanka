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
            icon: <Mail className="w-8 h-8 md:w-10 md:h-10" />,
            title: t('contact.info.email.title'),
            content: 'hello@gotomarket.de',
            link: 'mailto:hello@gotomarket.de'
        },
        {
            icon: <Phone className="w-8 h-8 md:w-10 md:h-10" />,
            title: t('contact.info.phone.title'),
            content: '+49 123 456 789',
            link: 'tel:+49123456789'
        },
        {
            icon: <MapPin className="w-8 h-8 md:w-10 md:h-10" />,
            title: t('contact.info.address.title'),
            content: t('contact.info.address.content'),
            link: 'https://maps.google.com'
        }
    ];

    return (
        <section className="py-20 md:py-40">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    {/* Title */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-16 md:mb-24"
                    >
                        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter font-barlow-condensed uppercase">
                            {t('contact.info.title')}
                        </h2>
                        <p className="text-xl md:text-2xl text-gray-500 font-light mt-6 uppercase tracking-tight">
                            {t('contact.info.description')}
                        </p>
                    </motion.div>

                    {/* Contact Details */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
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
                                className="p-10 md:p-12 bg-white rounded-xl border border-gray-100 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 group"
                            >
                                <div className="flex flex-col items-center text-center space-y-6">
                                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                        {detail.icon}
                                    </div>
                                    <h3 className="text-xl md:text-2xl font-bold font-barlow-condensed uppercase tracking-tighter">
                                        {detail.title}
                                    </h3>
                                    <p className="text-base md:text-lg text-gray-600 leading-relaxed">
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