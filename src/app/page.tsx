'use client';

import Image from 'next/image';
import { Container } from '@/components/Container';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { CheckIcon } from 'lucide-react';
import FlowDiagram from '@/components/Approbation';
import Information from '@/components/Informations';

export default function Home() {
  const { t, language } = useLanguage();

  // Translations for the home page
  const translations = {
    en: {
      title: "Neural Network Track is a visual modeling environment for convolutional neural network architecture, its training and export for subsequent use on Artintrek hardware module",
      whatNNTrackDoes: "What NNTrack does:",
      visualModeling: {
        title: "Visual modeling",
        description: "You build a model by placing different blocks on the screen, like assembling a puzzle"
      },
      modelTraining: {
        title: "Model training",
        description: "You configure neural network training parameters, and NNTrack handles the complex task of training the model on your data"
      },
      modelTesting: {
        title: "Model testing",
        description: "NNTrack allows you to test trained models directly in the interface, ensuring ease and efficiency of work"
      },
      modelExport: {
        title: "Model export",
        description: "After training, the model can be used in other applications, on the special Artintrek device and on other domestic platforms"
      },
    },
    ru: {
      title: "Neural Network Track - это среда визуального моделирования архитектуры сверточной нейронной сети, ее обучения и экспорта для последующего использования на аппаратном модуле Артинтрек",
      whatNNTrackDoes: "Что делает NNTrack:",
      visualModeling: {
        title: "Визуальное моделирование",
        description: "Вы строите модель, соединяя различные блоки на экране, как будто собираете пазл"
      },
      modelTraining: {
        title: "Обучение модели",
        description: "Вы настраиваете параметры обучения нейронной сети, а NNTrack берет на себя сложную задачу обучения модели на ваших данных"
      },
      modelTesting: {
        title: "Тестирование модели",
        description: "NNTrack позволяет тестировать обученные модели прямо в интерфейсе, обеспечивая удобство и эффективность работы"
      },
      modelExport: {
        title: "Экспорт модели",
        description: "После обучения модель можно использовать в других приложениях, на специальном устройстве Артинтрек и на других отечественных платформах"
      },
    }
  };

  const content = language === 'en' ? translations.en : translations.ru;

  return (
    <main className="py-12 bg-white">
      <Container>
        {/* Top Section: Title & Logo */}
        <div className="mb-12">
          <div className="flex items-start justify-between">
            <p className="text-black text-lg max-w-2xl">
              {content.title}
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

        {/* Middle Section: What NNTrack does */}
        <h2 className="text-3xl font-bold mb-8 text-black">
          {content.whatNNTrackDoes}
        </h2>

        <div className="flex flex-col lg:flex-row gap-8 items-start mb-16">
          {/* Features List */}
          <div className="flex-1">
            <div className="space-y-6">
              {/* Feature 1 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center">
                  <CheckIcon size={16} className="text-white" />
                </div>
                <div>
                  <h3 className="font-medium text-lg text-black">
                    {content.visualModeling.title}
                  </h3>
                  <p className="text-gray-700">
                    {content.visualModeling.description}
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center">
                  <CheckIcon size={16} className="text-white" />
                </div>
                <div>
                  <h3 className="font-medium text-lg text-black">
                    {content.modelTraining.title}
                  </h3>
                  <p className="text-gray-700">
                    {content.modelTraining.description}
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center">
                  <CheckIcon size={16} className="text-white" />
                </div>
                <div>
                  <h3 className="font-medium text-lg text-black">
                    {content.modelTesting.title}
                  </h3>
                  <p className="text-gray-700">
                    {content.modelTesting.description}
                  </p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center">
                  <CheckIcon size={16} className="text-white" />
                </div>
                <div>
                  <h3 className="font-medium text-lg text-black">
                    {content.modelExport.title}
                  </h3>
                  <p className="text-gray-700">
                    {content.modelExport.description}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <Link href="/competitions">
              </Link>
            </div>
          </div>

          {/* Network Diagram on the Right */}
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

          {/* Approbation Flow Diagram Component */}
          <div className="w-full">
            <div className="flex flex-col gap-8">
              <FlowDiagram />
              <Information/>
            </div>
          </div>
      </Container>
    </main>
  );
}