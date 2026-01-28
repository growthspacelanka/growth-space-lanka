'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { content } from '@/content';
import { Laptop, Mail, Smartphone, Edit } from 'lucide-react';

interface FeatureItem {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const features: FeatureItem[] = [
    {
        icon: <Laptop className="w-10 h-10" />,
        title: content.services.webdev.features.items[0].title,
        description: content.services.webdev.features.items[0].description,
    },
    {
        icon: <Mail className="w-10 h-10" />,
        title: content.services.webdev.features.items[1].title,
        description: content.services.webdev.features.items[1].description,
    },
    {
        icon: <Smartphone className="w-10 h-10" />,
        title: content.services.webdev.features.items[2].title,
        description: content.services.webdev.features.items[2].description,
    },
    {
        icon: <Edit className="w-10 h-10" />,
        title: content.services.webdev.features.items[3].title,
        description: content.services.webdev.features.items[3].description,
    }
];

const WebDevFeatures = () => {

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
                        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter">
                            {content.services.webdev.features.title}
                        </h2>
                        <div className="space-y-6">
                            <p className="text-3xl font-light text-gray-300 tracking-tight">
                                {content.services.webdev.features.subtitle}
                            </p>
                            <p className="text-xl text-gray-500 font-light max-w-3xl mx-auto tracking-tight">
                                {content.services.webdev.features.description}
                            </p>
                        </div>
                    </motion.div>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group p-8 rounded-xl border border-gray-100 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 bg-white h-full cursor-pointer"
                            >
                                <div className="flex items-center justify-between mb-6">
                                    <div className="text-accent p-3 bg-accent/5 rounded-xl">
                                        {feature.icon}
                                    </div>

                                </div>
                                <h3 className="text-4xl md:text-5xl font-bold mb-4 text-primary tracking-tighter">
                                    {feature.title}
                                </h3>
                                <p className="text-2xl text-neutral-medium font-light tracking-tight">
                                    {feature.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WebDevFeatures;