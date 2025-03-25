'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Container } from '@/components/Container';
import { useLanguage } from '@/context/LanguageContext';

export const Navbar = () => {
  const { language, setLanguage, t } = useLanguage();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ru' : 'en');
  };

  const navItems = [
    { label: t('nav.competitions'), href: '/competitions' },
    { label: t('nav.approbation'), href: '/maps' },
    { label: t('nav.knowledgeBase'), href: '/knowledge-base' },
    { label: t('nav.whatsNew'), href: '/patchnote' },
    { label: t('nav.faq'), href: '/faq' },
  ];

  return (
    <nav className="w-full bg-black text-white py-4 px-4 md:px-0 relative">
      <Container>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image src="/logo.png" alt="NN" width={200} height={80} priority />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-[49px]">
            {navItems.map((item) => (
              <Link 
                key={item.href} 
                href={item.href}
                className={`hover:text-purple-400 transition-colors ${
                  pathname === item.href ? 'text-purple-400' : ''
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right side controls */}
          <div className="flex items-center">
            {/* Language toggle */}
            <button onClick={toggleLanguage} className="mr-4">
              <Image 
                src={language === 'en' ? '/uk-flag.png' : '/flag-ru.png'} 
                alt={language === 'en' ? 'English' : 'Russian'} 
                width={30} 
                height={20}
                className="rounded-sm"
              />
            </button>
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="focus:outline-none"
              >
                {mobileMenuOpen ? (
                  // Close icon
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  // Hamburger icon
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </Container>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black">
          <Container className="py-4">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link 
                  key={item.href} 
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block hover:text-purple-400 transition-colors ${
                    pathname === item.href ? 'text-purple-400' : ''
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </Container>
        </div>
      )}
    </nav>
  );
};
