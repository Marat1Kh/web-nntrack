'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Container } from '@/components/Container';

export const Navbar = () => {
  const [language, setLanguage] = useState<'en' | 'ru'>('en');
  const pathname = usePathname();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ru' : 'en');
  };

  const navItems = [
    { label: language === 'en' ? 'Competitions' : 'Соревнования', href: '/competitions' },
    { label: language === 'en' ? 'Approbation' : 'Апробация', href: '/approbation' },
    { label: language === 'en' ? 'Knowledge Base' : 'База знаний', href: '/knowledge-base' },
    { label: language === 'en' ? 'What\'s New' : 'Что нового', href: '/whats-new' },
    { label: 'FAQ', href: '/faq' },
  ];

  return (
    <nav className="w-full bg-black text-white py-4">
      <Container>
        <div className="flex items-center justify-between">
          {/* Left: Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image src="/logo.png" alt="NN" width={200} height={80} priority />
            </Link>
          </div>
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
          <div>
            <button onClick={toggleLanguage} className="flex items-center justify-center">
              <Image 
                src={language === 'en' ? '/uk-flag.png' : '/flag-ru.png'} 
                alt={language === 'en' ? 'English' : 'Russian'} 
                width={30} 
                height={20}
                className="rounded-sm"
              />
            </button>
          </div>
        </div>
      </Container>
    </nav>
  );
};
