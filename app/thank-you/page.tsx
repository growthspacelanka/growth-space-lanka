// app/thank-you/page.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useTranslation } from '@/hooks/useTranslation';
import { CheckCircle } from 'lucide-react';

const ThankYou = () => {
    const { t } = useTranslation();

    return (
        <section className="py-20 md:py-40 bg-white min-h-screen flex items-center">
            <div className="container mx-auto px-4">
                <div className="max-w-2xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="space-y-6"
                    >
                        <div className="w-20 h-20 mx-auto rounded-full bg-primary/5 flex items-center justify-center">
                            <CheckCircle className="w-10 h-10 text-primary" />
                        </div>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter">
                            {t('thankYou.title')}
                        </h1>

                        <p className="text-xl text-gray-500 font-light">
                            {t('thankYou.description')}
                        </p>

                        <div className="pt-8">
                            <Link
                                href="/"
                                className="inline-flex px-8 py-4 bg-primary text-white rounded-full text-lg hover:opacity-90 transition-all duration-300"
                            >
                                {t('thankYou.backHome')}
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ThankYou;