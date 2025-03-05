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
  const mapRef = useRef<any>(null); // Will hold reference to ymaps.Map
  const objectManagerRef = useRef<any>(null); // Will hold reference to ymaps.ObjectManager

  // Fetch data.json for sidebar
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        setFeatures(data.features || []);
      })
      .catch((err) => console.error("Error fetching data.json:", err));
  }, []);

  // Initialize map once the script is loaded
  useEffect(() => {
    // If script not loaded or already initialized, do nothing
    if (!window.ymaps || mapRef.current) return;

    window.ymaps.ready(() => {
      if (!mapContainerRef.current) return;

      // Create the map
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

      // Create ObjectManager
      const objectManager = new window.ymaps.ObjectManager({
        clusterize: true,
        gridSize: 32,
        clusterDisableClickZoom: true,
      });

      // Style the points and clusters
      objectManager.objects.options.set("preset", "islands#greenDotIcon");
      objectManager.clusters.options.set("preset", "islands#greenClusterIcons");

      // Add to map
      myMap.geoObjects.add(objectManager);

      // Fetch data.json for the map as well
      fetch("/data.json")
        .then((res) => res.json())
        .then((data) => {
          objectManager.add(data);
        })
        .catch((err) => console.error("Error fetching data.json:", err));

      // Store references
      mapRef.current = myMap;
      objectManagerRef.current = objectManager;

      // Add resize event listener to update map size when window is resized
      const resizeHandler = () => {
        if (mapRef.current) {
          mapRef.current.container.fitToViewport();
        }
      };
      window.addEventListener('resize', resizeHandler);
      
      // Return cleanup function
      return () => {
        window.removeEventListener('resize', resizeHandler);
      };
    });

    // Cleanup in case of Strict Mode double-mount
    return () => {
      if (mapRef.current) {
        mapRef.current.destroy();
        mapRef.current = null;
      }
    };
  }, []);

  // Handle clicking on a sidebar item
  function handleClick(feature: Feature) {
    if (!mapRef.current || !objectManagerRef.current) return;
    // Center map on that coordinate
    mapRef.current.setCenter(feature.geometry.coordinates, 14, { duration: 300 });
    // Open the balloon for that object's ID
    objectManagerRef.current.objects.balloon.open(feature.id);
  }

  // Get window width for responsive design
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1200
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Call handler right away to update initial state
    handleResize();
    
    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Determine if we're on mobile view
  const isMobile = windowWidth < 768;

  return (
    <>
      {/* Load Yandex Maps script first */}
      <Script
        src="https://api-maps.yandex.ru/2.1/?lang=en_RU&amp;apikey=64fa6e23-cbd9-4983-bbe7-67c2788eed4a"
        strategy="beforeInteractive"
      />
      {/* Main container with border */}
      <main style={{ 
        width: "100%", 
        maxWidth: "1200px", 
        margin: "20px auto", 
        border: "1px solid #ccc", 
        borderRadius: "5px",
        overflow: "hidden",
        fontFamily: "Arial, sans-serif"
      }}>
        <Container>
        {/* Header */}
        <div style={{ 
          padding: isMobile ? "15px" : "20px", 
          borderBottom: "1px solid #ccc",
          background: "#fff" 
        }}>
          <h1 style={{ 
            fontSize: isMobile ? "20px" : "24px", 
            margin: "0 0 15px 0",
            fontWeight: "bold",
            textAlign: "center" 
          }}>
            Апробация
          </h1>
          <p style={{ 
            margin: "0 0 10px 0", 
            fontSize: isMobile ? "13px" : "14px" 
          }}>
            На данный момент программное обеспечение NNTrack проходит и проводит апробацию в следующих учреждениях:
          </p>
          <ol style={{ 
            margin: "10px 0 0 20px", 
            fontSize: isMobile ? "13px" : "14px" 
          }}>
            <li>1 строчка</li>
            <li>2 строчка</li>
            <li>3 строчка</li>
            <li>4 строчка</li>
            <li>5 строчка</li>
          </ol>
        </div>

        {/* Map and sidebar container - flex direction changes based on screen size */}
        <div style={{ 
          display: "flex", 
          flexDirection: isMobile ? "column" : "row",
          height: isMobile ? "auto" : "500px"
        }}>
          {/* Sidebar */}
          <div style={{
            width: isMobile ? "100%" : "300px",
            height: isMobile ? "auto" : "100%",
            background: "#fff",
            padding: "10px",
            overflowY: "auto",
            borderRight: isMobile ? "none" : "1px solid #ccc",
            borderBottom: isMobile ? "1px solid #ccc" : "none",
            fontSize: isMobile ? "13px" : "14px"
          }}>
            {features.map((feature, index) => (
              <div
                key={feature.id}
                style={{ 
                  marginBottom: "15px", 
                  padding: "10px", 
                  border: "1px solid #eee",
                  borderRadius: "4px",
                  cursor: "pointer",
                  background: "#f9f9f9"
                }}
                onClick={() => handleClick(feature)}
              >
                <div style={{ fontWeight: "bold", marginBottom: "5px" }}>
                  ИД: {index + 1}
                </div>
                <div style={{ 
                  marginBottom: "5px",
                  fontSize: isMobile ? "12px" : "inherit",
                  wordBreak: "break-word"
                }}>
                  Coordinates: {feature.geometry.coordinates.join(", ")}
                </div>
                <div style={{ 
                  color: "#3366BB", 
                  textDecoration: "underline",
                  fontSize: isMobile ? "11px" : "12px" 
                }}>
                  Your link can be here
                </div>
              </div>
            ))}
          </div>
          
          {/* Map container */}
          <div style={{ 
            flex: 1, 
            position: "relative",
            height: isMobile ? "350px" : "100%"
          }}>
            <div
              ref={mapContainerRef}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </div>
        </Container>
      </main>
    </>
  );
}