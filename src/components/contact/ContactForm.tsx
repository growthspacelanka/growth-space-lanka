'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '@/hooks/useTranslation';
import { useForm } from 'react-hook-form';
import CountryCodeSelect from '@/components/common/CountryCodeSelect';
import { TranslationKey } from '@/translations';
import { submitToAirtable } from '../../../services/airtable';

interface FormData {
    name: string;
    email: string;
    countryCode: string;
    phoneNumber: string;
    inquiryType: string;
    message: string;
}

interface ServiceItem {
    id: string;
    translationKey: TranslationKey;
}

const services: ServiceItem[] = [
    {
        id: 'web-development',
        translationKey: 'contact.form.services.webdev'
    },
    {
        id: 'ai-solutions',
        translationKey: 'contact.form.services.ai'
    }
];

const ContactForm = () => {
    const { t } = useTranslation();
    const [submitError, setSubmitError] = useState<string | null>(null);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const { register, handleSubmit, setValue, reset, formState: { errors, isSubmitting } } = useForm<FormData>();

    const onSubmit = async (data: FormData) => {
        try {
            setSubmitError(null);
            await submitToAirtable(data);
            window.location.href = '/thank-you';
        } catch (error) {
            setSubmitError(t('contact.form.error'));
        }
    };

    return (
        <section className="py-20 md:py-40 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-2xl mx-auto">
                    {/* Title Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-20"
                    >
                        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter">
                            {t('contact.form.title')}
                        </h2>
                        <div className="space-y-6">
                            <p className="text-3xl font-light text-gray-300 tracking-tight">
                                {t('contact.form.subtitle')}
                            </p>
                            <p className="text-xl text-gray-500 font-light max-w-3xl mx-auto tracking-tight">
                                {t('contact.form.description')}
                            </p>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="space-y-8"
                    >
                        {submitError && (
                            <div className="p-4 bg-red-50 border border-red-200 text-red-600 rounded-xl">
                                {submitError}
                            </div>
                        )}

                        {submitSuccess && (
                            <div className="p-4 bg-green-50 border border-green-200 text-green-600 rounded-xl">
                                {t('contact.form.success')}
                            </div>
                        )}

                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 tracking-tighter">
                            {/* Personal Information */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <input
                                        type="text"
                                        placeholder={t('contact.form.namePlaceholder')}
                                        {...register('name', { required: t('contact.form.nameRequired') })}
                                        className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:border-primary"
                                    />
                                    {errors.name && (
                                        <p className="mt-1 text-red-500">{errors.name.message}</p>
                                    )}
                                </div>
                                <div>
                                    <input
                                        type="email"
                                        placeholder={t('contact.form.emailPlaceholder')}
                                        {...register('email', {
                                            required: t('contact.form.emailRequired'),
                                            pattern: {
                                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                message: t('contact.form.emailInvalid')
                                            }
                                        })}
                                        className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:border-primary"
                                    />
                                    {errors.email && (
                                        <p className="mt-1 text-red-500">{errors.email.message}</p>
                                    )}
                                </div>
                            </div>

                            {/* Phone Number with Country Code */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div>
                                    <CountryCodeSelect
                                        onChange={(code) => setValue('countryCode', code)}
                                    />
                                    {errors.countryCode && (
                                        <p className="mt-1 text-red-500">{errors.countryCode.message}</p>
                                    )}
                                </div>
                                <div className="md:col-span-2">
                                    <input
                                        type="tel"
                                        placeholder={t('contact.form.phonePlaceholder')}
                                        {...register('phoneNumber', { required: t('contact.form.phoneRequired') })}
                                        className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:border-primary"
                                    />
                                    {errors.phoneNumber && (
                                        <p className="mt-1 text-red-500">{errors.phoneNumber.message}</p>
                                    )}
                                </div>
                            </div>

                            {/* Inquiry Type */}
                            <div className="space-y-4">
                                <label className="text-lg text-gray-600 font-light">
                                    {t('contact.form.inquiryType')}:
                                </label>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {services.map((service) => (
                                        <label
                                            key={service.id}
                                            className="flex items-center space-x-3 p-4 rounded-xl border border-gray-200 cursor-pointer hover:border-primary transition-all duration-300 group"
                                        >
                                            <input
                                                type="radio"
                                                value={service.id}
                                                {...register('inquiryType', { required: t('contact.form.inquiryRequired') })}
                                                className="w-4 h-4 accent-secondary cursor-pointer"
                                            />
                                            <span className="text-gray-600 group-hover:text-primary transition-colors duration-300">
                                                {t(service.translationKey)}
                                            </span>
                                        </label>
                                    ))}
                                </div>
                                {errors.inquiryType && (
                                    <p className="mt-1 text-red-500">{errors.inquiryType.message}</p>
                                )}
                            </div>

                            {/* Message */}
                            <div>
                                <textarea
                                    placeholder={t('contact.form.messagePlaceholder')}
                                    rows={6}
                                    {...register('message', { required: t('contact.form.messageRequired') })}
                                    className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:border-primary resize-none"
                                />
                                {errors.message && (
                                    <p className="mt-1 text-red-500">{errors.message.message}</p>
                                )}
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-fit mx-auto px-12 py-4 bg-primary text-white rounded-full text-2xl hover:opacity-90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? t('contact.form.sending') : t('contact.form.submit')}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;