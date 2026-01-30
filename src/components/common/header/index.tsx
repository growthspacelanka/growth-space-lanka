'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence, HTMLMotionProps } from 'framer-motion';
import { content } from '@/content';

interface NavigationItem {
    label: string;
    href: string;
    submenu?: Array<{
        label: string;
        href: string;
    }>;
}

interface MotionDivProps extends HTMLMotionProps<"div"> {
    children: React.ReactNode;
}

const MotionDiv = motion.div as React.FC<MotionDivProps>;
const MotionSpan = motion.span as React.FC<HTMLMotionProps<"span">>;

const navigation: NavigationItem[] = [
    { label: content.nav.home, href: '/' },
    {
        label: content.nav.services,
        href: '#',
        submenu: [
            { label: content.nav.webDev, href: '/services/business-website' },
            { label: content.nav.ai, href: '/services/ecommerce-website' },
            { label: content.nav.socialMedia, href: '/services/social-media-management' },
            { label: content.nav.socialAds, href: '/services/social-media-ads' },
        ],
    },
    { label: content.nav.about, href: '/about' },
    { label: content.nav.contact, href: '/contact' },
];

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [isScrolled, setIsScrolled] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setActiveDropdown(null);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const toggleDropdown = (label: string) => {
        setActiveDropdown(activeDropdown === label ? null : label);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
        setActiveDropdown(null);
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? 'bg-white/80 backdrop-blur-lg border-b border-neutral-light/50 supports-[backdrop-filter]:bg-white/80'
                : 'bg-white border-b border-neutral-light'
                }`}
        >
            <div className="container">
                <div className="flex items-center justify-between h-24">
                    {/* Logo */}
                    <Link href="/" className="flex-shrink-0">
                        <Image
                            src="/growthspacelanka.svg"
                            alt="Growth Space Lanka"
                            width={260}
                            height={72}
                            priority
                            className="w-auto h-14"
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {navigation.map((item) => (
                            <div key={item.label} className="relative" ref={dropdownRef}>
                                {item.submenu ? (
                                    <div>
                                        <button
                                            onClick={() => toggleDropdown(item.label)}
                                            className="flex items-center text-gray-800 hover:text-primary transition-colors duration-200 text-2xl tracking-tighter"
                                        >
                                            {item.label}
                                            <MotionSpan
                                                animate={{ rotate: activeDropdown === item.label ? 180 : 0 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                <ChevronDown className="ml-1 h-4 w-4" />
                                            </MotionSpan>
                                        </button>
                                        <AnimatePresence>
                                            {activeDropdown === item.label && (
                                                <MotionDiv
                                                    initial={{ opacity: 0, y: -10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: -10 }}
                                                    transition={{ duration: 0.2 }}
                                                    className={`absolute top-full left-0 mt-2 w-52 rounded-lg py-2 ${isScrolled
                                                        ? 'bg-white/80 backdrop-blur-lg supports-[backdrop-filter]:bg-white/60'
                                                        : 'bg-white'
                                                        } shadow-lg`}
                                                >
                                                    {item.submenu.map((subitem) => (
                                                        <Link
                                                            key={subitem.label}
                                                            href={subitem.href}
                                                            className="block px-4 text-2xl tracking-tighter py-2 text-gray-800 hover:text-primary hover:bg-gray-50 transition-colors duration-200"
                                                            onClick={() => setActiveDropdown(null)}
                                                        >
                                                            {subitem.label}
                                                        </Link>
                                                    ))}
                                                </MotionDiv>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                ) : (
                                    <Link
                                        href={item.href}
                                        className="text-gray-800 hover:text-primary transition-colors duration-200 text-2xl tracking-tighter"
                                    >
                                        {item.label}
                                    </Link>
                                )}
                            </div>
                        ))}

                        <Link
                            href="/book-a-call"
                            className="px-6 py-2.5 bg-primary text-white rounded-full text-2xl hover:bg-primary/90 transition-colors duration-200 tracking-tighter"
                        >
                            {content.nav.getStarted}
                        </Link>
                    </nav>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            className="p-2 text-gray-800 hover:text-primary"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <MotionDiv
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className={`md:hidden border-t overflow-hidden ${isScrolled
                                ? 'bg-white/80 backdrop-blur-lg supports-[backdrop-filter]:bg-white/60'
                                : 'bg-white'
                                }`}
                        >
                            <nav className="flex flex-col space-y-4 py-4">
                                {navigation.map((item) => (
                                    <div key={item.label}>
                                        {item.submenu ? (
                                            <div>
                                                <button
                                                    onClick={() => toggleDropdown(item.label)}
                                                    className="flex items-center justify-between w-full px-4 py-2 text-gray-800 hover:text-primary tracking-tighter"
                                                >
                                                    <span className="text-2xl">{item.label}</span>
                                                    <MotionSpan
                                                        animate={{ rotate: activeDropdown === item.label ? 180 : 0 }}
                                                        transition={{ duration: 0.2 }}
                                                    >
                                                        <ChevronDown className="h-4 w-4" />
                                                    </MotionSpan>
                                                </button>
                                                <AnimatePresence>
                                                    {activeDropdown === item.label && (
                                                        <MotionDiv
                                                            initial={{ opacity: 0, height: 0 }}
                                                            animate={{ opacity: 1, height: "auto" }}
                                                            exit={{ opacity: 0, height: 0 }}
                                                            transition={{ duration: 0.2 }}
                                                            className="pl-8 mt-2 space-y-2"
                                                        >
                                                            {item.submenu.map((subitem) => (
                                                                <Link
                                                                    key={subitem.label}
                                                                    href={subitem.href}
                                                                    className="block py-2 text-gray-800 hover:text-primary text-xl tracking-tighter"
                                                                    onClick={closeMenu}
                                                                >
                                                                    {subitem.label}
                                                                </Link>
                                                            ))}
                                                        </MotionDiv>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        ) : (
                                            <Link
                                                href={item.href}
                                                className="block px-4 py-2 text-gray-800 hover:text-primary text-2xl tracking-tighter"
                                                onClick={closeMenu}
                                            >
                                                {item.label}
                                            </Link>
                                        )}
                                    </div>
                                ))}
                                <div className="px-4 pt-2">
                                    <Link
                                        href="/book-a-call"
                                        className="block w-full px-6 py-2.5 bg-primary text-white rounded-full text-2xl tracking-tighter text-center hover:bg-primary/90 transition-colors duration-200"
                                        onClick={closeMenu}
                                    >
                                        {content.nav.getStarted}
                                    </Link>
                                </div>
                            </nav>
                        </MotionDiv>
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
}