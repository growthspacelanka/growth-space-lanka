// src/components/home/TestimonialsSection.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';
import { TranslationKey } from '@/translations';

interface TestimonialItem {
    author: TranslationKey;
    role: TranslationKey;
    company: TranslationKey;
    content: TranslationKey;
    rating: number;
    highlight?: boolean;
}

const testimonials: TestimonialItem[] = [
    {
        author: 'testimonials.1.author',
        role: 'testimonials.1.role',
        company: 'testimonials.1.company',
        content: 'testimonials.1.content',
        rating: 5,
        highlight: true
    },
    {
        author: 'testimonials.2.author',
        role: 'testimonials.2.role',
        company: 'testimonials.2.company',
        content: 'testimonials.2.content',
        rating: 5
    },
    {
        author: 'testimonials.3.author',
        role: 'testimonials.3.role',
        company: 'testimonials.3.company',
        content: 'testimonials.3.content',
        rating: 5
    },
    {
        author: 'testimonials.4.author',
        role: 'testimonials.4.role',
        company: 'testimonials.4.company',
        content: 'testimonials.4.content',
        rating: 5
    },
    {
        author: 'testimonials.5.author',
        role: 'testimonials.5.role',
        company: 'testimonials.5.company',
        content: 'testimonials.5.content',
        rating: 5
    }
];

const TestimonialsSection: React.FC = () => {
    const { t } = useTranslation();

    return (
        <section className="py-20 md:py-40 bg-whiterelative overflow-hidden">


            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    {/* Title Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-20"
                    >
                        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter">
                            {t('testimonials.title')}
                        </h2>
                        <div className="space-y-6">
                            <p className="text-3xl font-light text-gray-300 tracking-tight">
                                {t('testimonials.subtitle')}
                            </p>
                        </div>
                    </motion.div>

                    {/* Testimonials Masonry Layout */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`${testimonial.highlight
                                    ? 'md:col-span-2 bg-primary text-white'
                                    : 'bg-white'
                                    } p-8 md:p-10 rounded-xl border border-gray-100 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 relative z-10`}
                            >
                                {/* Quote Icon */}
                                <Quote className={`w-10 h-10 mb-6 ${testimonial.highlight ? 'text-white/20' : 'text-primary/20'
                                    }`} />

                                {/* Content */}
                                <p className={`text-xl md:text-2xl font-light tracking-tight mb-8 ${testimonial.highlight ? 'text-white/90' : 'text-gray-600'
                                    }`}>
                                    "{t(testimonial.content)}"
                                </p>

                                {/* Rating */}
                                <div className="flex gap-1 mb-6">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className={`w-5 h-5 ${testimonial.highlight
                                                ? 'text-accent fill-accent'
                                                : 'text-accent fill-accent'
                                                }`}
                                        />
                                    ))}
                                </div>

                                {/* Author Info */}
                                <div className="flex flex-col">
                                    <span className={`font-semibold tracking-tight text-xl ${testimonial.highlight ? 'text-white' : 'text-gray-900'
                                        }`}>
                                        {t(testimonial.author)}
                                    </span>
                                    <span className={
                                        testimonial.highlight ? 'text-white/70 tracking-tight' : 'text-gray-500 tracking-tight'
                                    }>
                                        {t(testimonial.role)}, {t(testimonial.company)}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;