"use client";

import React, { useEffect, useRef, useState } from "react";
import { Container } from '@/components/Container';
import Script from "next/script";

declare global {
  interface Window {
    ymaps: any;
  }
}

interface Feature {
  id: number;
  geometry: {
    type: string;
    coordinates: [number, number];
  };
  properties: {
    balloonContentHeader: string;
    balloonContentBody: string;
    clusterCaption: string;
    hintContent: string;
  };
}

export default function MapsPage() {
  const [features, setFeatures] = useState<Feature[]>([]);
  const [isMobile, setIsMobile] = useState(false);
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<any>(null);
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        setFeatures(data.features || []);
      })
      .catch((err) => console.error("Error fetching data.json:", err));
  }, []);

  const handleScriptLoad = () => {
    setIsScriptLoaded(true);
  };

  useEffect(() => {
    if (!isScriptLoaded || !window.ymaps || mapRef.current) return;

    window.ymaps.ready().then(() => {
      if (!mapContainerRef.current) return;

      const myMap = new window.ymaps.Map(
        mapContainerRef.current,
        {
          center: [59.0, 32.0],
          zoom: 6,
          controls: ['zoomControl', 'fullscreenControl']
        }
      );

      const objectManager = new window.ymaps.ObjectManager({
        clusterize: true,
        gridSize: 32,
        clusterDisableClickZoom: true
      });

      objectManager.objects.options.set('preset', 'islands#violetDotIcon');
      objectManager.clusters.options.set('preset', 'islands#violetClusterIcons');

      myMap.geoObjects.add(objectManager);

      fetch("/data.json")
        .then((res) => res.json())
        .then((data) => {
          objectManager.add(data);
        })
        .catch((err) => console.error("Error loading data:", err));

      mapRef.current = myMap;

      return () => {
        if (mapRef.current) {
          mapRef.current.destroy();
          mapRef.current = null;
        }
      };
    });
  }, [isScriptLoaded]);

  const handleClick = (feature: Feature) => {
    if (mapRef.current) {
      mapRef.current.setCenter(feature.geometry.coordinates, 15, {
        duration: 500
      });
    }
  };

  return (
    <>
      <Script
        src="https://api-maps.yandex.ru/2.1/?apikey=YOUR_API_KEY&lang=ru_RU"
        onLoad={handleScriptLoad}
      />
      <main className="w-full max-w-[1200px] mx-auto my-5 border border-gray-300 rounded-md overflow-hidden font-sans">
        <Container>
          <div className={`${isMobile ? 'p-4' : 'p-5'} border-b border-gray-300 bg-white`}>
            <h1 className={`${isMobile ? 'text-2xl' : 'text-4xl'} mb-4 font-bold text-center`}>
              Апробация
            </h1>
            <p className={`mb-2.5 ${isMobile ? 'text-sm' : 'text-base'}`}>
              На данный момент программное обеспечение NNTrack проходит и проводит апробацию в следующих учреждениях:
            </p>
            <ol className={`mt-2.5 ml-5 ${isMobile ? 'text-sm' : 'text-base'} list-decimal`}>
              <li className="mb-2">Военная академия воздушно-космической обороны имени Маршала Советского Союза Г. К. Жукова. г. Тверь</li>
              <li className="mb-2">Государственное бюджетное общеобразовательное учреждение средняя общеобразовательная школа №619 Калининского района Санкт-Петербурга</li>
              <li className="mb-2">ГБОУ школа №334 Невского района Санкт-Петербурга</li>
            </ol>
          </div>
          
          <div className={`flex ${isMobile ? 'flex-col h-auto' : 'flex-row h-[500px]'}`}>
            <div className={`
              ${isMobile ? 'w-full h-auto border-b' : 'w-[300px] h-full border-r'} 
              border-gray-300 bg-white p-2.5 overflow-y-auto ${isMobile ? 'text-sm' : 'text-base'}
            `}>
              {features.map((feature) => (
                <div
                  key={feature.id}
                  className="mb-4 p-2.5 border border-gray-100 rounded cursor-pointer bg-gray-50 hover:bg-purple-50 transition-colors"
                  onClick={() => handleClick(feature)}
                >
                  <div className="font-bold mb-1.5">
                    {feature.properties.balloonContentHeader.replace(/<[^>]*>/g, '')}
                  </div>
                  <div className={`mb-1.5 ${isMobile ? 'text-xs' : ''} break-words`}>
                    {feature.properties.balloonContentBody.replace(/<[^>]*>/g, '')}
                  </div>
                  <div className={`text-purple-600 hover:text-purple-800 ${isMobile ? 'text-xs' : 'text-sm'}`}>
                    Подробнее
                  </div>
                </div>
              ))}
            </div>
            <div className={`flex-1 relative ${isMobile ? 'h-[350px]' : 'h-full'}`}>
              <div
                ref={mapContainerRef}
                className="w-full h-full"
              />
            </div>
          </div>
        </Container>
      </main>
    </>
  );
}