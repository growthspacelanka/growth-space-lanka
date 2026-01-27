// app/quote-thank-you/page.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useTranslation } from '@/hooks/useTranslation';
import { ArrowLeft, CheckCircle } from 'lucide-react';

const QuoteThankYou = () => {
    const { t } = useTranslation();

    return (
        <section className="py-20 md:py-40 bg-white min-h-screen">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto">
                    {/* Back Button */}
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-primary mb-12 hover:opacity-80 transition-all duration-300 tracking-tighter"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        {t('quote.thankyou.backHome')}
                    </Link>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center space-y-8"
                    >
                        {/* Success Icon */}
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.2, type: "spring", stiffness: 150 }}
                            className="w-20 h-20 mx-auto rounded-full bg-primary/5 flex items-center justify-center"
                        >
                            <CheckCircle className="w-10 h-10 text-primary" />
                        </motion.div>

                        {/* Content */}
                        <div className="space-y-6">
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary tracking-tighter">
                                {t('quote.thankyou.title')}
                            </h1>
                            <p className="text-3xl font-light text-gray-300 tracking-tight">
                                {t('quote.thankyou.subtitle')}
                            </p>
                            <p className="text-xl text-gray-500 font-light max-w-2xl mx-auto">
                                {t('quote.thankyou.description')}
                            </p>
                        </div>

                        {/* CTA Button */}
                        <div className="pt-8">
                            <Link
                                href="/"
                                className="inline-flex px-12 py-4 bg-primary text-white rounded-full text-xl hover:opacity-90 transition-all duration-300"
                            >
                                {t('quote.thankyou.returnHome')}
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default QuoteThankYou;