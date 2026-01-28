// src/components/home/StatsSection.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { content } from '@/content';

const StatsSection: React.FC = () => {
    const stats = content.stats.items;

    return (
        <section className="py-28 bg-primary">
            <div className="container">
                <div className="mx-auto max-w-6xl">
                    <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-4">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="text-center"
                            >
                                <div className="inline-block relative">
                                    <motion.span
                                        className="text-6xl font-bold tracking-tight text-white lg:text-7xl"
                                    >
                                        {stat.value}
                                    </motion.span>
                                </div>
                                <p className="mt-2 text-xl font-light tracking-tight uppercase text-white/60">
                                    {stat.label}
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
