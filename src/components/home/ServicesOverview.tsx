// src/components/home/ServicesOverview.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Bot, Code2, Share2, Megaphone } from 'lucide-react';
import { content } from '@/content';

interface ServiceItem {
    icon: React.ReactNode;
    title: string;
    description: string;
    href: string;
}

const services: ServiceItem[] = [
    {
        icon: <Code2 className="w-10 h-10" />,
        title: content.services.webdev.title,
        description: content.services.webdev.description,
        href: '/services/business-website'
    },
    {
        icon: <Bot className="w-10 h-10" />,
        title: content.services.ai.title,
        description: content.services.ai.description,
        href: '/services/ecommerce-website'
    },
    {
        icon: <Share2 className="w-10 h-10" />,
        title: content.services.socialMedia.title,
        description: content.services.socialMedia.description,
        href: '/services/social-media-management'
    },
    {
        icon: <Megaphone className="w-10 h-10" />,
        title: content.services.socialAds.title,
        description: content.services.socialAds.description,
        href: '/services/social-media-ads'
    }
];

const ServicesOverview: React.FC = () => {

    return (
        <section className="py-20 md:py-40 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-5xl mx-auto">
                    {/* Title Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-20"
                    >
                        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold  tracking-tighter">
                            {content.services.title}
                        </h2>
                        <div className="space-y-6">
                            <p className="text-3xl font-light text-gray-300 tracking-tight">
                                {content.services.subtitle}
                            </p>
                            <p className="text-2xl md:text-3xl text-gray-500 font-light max-w-3xl mx-auto tracking-tight">
                                {content.services.description}
                            </p>
                        </div>
                    </motion.div>

                    {/* Services Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {services.map((service, index) => (
                            <Link key={service.title} href={service.href} className="block">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="group p-8 rounded-xl border border-gray-100 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 bg-white h-full cursor-pointer"
                                >
                                    <div className="flex items-center justify-between mb-6">
                                        <div className="text-accent p-3 bg-accent/5 rounded-xl">
                                            {service.icon}
                                        </div>
                                        <div className="text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            →
                                        </div>
                                    </div>
                                    <h3 className="text-4xl md:text-5xl font-bold mb-4 text-primary tracking-tighter">
                                        {service.title}
                                    </h3>
                                    <p className="text-2xl text-neutral-medium font-light tracking-tight">
                                        {service.description}
                                    </p>
                                </motion.div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesOverview;