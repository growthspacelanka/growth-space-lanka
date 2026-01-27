'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '@/hooks/useTranslation';
import PageHeader from '@/components/common/PageHeader';

const TermsPage = () => {
    const { t } = useTranslation();

    return (
        <>
            <PageHeader
                titleKey="legal.terms.title"
                descriptionKey="legal.terms.description"
            />

            <section className="py-20 md:py-40 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto">
                        {/* General Provisions */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="mb-20"
                        >
                            <h2 className="text-4xl font-bold tracking-tighter text-primary mb-8">
                                {t('legal.terms.general.title')}
                            </h2>
                            <div className="space-y-6 text-xl text-gray-600 tracking-tighter">
                                <p>{t('legal.terms.general.scope')}</p>
                                <p>{t('legal.terms.general.validity')}</p>
                            </div>
                        </motion.div>

                        {/* Service Description */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="mb-20"
                        >
                            <h2 className="text-4xl font-bold tracking-tighter text-primary mb-8">
                                {t('legal.terms.services.title')}
                            </h2>
                            <div className="space-y-6 text-xl text-gray-600 tracking-tighter">
                                <p>{t('legal.terms.services.description')}</p>
                                <ul className="list-disc pl-6 space-y-4">
                                    <li>{t('legal.terms.services.webdev')}</li>
                                    <li>{t('legal.terms.services.ai')}</li>
                                    <li>{t('legal.terms.services.consulting')}</li>
                                </ul>
                            </div>
                        </motion.div>

                        {/* Contract Terms */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="mb-20"
                        >
                            <h2 className="text-4xl font-bold tracking-tighter text-primary mb-8">
                                {t('legal.terms.contract.title')}
                            </h2>
                            <div className="space-y-6 text-xl text-gray-600 tracking-tighter">
                                <h3 className="text-2xl font-bold text-primary tracking-tighter mb-4">
                                    {t('legal.terms.contract.conclusion.title')}
                                </h3>
                                <p>{t('legal.terms.contract.conclusion.content')}</p>
                                <h3 className="text-2xl font-bold text-primary  tracking-tightermb-4">
                                    {t('legal.terms.contract.duration.title')}
                                </h3>
                                <p>{t('legal.terms.contract.duration.content')}</p>
                            </div>
                        </motion.div>

                        {/* Pricing and Payment */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="mb-20"
                        >
                            <h2 className="text-4xl font-bold tracking-tighter text-primary mb-8">
                                {t('legal.terms.payment.title')}
                            </h2>
                            <div className="space-y-6 text-xl text-gray-600 tracking-tighter">
                                <p>{t('legal.terms.payment.prices')}</p>
                                <p>{t('legal.terms.payment.terms')}</p>
                                <p>{t('legal.terms.payment.methods')}</p>
                            </div>
                        </motion.div>

                        {/* Responsibilities and Obligations */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            className="mb-20"
                        >
                            <h2 className="text-4xl font-bold tracking-tighter text-primary mb-8">
                                {t('legal.terms.obligations.title')}
                            </h2>
                            <div className="space-y-6 text-xl text-gray-600 tracking-tighter">
                                <h3 className="text-2xl font-bold text-primary mb-4">
                                    {t('legal.terms.obligations.provider.title')}
                                </h3>
                                <p>{t('legal.terms.obligations.provider.content')}</p>
                                <h3 className="text-2xl font-bold text-primary mb-4">
                                    {t('legal.terms.obligations.client.title')}
                                </h3>
                                <p>{t('legal.terms.obligations.client.content')}</p>
                            </div>
                        </motion.div>

                        {/* Liability */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.7 }}
                            className="mb-20"
                        >
                            <h2 className="text-4xl font-bold tracking-tighter text-primary mb-8">
                                {t('legal.terms.liability.title')}
                            </h2>
                            <div className="space-y-6 text-xl text-gray-600 tracking-tighter">
                                <p>{t('legal.terms.liability.limitation')}</p>
                                <p>{t('legal.terms.liability.exclusions')}</p>
                            </div>
                        </motion.div>

                        {/* Final Provisions */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.8 }}
                            className="mb-20"
                        >
                            <h2 className="text-4xl font-bold tracking-tighter text-primary mb-8">
                                {t('legal.terms.final.title')}
                            </h2>
                            <div className="space-y-6 text-xl text-gray-600 tracking-tighter">
                                <p>{t('legal.terms.final.jurisdiction')}</p>
                                <p>{t('legal.terms.final.severability')}</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default TermsPage;