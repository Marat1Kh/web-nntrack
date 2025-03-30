'use client';

import Image from 'next/image';
import { Container } from '@/components/Container';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import FlowDiagram from '@/components/Approbation';
import Information from '@/components/Informations';

export default function Home() {
  const { t } = useLanguage();

  return (
    <main className="py-12 bg-white">
      <Container>
        <div className="mb-12">
          <div className="flex items-start justify-between">
            <p className="text-black text-lg max-w-2xl">
              {t('home.title')}
            </p>
            <div className="hidden md:block">
              <Image
                src="/nntrack_logo2.png"
                alt="NNTrack Logo"
                width={400}
                height={400}
                className="ml-4 object-contain"
              />
            </div>
          </div>
        </div>
        <h2 className="text-3xl font-bold mb-8 text-black">
          {t('home.whatNNTrackDoes')}
        </h2>

        <div className="flex flex-col lg:flex-row gap-8 items-start mb-16">
          <div className="flex-1">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
                  <span className="text-purple-600 text-3xl">✓</span>
                </div>
                <div>
                  <h3 className="font-medium text-lg text-black">
                    {t('home.features.visualModeling.title')}
                  </h3>
                  <p className="text-gray-700">
                    {t('home.features.visualModeling.description')}
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
                  <span className="text-purple-600 text-3xl">✓</span>
                </div>
                <div>
                  <h3 className="font-medium text-lg text-black">
                    {t('home.features.modelTraining.title')}
                  </h3>
                  <p className="text-gray-700">
                    {t('home.features.modelTraining.description')}
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
                  <span className="text-purple-600 text-3xl">✓</span>
                </div>
                <div>
                  <h3 className="font-medium text-lg text-black">
                    {t('home.features.modelTesting.title')}
                  </h3>
                  <p className="text-gray-700">
                    {t('home.features.modelTesting.description')}
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
                  <span className="text-purple-600 text-3xl">✓</span>
                </div>
                <div>
                  <h3 className="font-medium text-lg text-black">
                    {t('home.features.modelExport.title')}
                  </h3>
                  <p className="text-gray-700">
                    {t('home.features.modelExport.description')}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <Link href="/competitions">
              </Link>
            </div>
          </div>

          <div className="flex-none">
            <Image
              src="/network_img.png"
              alt="Neural Network Diagram"
              width={500}
              height={400}
              className="object-contain"
              priority
            />
          </div>
        </div> 
        <div className="w-full">
          <div className="flex flex-col gap-8 ">
            <div className="hidden md:block">
              <FlowDiagram />
            </div>
            <Information/>
          </div>
        </div>
      </Container>
    </main>
  );
}