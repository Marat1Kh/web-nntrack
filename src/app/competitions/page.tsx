'use client';

import React, { useState } from 'react';
import { Container } from '@/components/Container';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

interface CompetitionCardProps {
  id: number;
  dates: string;
  registrationDates: string;
  title: string;
  description: string;
  participantsAge: string;
  teamSize?: string;
  contactEmail?: string;
  telegramChannel?: string;
}

const CompetitionCard = ({
  id,
  dates,
  registrationDates,
  title,
  description,
  participantsAge,
  teamSize,
  contactEmail,
  telegramChannel,
}: CompetitionCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const { t } = useLanguage();

  return (
    <div
      className="rounded-lg overflow-hidden mb-6 flex flex-col bg-gray-300 relative"
      style={{ height: '400px' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="bg-gray-800 transition-all flex justify-center items-center overflow-hidden"
        style={{ height: '150px' }}
      >
        <div className="relative flex items-center justify-center transition-transform">
          <Image
            src="/dignatera.png"
            alt={title}
            width={400}
            height={50}
            style={{ objectFit: 'contain' }}
            className={isHovered ? 'scale-75' : ''}
          />
        </div>
      </div>
      {/* Content container */}
      <div className="relative flex-1 overflow-hidden">
        <div
          className="p-4 transition-opacity duration-300"
          style={{ height: '150px', opacity: isHovered ? 0 : 1 }}
        >
          <div className="text-xs text-gray-500 mb-2">{dates}</div>
          <div className="text-sm text-gray-800 font-medium">{title}</div>
        </div>

        <div
          className="absolute inset-0 bg-gray-200 flex flex-col justify-start p-4 transition-opacity overflow-auto"
          style={{ opacity: isHovered ? 1 : 0 }}
        >
          <h3 className="text-lg font-bold text-gray-800 mb-2">{title}</h3>
          <p className="text-sm text-gray-700 mb-3">{description}</p>
          <div className="mb-2">
            <span className="text-gray-600 font-medium text-sm">{t('competitions.eventDates')}: </span>
            <span className="text-purple-600 text-sm">{dates}</span>
          </div>
          <div className="mb-2">
            <span className="text-gray-600 font-medium text-sm">{t('competitions.registrationDates')}: </span>
            <span className="text-purple-600 text-sm">{registrationDates}</span>
          </div>
          <div className="mb-2">
            <span className="text-gray-600 font-medium text-sm">{t('competitions.participantsAge')}: </span>
            <span className="text-gray-800 text-sm">{participantsAge}</span>
          </div>
          {teamSize && (
            <div className="mb-2">
              <span className="text-gray-600 font-medium text-sm">{t('competitions.teamSize')}: </span>
              <span className="text-gray-800 text-sm">{teamSize}</span>
            </div>
          )}
          {contactEmail && (
            <div className="mb-2">
              <span className="text-gray-600 font-medium text-sm">{t('competitions.contactInfo')}: </span>
              <span className="text-gray-800 text-sm">{contactEmail}</span>
            </div>
          )}
          {telegramChannel && (
            <div className="mb-2">
              <span className="text-gray-600 font-medium text-sm">{t('competitions.telegramChannel')}: </span>
              <a
                href={telegramChannel}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 text-sm hover:underline"
              >
                {t('competitions.officialChannel')}
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const COMPETITIONS = [
  {
    id: 1,
    dates: '27 февраля 2025 - 25 апреля 2025',
    registrationDates: '27 февраля 2025 - 25 апреля 2025',
    title: 'Всероссийский Хакатон по Искусственному Интеллекту',
    description:
      'Организован совместно с Ассоциацией образовательных организаций «Консорциум по развитию школьного инженерно-технологического образования»!',
    participantsAge: '7-11 класс',
    teamSize: '1-3 человека',
    contactEmail: 'hackathon@ingtech.info',
    telegramChannel: 'https://t.me/+osTlcR2ByLJiOWIy'
  },
  {
    id: 2,
    dates: '20 января 2025 - 20 февраля 2025',
    registrationDates: '1 января 2025 - 1 февраля 2025',
    title: 'Название соревнования',
    description: 'Описание соревнования.',
    participantsAge: '18+',
    teamSize: '',
    contactEmail: '',
    telegramChannel: ''
  },
  {
    id: 3,
    dates: '27 февраля 2025 - 25 апреля 2025',
    registrationDates: '27 февраля 2025 - 25 апреля 2025',
    title: 'Всероссийский Хакатон по Искусственному Интеллекту',
    description:
      'Организован совместно с Ассоциацией образовательных организаций «Консорциум по развитию школьного инженерно-технологического образования»!',
    participantsAge: '7-11 класс',
    teamSize: '1-3 человека',
    contactEmail: 'hackathon@ingtech.info',
    telegramChannel: 'https://t.me/+osTlcR2ByLJiOWIy'
  },
  {
    id: 4,
    dates: '20 января 2025 - 20 февраля 2025',
    registrationDates: '1 января 2025 - 1 февраля 2025',
    title: 'Название соревнования',
    description: 'Описание соревнования.',
    participantsAge: '18+',
    teamSize: '',
    contactEmail: '',
    telegramChannel: ''
  },
  {
    id: 5,
    dates: '27 февраля 2025 - 25 апреля 2025',
    registrationDates: '27 февраля 2025 - 25 апреля 2025',
    title: 'Всероссийский Хакатон по Искусственному Интеллекту',
    description:
      'Организован совместно с Ассоциацией образовательных организаций «Консорциум по развитию школьного инженерно-технологического образования»!',
    participantsAge: '7-11 класс',
    teamSize: '1-3 человека',
    contactEmail: 'hackathon@ingtech.info',
    telegramChannel: 'https://t.me/+osTlcR2ByLJiOWIy'
  },
  {
    id: 6,
    dates: '20 января 2025 - 20 февраля 2025',
    registrationDates: '1 января 2025 - 1 февраля 2025',
    title: 'Название соревнования',
    description: 'Описание соревнования.',
    participantsAge: '18+',
    teamSize: '',
    contactEmail: '',
    telegramChannel: ''
  }
];

export default function CompetitionsPage() {
  const { t } = useLanguage();
  
  return (
    <div className="py-12">
      <Container>
        <h1 className="text-5xl font-bold text-center mb-12">{t('competitions.title')}</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {COMPETITIONS.map((competition) => (
            <CompetitionCard
              key={competition.id}
              id={competition.id}
              dates={competition.dates}
              registrationDates={competition.registrationDates}
              title={t(`competitions.items.${competition.id}.title`) || competition.title}
              description={t(`competitions.items.${competition.id}.description`) || competition.description}
              participantsAge={competition.participantsAge}
              teamSize={competition.teamSize}
              contactEmail={competition.contactEmail}
              telegramChannel={competition.telegramChannel}
            />
          ))}
        </div>
      </Container>
    </div>
  );
}
