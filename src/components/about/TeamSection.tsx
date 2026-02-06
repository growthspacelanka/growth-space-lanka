'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { content } from '@/content';
import Image from 'next/image';

const TeamSection = () => {
    const teamMembers = content.about.team.members;

    return (
        <section className="py-20 md:py-40 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-5xl mx-auto">
                    {/* Title Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-20"
                    >
                        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter">
                            {content.about.team.title}
                        </h2>
                        <div className="space-y-6">
                            <p className="text-3xl font-light text-gray-300 tracking-tight">
                                {content.about.team.subtitle}
                            </p>
                            <p className="text-2xl md:text-3xl text-gray-500 font-light max-w-3xl mx-auto tracking-tight">
                                {content.about.team.description}
                            </p>
                        </div>
                    </motion.div>

                    {/* Team Members Grid */}
                    <div className="grid md:grid-cols-3 gap-x-8 gap-y-16">
                        {teamMembers.map((member, index) => (
                            <motion.div
                                key={member.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="text-center group"
                            >
                                <div className="mb-6 relative aspect-[4/5] rounded-2xl overflow-hidden border border-gray-200">
                                    <Image
                                        src={member.imageUrl}
                                        alt={member.name}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>
                                <h3 className="text-3xl md:text-4xl font-bold text-primary tracking-tighter mb-2">
                                    {member.name}
                                </h3>
                                <p className="text-2xl md:text-3xl text-gray-500 font-light tracking-tight">
                                    {member.role}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Supporting line */}
                    {content.about.team.supportingLine && (
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="text-center text-2xl md:text-3xl text-gray-500 font-light max-w-3xl mx-auto mt-20 tracking-tight"
                        >
                            {content.about.team.supportingLine.split(content.about.team.supportingLineBold)[0]}
                            <span className="font-medium text-gray-700">
                                {content.about.team.supportingLineBold}
                            </span>
                            {content.about.team.supportingLine.split(content.about.team.supportingLineBold)[1]}
                        </motion.p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default TeamSection;