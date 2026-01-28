// src/components/home/TestimonialsSection.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { content } from '@/content';

const TestimonialsSection: React.FC = () => {
    const testimonials = content.testimonials.items.map((item, index) => ({
        ...item,
        rating: 5,
        highlight: index === 0,
    }));

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
                            {content.testimonials.title}
                        </h2>
                        <div className="space-y-6">
                            <p className="text-3xl font-light text-gray-300 tracking-tight">
                                {content.testimonials.subtitle}
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
                                    "{testimonial.content}"
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
                                        {testimonial.author}
                                    </span>
                                    <span className={
                                        testimonial.highlight ? 'text-white/70 tracking-tight' : 'text-gray-500 tracking-tight'
                                    }>
                                        {testimonial.role}, {testimonial.company}
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