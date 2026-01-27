'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '@/hooks/useTranslation';
import PageHeader from '@/components/common/PageHeader';

const ImprintPage = () => {
    const { t } = useTranslation();

    return (
        <>
            <PageHeader
                titleKey="legal.imprint.title"
                descriptionKey="legal.imprint.description"
            />

            <section className="py-20 md:py-40 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="prose prose-lg"
                        >
                            {/* Company Information */}
                            <div className="mb-16">
                                <h2 className="text-4xl font-bold tracking-tighter text-primary mb-8">
                                    {t('legal.imprint.company.title')}
                                </h2>
                                <div className="space-y-4 text-xl text-gray-600 tracking-tighter">
                                    <p>{t('legal.imprint.company.name')}</p>
                                    <p>{t('legal.imprint.company.street')}</p>
                                    <p>{t('legal.imprint.company.city')}</p>
                                    <p>{t('legal.imprint.company.country')}</p>
                                </div>
                            </div>

                            {/* Contact Information */}
                            <div className="mb-16">
                                <h2 className="text-4xl font-bold tracking-tighter text-primary mb-8">
                                    {t('legal.imprint.contact.title')}
                                </h2>
                                <div className="space-y-4 text-xl text-gray-600 tracking-tighter">
                                    <p>
                                        {t('legal.imprint.contact.phone')}: <br />
                                        +94 11 234 5678
                                    </p>
                                    <p>
                                        {t('legal.imprint.contact.email')}: <br />
                                        info@growthspacelanka.com
                                    </p>
                                    <p>
                                        {t('legal.imprint.contact.web')}: <br />
                                        www.growthspacelanka.com
                                    </p>
                                </div>
                            </div>

                            {/* Registration Information */}
                            <div className="mb-16">
                                <h2 className="text-4xl font-bold tracking-tighter text-primary mb-8">
                                    {t('legal.imprint.registration.title')}
                                </h2>
                                <div className="space-y-4 text-xl text-gray-600 tracking-tighter">
                                    <p>
                                        {t('legal.imprint.registration.court')}: <br />
                                        Department of Registrar of Companies, Sri Lanka
                                    </p>
                                    <p>
                                        {t('legal.imprint.registration.number')}: <br />
                                        [Company Registration Number]
                                    </p>
                                    <p>
                                        {t('legal.imprint.registration.vatid')}: <br />
                                        [VAT/TIN Number]
                                    </p>
                                </div>
                            </div>

                            {/* Responsible Person */}
                            <div className="mb-16">
                                <h2 className="text-4xl font-bold tracking-tighter text-primary mb-8">
                                    {t('legal.imprint.responsible.title')}
                                </h2>
                                <div className="space-y-4 text-xl text-gray-600 tracking-tighter">
                                    <p>{t('legal.imprint.responsible.name')}</p>
                                    <p>{t('legal.imprint.responsible.position')}</p>
                                    <p>{t('legal.imprint.responsible.email')}</p>
                                </div>
                            </div>

                            {/* Legal Note */}
                            <div className="mb-16">
                                <h2 className="text-4xl font-bold tracking-tighter text-primary mb-8">
                                    {t('legal.imprint.disclaimer.title')}
                                </h2>
                                <div className="space-y-4 text-xl text-gray-600 tracking-tighter">
                                    <p>{t('legal.imprint.disclaimer.content')}</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ImprintPage;