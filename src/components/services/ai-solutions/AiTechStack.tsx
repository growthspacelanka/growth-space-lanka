'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from '@/hooks/useTranslation';
import { TranslationKey } from '@/translations';
import { Bot, Blocks, Brain, Server, ChevronDown } from 'lucide-react';

interface TechStackItem {
    icon: React.ReactNode;
    title: TranslationKey;
    description: TranslationKey;
    technologies: TranslationKey[];
}

const techStacks: TechStackItem[] = [
    {
        icon: <Bot className="w-10 h-10" />,
        title: 'services.ai.tech.platforms.title',
        description: 'services.ai.tech.platforms.description',
        technologies: [
            'services.ai.tech.platforms.tech1',
            'services.ai.tech.platforms.tech2',
            'services.ai.tech.platforms.tech3',
            'services.ai.tech.platforms.tech4',
            'services.ai.tech.platforms.tech5',
            'services.ai.tech.platforms.more'
        ]
    },
    {
        icon: <Blocks className="w-10 h-10" />,
        title: 'services.ai.tech.integration.title',
        description: 'services.ai.tech.integration.description',
        technologies: [
            'services.ai.tech.integration.tech1',
            'services.ai.tech.integration.tech2',
            'services.ai.tech.integration.tech3',
            'services.ai.tech.integration.tech4',
            'services.ai.tech.integration.tech5',
            'services.ai.tech.integration.more'
        ]
    },
    {
        icon: <Brain className="w-10 h-10" />,
        title: 'services.ai.tech.nlp.title',
        description: 'services.ai.tech.nlp.description',
        technologies: [
            'services.ai.tech.nlp.tech1',
            'services.ai.tech.nlp.tech2',
            'services.ai.tech.nlp.tech3',
            'services.ai.tech.nlp.tech4',
            'services.ai.tech.nlp.tech5',
            'services.ai.tech.nlp.more'
        ]
    },
    {
        icon: <Server className="w-10 h-10" />,
        title: 'services.ai.tech.infrastructure.title',
        description: 'services.ai.tech.infrastructure.description',
        technologies: [
            'services.ai.tech.infrastructure.tech1',
            'services.ai.tech.infrastructure.tech2',
            'services.ai.tech.infrastructure.tech3',
            'services.ai.tech.infrastructure.tech4',
            'services.ai.tech.infrastructure.tech5',
            'services.ai.tech.infrastructure.more'
        ]
    }
];

const AiTechStack = () => {
    const { t } = useTranslation();
    const [activeTab, setActiveTab] = useState(0);
    const [mobileExpanded, setMobileExpanded] = useState<number | null>(0);

    const toggleMobileExpanded = (index: number) => {
        setMobileExpanded(mobileExpanded === index ? null : index);
    };

    const TechnologyItem = ({ tech }: { tech: TranslationKey }) => {

        return (
            <div className="flex items-center space-x-3">
                <div className="w-3 h-3 border border-white/70 rounded-full bg-accent flex-shrink-0" />
                <span className='text-white font-medium' >{t(tech)}</span>
            </div>
        );
    };

    return (
        <section className="py-20 md:py-40 bg-primary">
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
                        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tighter">
                            {t('services.ai.tech.title')}
                        </h2>
                        <div className="space-y-6">
                            <p className="text-3xl font-light text-gray-300/50 tracking-tight">
                                {t('services.ai.tech.subtitle')}
                            </p>
                            <p className="text-xl text-white font-light max-w-3xl mx-auto tracking-tight">
                                {t('services.ai.tech.description')}
                            </p>
                        </div>
                    </motion.div>

                    {/* Mobile Layout - Accordion */}
                    <div className="md:hidden space-y-4">
                        {techStacks.map((stack, index) => (
                            <motion.div
                                key={stack.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                            >
                                <button
                                    onClick={() => toggleMobileExpanded(index)}
                                    className="w-full"
                                >
                                    <div className={`p-6 rounded-xl transition-all duration-300 ${mobileExpanded === index
                                        ? 'bg-white/5 border border-white/10 text-white/80'
                                        : 'bg-white/10 border border-white/10 text-white'
                                        }`}>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-4">
                                                <div className={`${mobileExpanded === index
                                                    ? 'text-white/80'
                                                    : 'text-white'
                                                    }`}>
                                                    {stack.icon}
                                                </div>
                                                <h3 className="text-2xl font-bold tracking-tighter">
                                                    {t(stack.title)}
                                                </h3>
                                            </div>
                                            <ChevronDown
                                                className={`w-6 h-6 transition-transform duration-300 ${mobileExpanded === index ? 'rotate-180' : ''
                                                    }`}
                                            />
                                        </div>
                                    </div>
                                </button>

                                <AnimatePresence>
                                    {mobileExpanded === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="p-6 pt-4 space-y-4">
                                                <p className="text-xl text-white/70 tracking-tighter">
                                                    {t(stack.description)}
                                                </p>
                                                <div className="space-y-3">
                                                    {stack.technologies.map((tech) => (
                                                        <div
                                                            key={tech}
                                                            className="p-4 bg-white/10 border text-lg tracking-tighter border-white/10 rounded-lg text-white"
                                                        >
                                                            <TechnologyItem tech={tech} />
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>

                    {/* Desktop Layout - Tabs */}
                    <div className="hidden md:block">
                        <div className="flex gap-4 justify-center mb-12">
                            {techStacks.map((stack, index) => (
                                <motion.button
                                    key={stack.title}
                                    onClick={() => setActiveTab(index)}
                                    className={`flex items-center gap-3 px-8 py-4 rounded-xl tracking-tighter transition-all duration-300 ${activeTab === index
                                        ? 'bg-white/20 border border-white/10 text-white'
                                        : 'bg-white/10 border border-white/10 text-white hover:bg-white/20'
                                        }`}
                                >
                                    <div className={activeTab === index ? 'text-white' : 'text-white/90'}>
                                        {stack.icon}
                                    </div>
                                    <span className="text-xl font-medium">
                                        {t(stack.title)}
                                    </span>
                                </motion.button>
                            ))}
                        </div>

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                                className="bg-white/5 border border-white/10 rounded-3xl p-12"
                            >
                                <div className="mb-8">
                                    <h3 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-4">
                                        {t(techStacks[activeTab].title)}
                                    </h3>
                                    <p className="text-2xl text-white/70 tracking-tighter">
                                        {t(techStacks[activeTab].description)}
                                    </p>
                                </div>

                                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                                    {techStacks[activeTab].technologies.map((tech, index) => (
                                        <motion.div
                                            key={tech}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.3, delay: index * 0.1 }}
                                            className="border border-white/10 p-4 rounded-xl text-white text-lg tracking-tighter"
                                        >
                                            <TechnologyItem tech={tech} />
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AiTechStack;