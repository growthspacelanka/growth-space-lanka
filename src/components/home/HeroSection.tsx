// src/components/home/HeroSection.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

const HeroSection = () => {
    const { t } = useTranslation();

    return (
        <section className="relative flex items-center justify-center min-h-[100vh] pt-48 pb-20 overflow-hidden">
            <div className="container">
                <div className="max-w-5xl mx-auto text-center space-y-8 ">
                    {/* Main Heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.1 }}
                        className="text-5xl md:text-6xl lg:text-8xl font-bold tracking-tighter"
                    >
                        {t('hero.title.start')}
                        <span className="tracking-tighter ">{t('hero.title.highlight1')}</span>
                        {t('hero.title.middle')}
                        <span className="text-accent tracking-tighter">{t('hero.title.highlight2')}</span>
                    </motion.h1>


                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.1, delay: 0.2 }}
                        className="text-xl md:text-3xl text-gray-500 font-light tracking-tighter max-w-3xl mx-auto"
                    >
                        {t('hero.subtitle')}
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.1, delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8"
                    >
                        <Link
                            href="/get-quote"
                            className="px-8 py-4 bg-primary text-white rounded-full text-2xl hover:bg-primary/90 transition-colors duration-200 flex items-center gap-2 group"
                        >
                            {t('hero.cta.primary')}
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                        </Link>
                        <Link
                            href="/services"
                            className="px-8 py-4 border border-gray-200 text-neutral-dark rounded-full text-2xl hover:bg-neutral-light/50 transition-colors duration-200 flex items-center gap-2 group"
                        >
                            {t('hero.cta.secondary')}
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                        </Link>
                    </motion.div>
                </div>
            </div>

            {/* Background Elements */}
            {/* <div className="absolute inset-0 -z-10">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.1 }}
                    transition={{ duration: 1 }}
                    className="absolute top-20 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl"
                />
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="absolute bottom-20 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl"
                />
            </div> */}
        </section>
    );
};

export default HeroSection;