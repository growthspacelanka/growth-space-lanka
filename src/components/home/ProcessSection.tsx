// src/components/home/ProcessSection.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '@/hooks/useTranslation';
import { TranslationKey } from '@/translations';

interface ProcessStep {
    step: string;
    title: TranslationKey;
    description: TranslationKey;
}

const processes: ProcessStep[] = [
    {
        step: '01',
        title: 'process.step1.title',
        description: 'process.step1.description'
    },
    {
        step: '02',
        title: 'process.step2.title',
        description: 'process.step2.description'
    },
    {
        step: '03',
        title: 'process.step3.title',
        description: 'process.step3.description'
    },
    {
        step: '04',
        title: 'process.step4.title',
        description: 'process.step4.description'
    },
    {
        step: '05',
        title: 'process.step5.title',
        description: 'process.step5.description'
    },
    {
        step: '06',
        title: 'process.step6.title',
        description: 'process.step6.description'
    }
];

const ProcessSection: React.FC = () => {
    const { t } = useTranslation();

    return (
        <section className="py-20 md:py-40 bg-slate-50">
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
                            {t('process.title')}
                        </h2>
                        <div className="space-y-6">
                            <p className="text-3xl font-light text-gray-300 tracking-tight">
                                {t('process.subtitle')}
                            </p>
                            <p className="text-xl text-gray-500 font-light max-w-3xl mx-auto tracking-tight">
                                {t('process.description')}
                            </p>
                        </div>
                    </motion.div>

                    {/* Timeline Steps */}
                    <div className="relative">
                        {/* Timeline Container - Hidden on mobile */}
                        <div className="absolute top-0 hidden md:flex left-1/2 -translate-x-1/2 h-full flex-col items-center w-4">
                            {/* Vertical Line with Animation */}
                            <motion.div
                                className="absolute h-full w-[2px] bg-gradient-to-b from-primary/0 via-gray-500/15 to-primary/0"
                                initial={{ height: 0 }}
                                whileInView={{ height: '100%' }}
                                viewport={{ once: true }}
                                transition={{ duration: 1 }}
                            />
                        </div>

                        {/* Process Steps */}
                        {processes.map((process, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`relative flex items-start md:items-center md:justify-between gap-8 mb-16 last:mb-0 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                    }`}
                            >
                                {/* Timeline Dot Container - Hidden on mobile */}
                                <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 items-center justify-center">
                                    <motion.div
                                        className="w-6 h-6 rounded-full bg-primary border-2 border-white/50"
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.3, delay: index * 0.1 }}
                                        whileHover={{ scale: 1.2 }}
                                    />
                                </div>

                                {/* Content Box - Adjusted margin for mobile */}
                                <div className={`md:ml-0 md:w-[calc(50%-3rem)] p-8 rounded-xl bg-primary `}>
                                    <span className="text-5xl font-light text-accent mb-6 block">
                                        {process.step}
                                    </span>
                                    <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tighter mb-4">
                                        {t(process.title)}
                                    </h3>
                                    <p className="text-xl text-white/80 font-light tracking-tight">
                                        {t(process.description)}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProcessSection;