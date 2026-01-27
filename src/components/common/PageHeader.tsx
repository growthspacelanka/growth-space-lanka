'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTranslation } from '@/hooks/useTranslation';
import { TranslationKey } from '@/translations';

interface PageHeaderProps {
    titleKey: TranslationKey;
    descriptionKey: TranslationKey;
}

const PageHeader: React.FC<PageHeaderProps> = ({ titleKey, descriptionKey }) => {
    const { t } = useTranslation();
    const { scrollY } = useScroll();

    // Transform values for different properties based on scroll
    const scale = useTransform(scrollY, [0, 300], [1, 0.5]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);
    const y = useTransform(scrollY, [0, 300], [0, -100]);

    return (
        <section className="bg-gray-50 min-h-[60vh] md:min-h-[100vh] relative overflow-hidden flex items-center">
            <div className="container mx-auto px-4 py-24 relative z-10">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center">
                        <motion.div
                            style={{
                                scale,
                                opacity,
                                y
                            }}
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.1,
                                delay: 0.1,

                            }}
                        >
                            <h1 className="text-5xl md:text-6xl lg:text-9xl font-bold text-primary tracking-tighter">
                                {t(titleKey)}
                            </h1>
                            <p className="text-xl md:text-3xl text-gray-400 font-light tracking-tight">
                                {t(descriptionKey)}
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PageHeader;