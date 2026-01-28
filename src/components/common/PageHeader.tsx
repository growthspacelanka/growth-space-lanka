'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface PageHeaderProps {
    title: string;
    description: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, description }) => {

    return (
        <section className="bg-gray-50 h-[450px] pt-24 relative overflow-hidden flex items-center">
            <div className="container relative z-10 px-4 mx-auto">
                <div className="mx-auto max-w-4xl">
                    <div className="text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.1,
                                delay: 0.1,
                            }}
                        >
                            <h1 className="text-5xl font-bold tracking-tighter md:text-6xl lg:text-9xl text-primary">
                                {title}
                            </h1>
                            <p className="text-xl font-light tracking-tight text-gray-400 uppercase md:text-3xl">
                                {description}
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PageHeader;