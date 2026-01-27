'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '@/hooks/useTranslation';
import { TranslationKey } from '@/translations';
import Image from 'next/image';

interface TeamMember {
    nameKey: TranslationKey;
    roleKey: TranslationKey;
    imageUrl: string;
}

const TeamSection = () => {
    const { t } = useTranslation();

    const teamMembers: TeamMember[] = [
        {
            nameKey: 'about.team.member1.name' as TranslationKey,
            roleKey: 'about.team.member1.role' as TranslationKey,
            imageUrl: 'https://res.cloudinary.com/dqeujzydw/image/upload/v1735757212/Green_Modern_Social_Media_Agency_Marketing_Instagram_Post_1_ova7cj.jpg'
        },
        {
            nameKey: 'about.team.member2.name' as TranslationKey,
            roleKey: 'about.team.member2.role' as TranslationKey,
            imageUrl: 'https://res.cloudinary.com/dqeujzydw/image/upload/v1735757212/Green_Modern_Social_Media_Agency_Marketing_Instagram_Post_1_ova7cj.jpg'
        },
        {
            nameKey: 'about.team.member3.name' as TranslationKey,
            roleKey: 'about.team.member3.role' as TranslationKey,
            imageUrl: 'https://res.cloudinary.com/dqeujzydw/image/upload/v1735757212/Green_Modern_Social_Media_Agency_Marketing_Instagram_Post_1_ova7cj.jpg'
        }
    ];

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
                            {t('about.team.title' as TranslationKey)}
                        </h2>
                        <div className="space-y-6">
                            <p className="text-3xl font-light text-gray-300 tracking-tight">
                                {t('about.team.subtitle' as TranslationKey)}
                            </p>
                            <p className="text-xl text-gray-500 font-light max-w-3xl mx-auto tracking-tighter">
                                {t('about.team.description' as TranslationKey)}
                            </p>
                        </div>
                    </motion.div>

                    {/* Team Members Grid */}
                    <div className="grid md:grid-cols-3 gap-8">
                        {teamMembers.map((member, index) => (
                            <motion.div
                                key={member.nameKey}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="text-center group"
                            >
                                <div className="mb-6 relative aspect-square rounded-2xl overflow-hidden">
                                    <Image
                                        src={member.imageUrl}
                                        alt={t(member.nameKey)}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold text-primary tracking-tighter mb-2">
                                    {t(member.nameKey)}
                                </h3>
                                <p className="text-xl text-gray-500 font-light tracking-tighter">
                                    {t(member.roleKey)}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TeamSection;