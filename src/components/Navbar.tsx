'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Container } from '@/components/Container';
import { useLanguage } from '@/context/LanguageContext';

export const Navbar = () => {
  const { language, setLanguage, t } = useLanguage();
  const pathname = usePathname();

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