// src/components/home/AboutPreview.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { content } from '@/content';

const AboutPreview: React.FC = () => {

    return (
        <section className="py-20 md:py-40 bg-gray-50">
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
                            {content.about.title}
                        </h2>
                        <div className="space-y-6">
                            <p className="text-3xl font-light text-gray-300 tracking-tight">
                                {content.about.subtitle}
                            </p>
                            <p className="text-2xl md:text-3xl text-gray-500 font-light max-w-3xl mx-auto tracking-tight">
                                {content.about.description}
                            </p>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="mt-12"
                        >
                            <Link
                                href="/about"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white rounded-full text-2xl tracking-tight hover:bg-accent/90 transition-colors duration-200 group"
                            >
                                {content.about.cta}
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutPreview;