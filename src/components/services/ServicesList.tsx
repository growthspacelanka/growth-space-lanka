'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Bot, Code2 } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';
import { TranslationKey } from '@/translations';

interface ServiceItem {
    icon: React.ReactNode;
    title: TranslationKey;
    description: TranslationKey;
    features: TranslationKey[];
    href: string;
}

const services: ServiceItem[] = [
    {
        icon: <Code2 className="w-10 h-10" />,
        title: 'services.webdev.title',
        description: 'services.webdev.description',
        features: [
            'services.webdev.feature1',
            'services.webdev.feature2',
            'services.webdev.feature3'
        ],
        href: '/services/web-development'
    },
    {
        icon: <Bot className="w-10 h-10" />,
        title: 'services.ai.title',
        description: 'services.ai.description',
        features: [
            'services.ai.feature1',
            'services.ai.feature2',
            'services.ai.feature3'
        ],
        href: '/services/ai-solutions'
    }
];

const ServicesList = () => {
    const { t } = useTranslation();

    return (
        <section className="py-20 md:py-40 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-5xl mx-auto space-y-8">
                    {services.map((service, index) => (
                        <Link
                            key={service.title}
                            href={service.href}
                            className="block"
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="group relative"
                            >
                                <div className="rounded-2xl border border-gray-100 p-8 md:p-16 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 bg-white">
                                    <div className="flex flex-col md:flex-row md:items-start gap-12 md:gap-16">
                                        {/* Left Column - Icon & Title */}
                                        <div className="md:w-1/3 flex flex-col">
                                            <div className="w-20 h-20 flex items-center justify-center text-accent bg-accent/5 rounded-xl mb-8">
                                                {service.icon}
                                            </div>
                                            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-primary">
                                                {t(service.title)}
                                            </h2>
                                        </div>

                                        {/* Right Column - Description & Features */}
                                        <div className="md:w-2/3 space-y-8">
                                            <p className="text-2xl text-gray-700 font-medium tracking-tighter">
                                                {t(service.description)}
                                            </p>

                                            <div className="space-y-6">
                                                {service.features.map((feature, featureIndex) => (
                                                    <div
                                                        key={feature}
                                                        className="flex items-start space-x-4"
                                                    >
                                                        <div className="mt-2 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                                                        <p className="text-xl tracking-tighter text-gray-500 font-light">
                                                            {t(feature)}
                                                        </p>
                                                    </div>
                                                ))}
                                            </div>


                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesList;