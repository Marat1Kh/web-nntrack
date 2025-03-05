'use client';

import React, { useState } from 'react';
import { Container } from '@/components/Container';
import Image from 'next/image';


const CompetitionCard = ({ id, dates, title, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="rounded-lg overflow-hidden mb-6 flex flex-col bg-gray-300"
      style={{ height: '300px' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className={`bg-gray-800 transition-all duration-300 flex justify-center items-center overflow-hidden`}
        style={{ height: isHovered ? '80px' : '150px' }}
      >
        <div
          className="relative flex items-center justify-center transition-transform duration-300"
        >
          <Image
            src="/dignatera.png"
            alt="DIGNATERA"
            width={400}
            height={50}
            style={{ objectFit: 'contain' }}
          />
        </div>
      </div>
      <div 
        className="relative transition-all duration-300 flex-1 overflow-hidden p-8"
        style={{ height: isHovered ? '220px' : '150px' }}
      >
        { !isHovered && (
          <div className="transition-opacity duration-300 opacity-100">
            <div className="text-xs text-gray-500 mb-2">{dates}</div>
            <div className="text-sm text-gray-800 font-medium">{title}</div>
          </div>
        )}

        { isHovered && (
          <div 
            className="absolute inset-0 bg-gray-200 flex flex-col justify-start text-center p-2 transition-opacity duration-300 opacity-100"
          >
            <div className="text-gray-600 font-medium mt-2">Дата проведения</div>
            <div className="text-purple-600 text-sm mb-2">{dates}</div>
            
            <div className="text-gray-600 font-medium">Дата регистрации</div>
            <div className="text-purple-600 text-sm mb-2">1 января 2025 - 1 февраля 2025</div>
            
            <div className="text-gray-600 font-medium">{title}</div>
            
            <div className="text-gray-600 font-medium">Возраст участников</div>
            <div className="text-gray-800 text-sm mb-2">18+</div>
          </div>
        )}
      </div>
    </div>
  );
};

//data
const COMPETITIONS = [
  {
    id: 1,
    dates: '20 января 2025 - 20 февраля 2025',
    title: 'Название соревнования',
    description: 'Описание соревнования.'
  },
  {
    id: 2,
    dates: '20 января 2025 - 20 февраля 2025',
    title: 'Название соревнования',
    description: 'Описание соревнования.'
  },
  {
    id: 3,
    dates: '20 января 2025 - 20 февраля 2025',
    title: 'Название соревнования',
    description: 'Описание соревнования.'
  },
  {
    id: 4,
    dates: '20 января 2025 - 20 февраля 2025',
    title: 'Название соревнования',
    description: 'Описание соревнования.'
  },
  {
    id: 5,
    dates: '20 января 2025 - 20 февраля 2025',
    title: 'Название соревнования',
    description: 'Описание соревнования.'
  },
  {
    id: 6,
    dates: '20 января 2025 - 20 февраля 2025',
    title: 'Название соревнования',
    description: 'Описание соревнования.'
  },
  {
    id: 7,
    dates: '20 января 2025 - 20 февраля 2025',
    title: 'Название соревнования',
    description: 'Описание соревнования.'
  },
  {
    id: 8,
    dates: '20 января 2025 - 20 февраля 2025',
    title: 'Название соревнования',
    description: 'Описание соревнования.'
  },
  {
    id: 9,
    dates: '20 января 2025 - 20 февраля 2025',
    title: 'Название соревнования',
    description: 'Описание соревнования.'
  },
];

export default function CompetitionsPage() {
  return (
    <div className="py-12">
      <Container>
        <h1 className="text-5xl font-bold text-center mb-12">Соревнования</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {COMPETITIONS.map((competition) => (
            <CompetitionCard
              key={competition.id}
              id={competition.id}
              dates={competition.dates}
              title={competition.title}
              description={competition.description}
            />
          ))}
        </div>
      </Container>
    </div>
  );
}
