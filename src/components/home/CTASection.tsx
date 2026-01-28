// src/components/home/CTASection.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { content } from '@/content';

const CTASection: React.FC = () => {

    return (
        <section className="py-20 md:py-40 bg-accent">
            <div className="container mx-auto px-4">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-center"
                    >
                        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white mb-6">
                            {content.cta.title}
                        </h2>
                        <p className="text-3xl text-white/80 font-light max-w-3xl mx-auto mb-12 tracking-tight">
                            {content.cta.description}
                        </p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <Link
                                href="/book-a-call"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full text-2xl tracking-tight hover:bg-primary/90 transition-all duration-300 group"
                            >
                                {content.cta.button}
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default CTASection;