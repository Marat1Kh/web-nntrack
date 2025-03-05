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
  type: string;
  id: number;
  geometry: {
    type: string;
    coordinates: [number, number];
  };
  properties: Record<string, any>;
}

export default function MapsPage() {
  const [features, setFeatures] = useState<Feature[]>([]);
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<any>(null);
  const objectManagerRef = useRef<any>(null);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        setFeatures(data.features || []);
      })
      .catch((err) => console.error("Error fetching data.json:", err));
  }, []);
  useEffect(() => {
    if (!window.ymaps || mapRef.current) return;

    window.ymaps.ready(() => {
      if (!mapContainerRef.current) return;
      const myMap = new window.ymaps.Map(
        mapContainerRef.current,
        {
          center: [55.76, 37.64],
          zoom: 10,
        },
        {
          searchControlProvider: "yandex#search",
        }
      );
      const objectManager = new window.ymaps.ObjectManager({
        clusterize: true,
        gridSize: 32,
        clusterDisableClickZoom: true,
      });
      objectManager.objects.options.set("preset", "islands#greenDotIcon");
      objectManager.clusters.options.set("preset", "islands#greenClusterIcons");
      myMap.geoObjects.add(objectManager);
      fetch("/data.json")
        .then((res) => res.json())
        .then((data) => {
          objectManager.add(data);
        })
        .catch((err) => console.error("Error fetching data.json:", err));
      mapRef.current = myMap;
      objectManagerRef.current = objectManager;
      const resizeHandler = () => {
        if (mapRef.current) {
          mapRef.current.container.fitToViewport();
        }
      };
      window.addEventListener('resize', resizeHandler);
      return () => {
        window.removeEventListener('resize', resizeHandler);
      };
    });

    return () => {
      if (mapRef.current) {
        mapRef.current.destroy();
        mapRef.current = null;
      }
    };
  }, []);

  function handleClick(feature: Feature) {
    if (!mapRef.current || !objectManagerRef.current) return;
    mapRef.current.setCenter(feature.geometry.coordinates, 14, { duration: 300 });
    objectManagerRef.current.objects.balloon.open(feature.id);
  }
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1200
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);

    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const isMobile = windowWidth < 768;

  return (
    <>
      <Script
        src="https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;apikey=64fa6e23-cbd9-4983-bbe7-67c2788eed4a"
        strategy="beforeInteractive"
      />
      <main className="w-full max-w-[1200px] mx-auto my-5 border border-gray-300 rounded-md overflow-hidden font-sans">
        <Container>
          <div className={`${isMobile ? 'p-4' : 'p-5'} border-b border-gray-300 bg-white`}>
            <h1 className={`${isMobile ? 'text-8xl' : 'text-2xl'} text-4xl mb-4 font-bold text-center`}>
              Апробация
            </h1>
            <p className={`mb-2.5 ${isMobile ? 'text-sm' : 'text-base'}`}>
              На данный момент программное обеспечение NNTrack проходит и проводит апробацию в следующих учреждениях:
            </p>
            <ol className={`mt-2.5 ml-5 ${isMobile ? 'text-sm' : 'text-base'}`}>
              <li>1 строчка</li>
              <li>2 строчка</li>
              <li>3 строчка</li>
              <li>4 строчка</li>
              <li>5 строчка</li>
            </ol>
          </div>
          
          <div className={`flex ${isMobile ? 'flex-col h-auto' : 'flex-row h-[500px]'}`}>
            <div className={`
              ${isMobile ? 'w-full h-auto border-b' : 'w-[300px] h-full border-r'} 
              border-gray-300 bg-white p-2.5 overflow-y-auto ${isMobile ? 'text-sm' : 'text-base'}
            `}>
              {features.map((feature, index) => (
                <div
                  key={feature.id}
                  className="mb-4 p-2.5 border border-gray-100 rounded cursor-pointer bg-gray-50"
                  onClick={() => handleClick(feature)}
                >
                  <div className="font-bold mb-1.5">
                    Учреждения: {index + 1}
                  </div>
                  <div className={`mb-1.5 ${isMobile ? 'text-xs' : ''} break-words`}>
                    
                  </div>
                  <div className={`text-black underline ${isMobile ? 'text-xs' : 'text-sm'}`}>
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