'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { content } from '@/content';
import { Check } from 'lucide-react';

const SocialMediaPackages = () => {
    const packages = content.services.socialMedia.packages.items;

    return (
        <section className="py-20 md:py-40 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="max-w-[1440px] mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-20"
                    >
                        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter">
                            {content.services.socialMedia.packages.title}
                        </h2>
                        <div className="space-y-6">
                            <p className="text-3xl font-light text-gray-300 tracking-tight">
                                {content.services.socialMedia.packages.subtitle}
                            </p>
                            <p className="text-2xl md:text-3xl text-gray-500 font-light max-w-3xl mx-auto tracking-tight">
                                {content.services.socialMedia.packages.description}
                            </p>
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {packages.map((pkg, index) => (
                            <motion.div
                                key={pkg.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white rounded-xl border border-gray-100 p-8 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 h-full flex flex-col"
                            >
                                <h3 className="text-4xl md:text-5xl font-bold mb-4 text-primary tracking-tighter">
                                    {pkg.name}
                                </h3>

                                <div className="mb-3">
                                    <p className="text-xl text-gray-600 font-light tracking-tight">
                                        {pkg.bestFor}
                                    </p>
                                </div>

                                <div className="mb-6">
                                    <p className="text-3xl md:text-4xl font-bold text-accent tracking-tighter">
                                        {pkg.price.includes(' / month') ? (
                                            <>
                                                {pkg.price.replace(' / month', '')} /{' '}
                                                <span className="font-light">month</span>
                                            </>
                                        ) : (
                                            pkg.price
                                        )}
                                    </p>
                                </div>

                                <div className="mb-6 flex-grow">
                                    <p className="text-xl font-medium text-gray-700 tracking-tight mb-4">
                                        Includes:
                                    </p>
                                    <ul className="space-y-3">
                                        {pkg.includes.map((item, itemIndex) => (
                                            <li key={itemIndex} className="flex items-start gap-3">
                                                <Check className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                                                <span className="text-xl text-gray-600 font-light tracking-tight">
                                                    {item}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <Link
                                    href={pkg.stripeLink}
                                    className="mt-auto w-full px-5 py-3 bg-primary text-white rounded-full text-xl font-medium tracking-tighter text-center hover:bg-primary/90 transition-colors duration-200"
                                >
                                    {pkg.name === 'Custom Management'
                                        ? 'Book a Call'
                                        : 'Proceed to Payment'}
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="text-center mt-12"
                    >
                        <p className="text-xl md:text-2xl text-gray-600 font-light max-w-3xl mx-auto tracking-tight">
                            {content.services.socialMedia.packages.pricingNote}
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default SocialMediaPackages;
