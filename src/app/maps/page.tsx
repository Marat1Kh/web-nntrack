"use client";

import React, { useEffect, useRef, useState } from "react";
import { Container } from "@/components/Container";
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
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<any>(null);
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Fetch features from data.json
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setFeatures(data.features || []))
      .catch((err) => console.error("Error fetching data.json:", err));
  }, []);

  // Load the Yandex Maps script manually
  useEffect(() => {
    if (window.ymaps) {
      setIsScriptLoaded(true);
      return;
    }
    const script = document.createElement("script");
    script.src =
      "https://api-maps.yandex.ru/2.1/?apikey=YOUR_API_KEY_HERE&lang=ru_RU";
    script.async = true;
    script.onload = () => setIsScriptLoaded(true);
    script.onerror = () => {
      console.error("Failed to load Yandex Maps script");
      setError("Ошибка загрузки карты. Пожалуйста, обновите страницу.");
    };
    document.head.appendChild(script);
  }, []);
  useEffect(() => {
    if (
      !isScriptLoaded ||
      !window.ymaps ||
      mapRef.current ||
      !mapContainerRef.current
    )
      return;

    window.ymaps.ready().then(() => {
      try {
        const myMap = new window.ymaps.Map(mapContainerRef.current, {
          center: [59.0, 32.0],
          zoom: 6,
          controls: ["zoomControl", "fullscreenControl"],
        });

        const objectManager = new window.ymaps.ObjectManager({
          clusterize: true,
          gridSize: 32,
          clusterDisableClickZoom: true,
        });

        objectManager.objects.options.set("preset", "islands#violetDotIcon");
        objectManager.clusters.options.set("preset", "islands#violetClusterIcons");

        myMap.geoObjects.add(objectManager);
        fetch("/data.json")
          .then((res) => res.json())
          .then((data) => {
            objectManager.add(data);
          })
          .catch((err) => {
            console.error("Error loading data:", err);
            setError("Ошибка загрузки данных. Пожалуйста, обновите страницу.");
          });

        mapRef.current = myMap;
        setTimeout(() => {
          myMap.container.fitToViewport();
        }, 100);
      } catch (e) {
        console.error("Error initializing map:", e);
        setError("Ошибка инициализации карты. Пожалуйста, обновите страницу.");
      }
    });
    return () => {
      if (mapRef.current) {
        mapRef.current.destroy();
        mapRef.current = null;
      }
    };
  }, [isScriptLoaded]);

  useEffect(() => {
    const updateMapSize = () => {
      if (mapRef.current) {
        setTimeout(() => {
          mapRef.current.container.fitToViewport();
        }, 100);
      }
    };

    window.addEventListener("resize", updateMapSize);
    window.addEventListener("orientationchange", updateMapSize);

    let resizeObserver: ResizeObserver | null = null;
    if (mapContainerRef.current) {
      resizeObserver = new ResizeObserver(updateMapSize);
      resizeObserver.observe(mapContainerRef.current);
    }

    return () => {
      window.removeEventListener("resize", updateMapSize);
      window.removeEventListener("orientationchange", updateMapSize);
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
    };
  }, []);

  const handleClick = (feature: Feature) => {
    if (mapRef.current) {
      mapRef.current.setCenter(feature.geometry.coordinates, 15, {
        duration: 500,
      });
    }
  };

  return (
    <>
      <main className="w-full max-w-[1200px] mx-auto my-5 border border-gray-300 rounded-md overflow-hidden font-sans">
        <Container>
          <div className="p-4 md:p-5 border-b border-gray-300 bg-white">
            <h1 className="text-2xl md:text-4xl mb-4 font-bold text-center">
              Апробация
            </h1>
            <p className="mb-2.5 text-sm md:text-base">
              На данный момент программное обеспечение NNTrack проходит и проводит
              апробацию в следующих учреждениях:
            </p>
            <ol className="mt-2.5 ml-5 text-sm md:text-base list-decimal">
              {features.map((feature) => (
                <li key={feature.id} className="mb-2">
                  {feature.properties.balloonContentBody
                    .replace(/<[^>]*>/g, "")
                    .replace(/\n/g, ", ")}
                </li>
              ))}
            </ol>
          </div>
          <div className="flex w-full h-auto md:h-[500px]">
            <div className="w-1/4 border-r border-gray-300 bg-white p-2.5 overflow-y-auto text-sm md:text-base">
              {features.map((feature) => (
                <div
                  key={feature.id}
                  className="mb-4 p-2.5 border border-gray-100 rounded cursor-pointer bg-gray-50 hover:bg-purple-50 transition-colors"
                  onClick={() => handleClick(feature)}
                >
                  <div className="font-bold mb-1.5">
                    {feature.properties.balloonContentHeader.replace(
                      /<[^>]*>/g,
                      ""
                    )}
                  </div>
                  <div className="mb-1.5 text-xs md:text-base break-words">
                    {feature.properties.balloonContentBody.replace(/<[^>]*>/g, "")}
                  </div>
                  <div className="text-purple-600 hover:text-purple-800 text-xs md:text-sm">
                    Подробнее
                  </div>
                </div>
              ))}
            </div>
            <div className="w-3/4 relative min-h-[350px] md:h-full">
              {!mapRef.current && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                  <div className="text-gray-500">
                    {error || "Загрузка карты..."}
                  </div>
                </div>
              )}
              <div ref={mapContainerRef} className="w-full h-full" />
            </div>
          </div>
        </Container>
      </main>
    </>
  );
}
