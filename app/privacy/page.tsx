'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '@/hooks/useTranslation';
import PageHeader from '@/components/common/PageHeader';

const PrivacyPolicyPage = () => {
    const { t } = useTranslation();

    return (
        <>
            <PageHeader
                titleKey="legal.privacy.title"
                descriptionKey="legal.privacy.description"
            />

            <section className="py-20 md:py-40 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto">
                        {/* General Information */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="mb-20"
                        >
                            <h2 className="text-4xl font-bold tracking-tighter text-primary mb-8">
                                {t('legal.privacy.general.title')}
                            </h2>
                            <div className="space-y-6 text-xl text-gray-600 tracking-tighter">
                                <p>{t('legal.privacy.general.intro')}</p>
                                <div className="space-y-4">
                                    <p>{t('legal.privacy.general.controller')}</p>
                                    <p>{t('legal.privacy.general.dpo')}</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Data Collection & Processing */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="mb-20"
                        >
                            <h2 className="text-4xl font-bold tracking-tighter text-primary mb-8">
                                {t('legal.privacy.collection.title')}
                            </h2>
                            <div className="space-y-6 text-xl text-gray-600 tracking-tighter">
                                <p>{t('legal.privacy.collection.purpose')}</p>
                                <h3 className="text-2xl font-bold text-primary tracking-tighter mb-4">
                                    {t('legal.privacy.collection.types.title')}
                                </h3>
                                <ul className="list-disc pl-6 space-y-4 ">
                                    <li>{t('legal.privacy.collection.types.personal')}</li>
                                    <li>{t('legal.privacy.collection.types.usage')}</li>
                                    <li>{t('legal.privacy.collection.types.technical')}</li>
                                </ul>
                            </div>
                        </motion.div>

                        {/* Cookies & Tracking */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="mb-20"
                        >
                            <h2 className="text-4xl font-bold tracking-tighter text-primary mb-8">
                                {t('legal.privacy.cookies.title')}
                            </h2>
                            <div className="space-y-6 text-xl text-gray-600 tracking-tighter">
                                <p>{t('legal.privacy.cookies.description')}</p>
                                <h3 className="text-2xl font-bold text-primary tracking-tighter mb-4">
                                    {t('legal.privacy.cookies.types.title')}
                                </h3>
                                <ul className="list-disc pl-6 space-y-4">
                                    <li>{t('legal.privacy.cookies.types.essential')}</li>
                                    <li>{t('legal.privacy.cookies.types.analytics')}</li>
                                    <li>{t('legal.privacy.cookies.types.marketing')}</li>
                                </ul>
                            </div>
                        </motion.div>

                        {/* Third-party Services */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="mb-20"
                        >
                            <h2 className="text-4xl font-bold tracking-tighter text-primary mb-8">
                                {t('legal.privacy.thirdparty.title')}
                            </h2>
                            <div className="space-y-6 text-xl text-gray-600 tracking-tighter">
                                <p>{t('legal.privacy.thirdparty.description')}</p>
                                <div className="space-y-4">
                                    <p>{t('legal.privacy.thirdparty.services.analytics')}</p>
                                    <p>{t('legal.privacy.thirdparty.services.social')}</p>
                                    <p>{t('legal.privacy.thirdparty.services.payment')}</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* User Rights */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            className="mb-20"
                        >
                            <h2 className="text-4xl font-bold tracking-tighter text-primary mb-8">
                                {t('legal.privacy.rights.title')}
                            </h2>
                            <div className="space-y-6 text-xl text-gray-600 tracking-tighter">
                                <p>{t('legal.privacy.rights.intro')}</p>
                                <ul className="list-disc pl-6 space-y-4">
                                    <li>{t('legal.privacy.rights.access')}</li>
                                    <li>{t('legal.privacy.rights.rectification')}</li>
                                    <li>{t('legal.privacy.rights.erasure')}</li>
                                    <li>{t('legal.privacy.rights.restriction')}</li>
                                    <li>{t('legal.privacy.rights.portability')}</li>
                                    <li>{t('legal.privacy.rights.object')}</li>
                                </ul>
                            </div>
                        </motion.div>

                        {/* Data Security */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.7 }}
                            className="mb-20"
                        >
                            <h2 className="text-4xl font-bold tracking-tighter text-primary mb-8">
                                {t('legal.privacy.security.title')}
                            </h2>
                            <div className="space-y-6 text-xl text-gray-600 tracking-tighter">
                                <p>{t('legal.privacy.security.measures')}</p>
                                <p>{t('legal.privacy.security.encryption')}</p>
                                <p>{t('legal.privacy.security.staff')}</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default PrivacyPolicyPage;