// src/components/home/HeroSection.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { content } from '@/content';

const HeroSection = () => {
    return (
        <section
            className="relative flex items-center justify-center min-h-[100vh] pt-48 pb-20 overflow-hidden bg-white"
            style={{
                backgroundImage: 'repeating-linear-gradient(to right, transparent 0px, transparent 120px, rgba(0, 0, 0, 0.03) 120px, rgba(0, 0, 0, 0.03) 121px)',
                backgroundPosition: 'center',
                backgroundSize: '100% 100%',
            }}
        >
            <div className="container">
                <div className="mx-auto space-y-8 max-w-5xl text-center">
                    {/* Main Heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.1 }}
                        className="text-5xl font-bold tracking-tighter md:text-6xl lg:text-8xl"
                    >
                        {content.hero.title.start}
                        <span className="tracking-tighter text-accent">{content.hero.title.highlight1}</span>
                        <span className="tracking-tighter text-accent">{content.hero.title.middle}</span>
                        {content.hero.title.highlight2}
                    </motion.h1>


                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.1, delay: 0.2 }}
                        className="mx-auto max-w-3xl text-xl font-light tracking-tighter text-gray-500 md:text-3xl"
                    >
                        {content.hero.subtitle}
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.1, delay: 0.3 }}
                        className="flex flex-col gap-4 justify-center items-center pt-8 sm:flex-row"
                    >
                        <Link
                            href="/book-a-call"
                            className="flex gap-2 items-center px-8 py-4 text-2xl text-white rounded-full transition-colors duration-200 bg-primary hover:bg-primary/90 group"
                        >
                            {content.hero.cta.primary}
                            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                        </Link>
                        <Link
                            href="/services"
                            className="flex gap-2 items-center px-8 py-4 text-2xl bg-white rounded-full border border-gray-200 transition-colors duration-200 text-neutral-dark hover:bg-neutral-light/50 group"
                        >
                            {content.hero.cta.secondary}
                            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
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
                    className="absolute top-20 left-1/4 w-96 h-96 rounded-full blur-3xl bg-primary"
                />
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="absolute bottom-20 right-1/4 w-96 h-96 rounded-full blur-3xl bg-accent"
                />
            </div> */}
        </section>
    );
};

export default HeroSection;