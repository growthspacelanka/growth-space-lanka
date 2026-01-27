// src/components/home/StatsSection.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '@/hooks/useTranslation';
import { TranslationKey } from '@/translations';

interface StatItem {
    value: string;
    label: TranslationKey;
}

const stats: StatItem[] = [
    {
        value: '40+',
        label: 'stats.projects'
    },
    {
        value: '95%',
        label: 'stats.satisfaction'
    },
    {
        value: '2+',
        label: 'stats.experience'
    },
    {
        value: '15+',
        label: 'stats.clients'
    }
];

const StatsSection: React.FC = () => {
    const { t } = useTranslation();

    return (
        <section className="py-20 bg-primary">
            <div className="container">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="text-center"
                            >
                                <div className="relative inline-block">
                                    <motion.span
                                        className="text-5xl lg:text-6xl font-bold text-white tracking-tight"
                                    >
                                        {stat.value}
                                    </motion.span>
                                </div>
                                <p className="mt-2 text-xl text-white/80 tracking-tight">
                                    {t(stat.label)}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
