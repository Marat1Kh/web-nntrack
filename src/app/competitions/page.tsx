'use client';

import React, { useState } from 'react';
import { Container } from '@/components/Container';
import Image from 'next/image';

// Competition card component
const CompetitionCard = ({ id, dates, title, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="overflow-hidden rounded-lg mb-6">
      {/* Outer gray container */}
      <div className="bg-gray-300 rounded-lg">
        {/* Black top section with logo */}
        <div className="bg-gray-800 p-5 flex justify-center items-center">
          <div className="relative flex items-center justify-center">
            <Image
              src="/dignatera.png"
              alt="DIGNATERA"
              width={300}
              height={50}
              style={{ objectFit: 'contain' }}
            />
            {/* If you need the purple triangle, add it back here */}
            <div className="absolute left-[-30px]">
              {/* <div className="w-0 h-0 border-solid border-t-[12px] border-b-[12px] border-l-[20px]
                           border-t-transparent border-b-transparent border-l-purple-500" /> */}
            </div>
          </div>
        </div>

        {/* Light gray bottom section — now the hover trigger */}
        <div
          className="relative p-8"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Visible content */}
          <div className="text-xs text-gray-500 mb-2">{dates}</div>
          <div className="text-sm text-gray-800 font-medium">{title}</div>

          {/* Hover overlay (only appears when bottom section is hovered) */}
          <div
            className={`
              absolute inset-0 bg-gray-200 flex flex-col justify-start text-center p-2
              transition-opacity duration-300
              ${isHovered ? 'opacity-100' : 'opacity-0'}
            `}
          >
            <div className="text-gray-600 font-medium mt-2">Дата проведения</div>
            <div className="text-purple-600 text-sm mb-2">{dates}</div>
            
            <div className="text-gray-600 font-medium">Дата регистрации</div>
            <div className="text-purple-600 text-sm mb-2">
              1 января 1110 - 1 февраля 1110
            </div>
            
            <div className="text-gray-600 font-medium">Название категории</div>
            <div className="text-gray-800 text-sm mb-2">{title}</div>
            
            <div className="text-gray-600 font-medium">Возраст участников</div>
            <div className="text-gray-800 text-sm mb-2">18+</div>
            
            <a 
              href="http://www.link.ru" 
              target="_blank"
              rel="noopener noreferrer" 
              className="text-purple-600 hover:underline"
            >
              www.link.ru
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

// Sample competition data
const COMPETITIONS = [
  {
    id: 1,
    dates: '1 января 1111 - 1 февраля 1111',
    title: 'Название соревнования',
    description: 'Описание соревнования.'
  },
  {
    id: 2,
    dates: '1 января 1111 - 1 февраля 1111',
    title: 'Название соревнования',
    description: 'Описание соревнования.'
  },
  {
    id: 3,
    dates: '1 января 1111 - 1 февраля 1111',
    title: 'Название соревнования',
    description: 'Описание соревнования.'
  },
  {
    id: 4,
    dates: '1 января 1111 - 1 февраля 1111',
    title: 'Название соревнования',
    description: 'Описание соревнования.'
  },
  {
    id: 5,
    dates: '1 января 1111 - 1 февраля 1111',
    title: 'Название соревнования',
    description: 'Описание соревнования.'
  },
  {
    id: 6,
    dates: '1 января 1111 - 1 февраля 1111',
    title: 'Название соревнования',
    description: 'Описание соревнования.'
  },
  {
    id: 7,
    dates: '1 января 1111 - 1 февраля 1111',
    title: 'Название соревнования',
    description: 'Описание соревнования.'
  },
  {
    id: 8,
    dates: '1 января 1111 - 1 февраля 1111',
    title: 'Название соревнования',
    description: 'Описание соревнования.'
  },
  {
    id: 9,
    dates: '1 января 1111 - 1 февраля 1111',
    title: 'Название соревнования',
    description: 'Описание соревнования.'
  }
];

// Main competitions page component
export default function CompetitionsPage() {
  return (
    <div className="py-12">
      <Container>
        <h1 className="text-3xl font-bold text-center mb-12">Соревнования</h1>
        
        {/* Grid layout with 3 columns on desktop, 2 on tablet, 1 on mobile */}
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
