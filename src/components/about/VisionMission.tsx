'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '@/hooks/useTranslation';
import { Telescope, Target } from 'lucide-react';

const VisionMission = () => {
    const { t } = useTranslation();

    return (
        <section className="pb-20 md:pb-30 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-5xl mx-auto">
                    {/* Vision & Mission Grid */}
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Vision Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="p-8 rounded-xl border border-gray-100 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 bg-primary"
                        >
                            <div className="text-accent p-3  bg-white/10 border border-white/5 rounded-xl inline-block mb-6">
                                <Telescope className="w-10 h-10" />
                            </div>
                            <h3 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tighter">
                                {t('about.vision.title')}
                            </h3>
                            <p className="text-xl text-white/70 font-light tracking-tighter">
                                {t('about.vision.statement')}
                            </p>
                        </motion.div>

                        {/* Mission Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="p-8 rounded-xl border border-gray-100 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 bg-primary"
                        >
                            <div className="text-accent p-3 bg-white/10 border border-white/5 rounded-xl inline-block mb-6">
                                <Target className="w-10 h-10" />
                            </div>
                            <h3 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tighter">
                                {t('about.mission.title')}
                            </h3>
                            <p className="text-xl text-white/70 font-light tracking-tighter">
                                {t('about.mission.statement')}
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VisionMission;