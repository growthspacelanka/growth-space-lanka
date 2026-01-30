'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { content } from '@/content';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
    question: string;
    answer: string;
}

interface FAQCategory {
    title: string;
    faqs: FAQItem[];
}

const faqCategories: FAQCategory[] = [
    {
        title: content.services.socialMedia.faq.pricingBilling.title,
        faqs: content.services.socialMedia.faq.pricingBilling.items,
    },
    {
        title: content.services.socialMedia.faq.platformsPosting.title,
        faqs: content.services.socialMedia.faq.platformsPosting.items,
    },
    {
        title: content.services.socialMedia.faq.contentCreation.title,
        faqs: content.services.socialMedia.faq.contentCreation.items,
    },
    {
        title: content.services.socialMedia.faq.processWorkflow.title,
        faqs: content.services.socialMedia.faq.processWorkflow.items,
    },
    {
        title: content.services.socialMedia.faq.engagementCommunication.title,
        faqs: content.services.socialMedia.faq.engagementCommunication.items,
    },
    {
        title: content.services.socialMedia.faq.reportingPerformance.title,
        faqs: content.services.socialMedia.faq.reportingPerformance.items,
    },
    {
        title: content.services.socialMedia.faq.ownershipControl.title,
        faqs: content.services.socialMedia.faq.ownershipControl.items,
    },
    {
        title: content.services.socialMedia.faq.supportExpectations.title,
        faqs: content.services.socialMedia.faq.supportExpectations.items,
    },
];

const SocialMediaFAQ = () => {
    const [expandedCategory, setExpandedCategory] = useState<number>(0);
    const [expandedQuestions, setExpandedQuestions] = useState<Record<number, number | null>>({
        0: 0,
        1: null,
        2: null,
        3: null,
        4: null,
        5: null,
        6: null,
        7: null,
    });

    const toggleQuestion = (categoryIndex: number, questionIndex: number) => {
        setExpandedQuestions((prev) => ({
            ...prev,
            [categoryIndex]: prev[categoryIndex] === questionIndex ? null : questionIndex,
        }));
    };

    return (
        <section className="py-20 md:py-40 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-20"
                    >
                        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter">
                            {content.services.socialMedia.faq.title}
                        </h2>
                        <div className="space-y-6">
                            <p className="text-3xl font-light text-gray-300 tracking-tight">
                                {content.services.socialMedia.faq.subtitle}
                            </p>
                            <p className="text-2xl md:text-3xl text-gray-500 font-light max-w-3xl mx-auto tracking-tight">
                                {content.services.socialMedia.faq.description}
                            </p>
                        </div>
                    </motion.div>

                    <div className="space-y-6">
                        {faqCategories.map((category, categoryIndex) => (
                            <motion.div
                                key={category.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                                className="bg-white/10 border border-primary/10 rounded-2xl overflow-hidden"
                            >
                                <button
                                    onClick={() => setExpandedCategory(categoryIndex)}
                                    className="w-full p-8 text-left"
                                >
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-3xl font-bold text-primary tracking-tighter">
                                            {category.title}
                                        </h3>
                                        <ChevronDown
                                            className={`w-8 h-8 text-primary transition-transform duration-300 ${expandedCategory === categoryIndex ? 'rotate-180' : ''
                                                }`}
                                        />
                                    </div>
                                </button>

                                <AnimatePresence>
                                    {expandedCategory === categoryIndex && category.faqs.length > 0 && (
                                        <motion.div
                                            initial={{ height: 0 }}
                                            animate={{ height: 'auto' }}
                                            exit={{ height: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden border-t border-primary/10"
                                        >
                                            <div className="p-8 pt-4 space-y-4">
                                                {category.faqs.map((faq, questionIndex) => (
                                                    <div
                                                        key={faq.question}
                                                        className="border-b border-primary/10 last:border-0"
                                                    >
                                                        <button
                                                            onClick={() =>
                                                                toggleQuestion(categoryIndex, questionIndex)
                                                            }
                                                            className="w-full py-4 text-left"
                                                        >
                                                            <div className="flex items-start justify-between">
                                                                <p className="text-2xl font-medium tracking-tighter pr-8 uppercase text-gray-600">
                                                                    {faq.question}
                                                                </p>
                                                                <ChevronDown
                                                                    className={`w-6 h-6 text-primary flex-shrink-0 transition-transform duration-300 ${expandedQuestions[categoryIndex] ===
                                                                        questionIndex
                                                                        ? 'rotate-180'
                                                                        : ''
                                                                        }`}
                                                                />
                                                            </div>
                                                        </button>
                                                        <AnimatePresence>
                                                            {expandedQuestions[categoryIndex] ===
                                                                questionIndex && (
                                                                    <motion.div
                                                                        initial={{ height: 0 }}
                                                                        animate={{ height: 'auto' }}
                                                                        exit={{ height: 0 }}
                                                                        transition={{ duration: 0.3 }}
                                                                        className="overflow-hidden"
                                                                    >
                                                                        <p className="pb-4 text-2xl text-gray-400 font-light tracking-tighter">
                                                                            {faq.answer}
                                                                        </p>
                                                                    </motion.div>
                                                                )}
                                                        </AnimatePresence>
                                                    </div>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SocialMediaFAQ;
