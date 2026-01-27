// components/common/CookieConsent.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '@/hooks/useTranslation';

const CookieConsent: React.FC = () => {
    const [consentGiven, setConsentGiven] = useState<boolean | null>(null);
    const { t } = useTranslation();

    useEffect(() => {
        const storedConsent = localStorage.getItem('cookieConsent');
        if (storedConsent !== null) {
            setConsentGiven(storedConsent === 'true');
        }
    }, []);

    const handleConsent = (consent: boolean) => {
        setConsentGiven(consent);
        localStorage.setItem('cookieConsent', String(consent));
    };

    if (consentGiven !== null) {
        return null;
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="fixed bottom-0 md:bottom-8 right-0 md:right-8 bg-white border border-gray-400/10 shadow-lg shadow-primary/10 rounded-none md:rounded-xl p-4 md:p-8 max-w-md z-50"
        >
            <p className="text-gray-600 text-center text-xl tracking-tighter mb-4 leading-5">{t('cookie.text')}

                <span> <a href="/privacy" className="text-primary hover:underline">
                    {t('cookie.link')}
                </a></span>
            </p>
            <div className="flex justify-center items-center text-center pt-4">
                <div>
                    <button
                        onClick={() => handleConsent(false)}
                        className="text-gray-600 px-6 py-2 text-xl tracking-tighter border rounded-full mb-2 w-full md:w-auto hover:bg-gray-100 transition-colors duration-300"
                    >
                        {t('cookie.deny')}
                    </button>
                    <button
                        onClick={() => handleConsent(true)}
                        className="bg-primary hover:bg-primary/90 text-white px-6 py-2 text-xl w-full md:w-auto tracking-tighter rounded-full md:ml-4 hover:bg-primary-dark transition-colors duration-300"
                    >
                        {t('cookie.accept')}
                    </button>
                </div>
            </div>
        </motion.div>
    );
};

export default CookieConsent;