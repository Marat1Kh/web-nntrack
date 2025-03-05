'use client';

import React from 'react';
import { Container } from '@/components/Container';
import Image from 'next/image';
import Link from 'next/link';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-8">
      <Container>
        <div className="flex flex-col">
          {/* Main content area */}
          <div className="flex flex-col md:flex-row mb-10 items-start">
            {/* NNTrack Logo */}
            <div className="mb-8 md:mb-0 flex-shrink-0">
              <Image
                src="/nntrackk.png"
                alt="NNTrack Logo"
                width={300}
                height={80}
                style={{ objectFit: 'contain' }}
              />
            </div>

            {/* Spacer of 133px */}
            <div className="hidden md:block w-[133px]"></div>

            {/* Three columns with headings */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 flex-1">
              {/* Social Media */}
              <div className="text-center md:text-left md:pr-[105px]">
              <h3 className="text-lg font-normal mb-4 uppercase whitespace-nowrap">
                Наши соцсети
              </h3>

                <a 
                  href="https://t.me/nntrack" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <div className="bg-transparent border border-gray-700 rounded-full w-10 h-10 flex items-center justify-center">
                    {/* Telegram icon */}
                    <svg
                      className="fill-current text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="100"
                      height="100"
                      viewBox="0 0 100 100"
                    >
                      <path d="M 50 14 C 30.129581 14 14 30.129595 14 50 C 14 69.870405 30.129581 86 50 86 C 69.870419 86 86 69.870405 86 50 C 86 30.129595 69.870419 14 50 14 z M 50 16 C 68.78954 16 84 31.210473 84 50 C 84 68.789527 68.78954 84 50 84 C 31.21046 84 16 68.789527 16 50 C 16 31.210473 31.21046 16 50 16 z M 50 19 C 32.884791 19 19 32.884791 19 50 C 19 67.115209 32.884791 81 50 81 C 67.115209 81 81 67.115209 81 50 C 81 40.904382 77.079076 32.716819 70.835938 27.046875 A 0.50005 0.50005 0 1 0 70.164062 27.787109 C 76.206924 33.275165 80 41.191618 80 50 C 80 66.574791 66.574791 80 50 80 C 33.425209 80 20 66.574791 20 50 C 20 33.425209 33.425209 20 50 20 C 53.630741 20 57.108062 20.645941 60.328125 21.826172 A 0.50018397 0.50018397 0 1 0 60.671875 20.886719 C 57.343938 19.66695 53.749259 19 50 19 z M 63.480469 22.140625 A 0.50005 0.50005 0 0 0 63.277344 23.091797 C 63.947092 23.423229 64.604492 23.779343 65.246094 24.158203 A 0.50005 0.50005 0 1 0 65.753906 23.296875 C 65.091508 22.905735 64.414908 22.53788 63.722656 22.195312 A 0.50005 0.50005 0 0 0 63.480469 22.140625 z M 67.507812 24.511719 A 0.50005 0.50005 0 0 0 67.457031 24.513672 A 0.50005 0.50005 0 0 0 67.212891 25.425781 C 67.545583 25.65906 67.873213 25.899999 68.195312 26.146484 A 0.50080937 0.50080937 0 1 0 68.804688 25.351562 C 68.470787 25.096048 68.130417 24.848143 67.787109 24.607422 A 0.50005 0.50005 0 0 0 67.507812 24.511719 z M 64.375 34 C 63.476075 34 62.601434 34.413201 62.599609 34.414062 L 29.75 47.712891 C 29.702565 47.72856 29.340082 47.851727 28.941406 48.117188 C 28.516073 48.4004 28 48.891137 28 49.626953 C 28 50.41323 28.480715 50.965082 28.904297 51.269531 C 29.327878 51.573981 29.75 51.697266 29.75 51.697266 A 0.50005 0.50005 0 0 0 29.761719 51.699219 L 37.363281 53.761719 C 37.442004 53.981983 38.300354 56.382225 39.246094 59.025391 C 39.740179 60.406266 40.237195 61.791758 40.615234 62.845703 C 40.804254 63.372676 40.963406 63.81643 41.078125 64.134766 C 41.135485 64.293934 41.181557 64.422079 41.214844 64.513672 C 41.248134 64.605262 41.254427 64.628694 41.279297 64.689453 C 41.480639 65.181984 41.662713 65.467156 41.837891 65.652344 C 41.925481 65.744934 42.014211 65.811584 42.099609 65.857422 C 42.12055 65.868662 42.140116 65.874153 42.160156 65.882812 A 0.50005 0.50005 0 0 0 42.169922 65.888672 C 42.17323 65.890239 42.176375 65.89105 42.179688 65.892578 C 42.193724 65.898104 42.20877 65.905884 42.222656 65.910156 C 42.239512 65.915346 42.249254 65.915902 42.269531 65.919922 C 42.430547 65.977645 42.59317 66.003698 42.742188 65.994141 C 43.226669 65.974381 43.566406 65.707031 43.566406 65.707031 A 0.50005 0.50005 0 0 0 43.597656 65.679688 L 48.550781 61.103516 L 56.039062 67.439453 C 56.039062 67.439453 56.223096 67.604589 56.505859 67.738281 C 56.788623 67.872015 57.201788 68 57.726562 68 C 58.699743 68 59.357346 67.564591 59.705078 67.123047 C 60.05281 66.681502 60.134766 66.214844 60.134766 66.214844 L 60.134766 66.222656 C 60.134766 66.222656 61.580813 58.726845 63.033203 51.197266 C 63.759398 47.432476 64.487017 43.659577 65.035156 40.810547 C 65.309226 39.386032 65.539226 38.191691 65.701172 37.345703 C 65.782142 36.922709 65.846072 36.586557 65.890625 36.351562 C 65.912905 36.234065 65.931139 36.141807 65.943359 36.076172 C 65.955589 36.010532 65.956987 36.014912 65.966797 35.943359 C 65.986022 35.804288 66 35.654058 66 35.5 C 66 35.054167 65.80256 34.645736 65.494141 34.384766 C 65.185721 34.123795 64.7875 34 64.375 34 z M 64.375 35 C 64.5875 35 64.751779 35.0637 64.849609 35.146484 C 64.94744 35.229264 65 35.320833 65 35.5 C 65 35.58794 64.991302 35.699724 64.976562 35.806641 C 64.984062 35.751961 64.970864 35.830871 64.958984 35.894531 C 64.947124 35.958191 64.930373 36.049079 64.908203 36.166016 C 64.863863 36.399889 64.799666 36.735509 64.71875 37.158203 C 64.556919 38.003591 64.328727 39.196734 64.054688 40.621094 C 63.506608 43.469813 62.778914 47.243103 62.052734 51.007812 C 60.600375 58.537233 59.152344 66.033203 59.152344 66.033203 A 0.50005 0.50005 0 0 0 59.150391 66.041016 C 59.150391 66.041016 59.112441 66.259451 58.919922 66.503906 C 58.727454 66.748375 58.426383 67 57.726562 67 C 57.361339 67 57.101331 66.915239 56.933594 66.835938 C 56.765857 66.756627 56.720703 66.708984 56.720703 66.708984 A 0.50005 0.50005 0 0 0 56.703125 66.691406 L 44.619141 56.464844 L 59.541016 42.273438 L 59.501953 42.306641 C 59.830382 42.053751 60 41.668049 60 41.285156 A 0.50005 0.50005 0 0 0 60 41.283203 C 59.998399 41.015892 59.91381 40.74217 59.740234 40.511719 C 59.497398 40.185257 59.119542 40.002224 58.738281 40 L 58.736328 40 C 58.46081 39.9987 58.183998 40.09149 57.955078 40.267578 L 57.996094 40.238281 L 37.746094 52.771484 L 37.998047 52.914062 A 0.50005 0.50005 0 0 0 37.880859 52.867188 L 30.027344 50.736328 L 30.023438 50.734375 C 30.014337 50.731575 29.756041 50.651435 29.488281 50.458984 C 29.2159 50.26323 29 50.019676 29 49.626953 C 29 49.37777 29.20243 49.144757 29.496094 48.949219 C 29.789758 48.753681 30.091797 48.652344 30.091797 48.652344 A 0.50005 0.50005 0 0 0 30.125 48.640625 L 62.988281 35.335938 A 0.50005 0.50005 0 0 0 63.001953 35.330078 C 63.001953 35.330078 63.814863 35 64.375 35 z M 58.732422 41 C 58.808562 41.000332 58.880665 41.03034 58.939453 41.109375 A 0.50005 0.50005 0 0 0 58.941406 41.111328 C 58.979566 41.161618 58.99924 41.222623 59 41.287109 C 58.999485 41.375539 58.9617 41.460899 58.890625 41.515625 A 0.50005 0.50005 0 0 0 58.851562 41.548828 L 43.525391 56.125 A 0.50005 0.50005 0 0 0 43.376953 56.408203 L 43.373047 56.408203 L 42.107422 64.042969 C 42.080122 63.967529 42.055118 63.90105 42.017578 63.796875 C 41.903184 63.479441 41.74362 63.034543 41.554688 62.507812 C 41.17682 61.454354 40.68154 60.06825 40.1875 58.6875 C 39.267471 56.116189 38.476714 53.907363 38.355469 53.568359 L 58.523438 41.087891 A 0.50005 0.50005 0 0 0 58.564453 41.058594 C 58.621023 41.015084 58.678551 40.99967 58.732422 41 z M 44.216797 57.435547 L 47.78125 60.453125 L 42.982422 64.886719 L 44.216797 57.435547 z"></path>
                    </svg>
                  </div>
                </a>
              </div>

              {/* Contacts */}
              <div className="text-center md:text-left md:pr-[115px]">
                <h3 className="text-lg font-normal mb-3 uppercase">
                  Контакты
                </h3>
                <p className="mb-1 font-normal whitespace-nowrap">+7 (999) 999-99-99</p>
                <p className="mb-1 font-normal">hello@nntrack.ru</p>
              </div>

              {/* Site Sections */}
              <div className="text-center md:text-left">
                <h3 className="text-lg font-normal mb-3 uppercase">
                  Разделы сайта
                </h3>
                <nav>
                  <ul className="space-y-1">
                    <li>
                      <Link href="/" className="text-white hover:text-gray-300 transition">
                        Главная страница
                      </Link>
                    </li>
                    <li>
                      <Link href="/competitions" className="text-white hover:text-gray-300 transition">
                        Соревнования
                      </Link>
                    </li>
                    <li>
                      <Link href="/approbation" className="text-white hover:text-gray-300 transition">
                        Апробация
                      </Link>
                    </li>
                    <li>
                      <Link href="/knowledge" className="text-white hover:text-gray-300 transition">
                        База знаний
                      </Link>
                    </li>
                    <li>
                      <Link href="/news" className="text-white hover:text-gray-300 transition">
                        Что нового
                      </Link>
                    </li>
                    <li>
                      <Link href="/faq" className="text-white hover:text-gray-300 transition">
                        FAQ
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
          
          {/* Bottom row with copyright and robo logo */}
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0 text-sm text-gray-400">
              ООО «Брейн Девелопмент». 2025 год. Все права защищены
            </div>
            
            <div>
              <Image
                src="/robo.png"
                alt="Robo Logo"
                width={100}
                height={40}
                style={{ objectFit: 'contain' }}
              />
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};