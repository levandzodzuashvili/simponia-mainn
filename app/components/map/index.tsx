/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-ignore

"use client";
import React, { useEffect, useRef } from "react";
import { mapStyle } from "../../constants/mapstyle";

// Declare google as a global type
declare global {
  interface Window {
    google?: {
      maps: {
        Map: new (
          element: HTMLElement,
          options: google.maps.MapOptions
        ) => google.maps.Map;
        Marker: new (options: google.maps.MarkerOptions) => google.maps.Marker;
      };
    };
  }
}

const MapComponent = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<google.maps.Map | null>(null);

  useEffect(() => {
    const loadGoogleMaps = () => {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyA55ccFSWuBENgWvFAl0A695JozoJLEL2c`;
      script.async = true;
      script.onload = initMap;
      document.head.appendChild(script);
    };

    const initMap = () => {
      if (mapRef.current && window.google?.maps) {
        const map = new window.google.maps.Map(mapRef.current, {
          center: { lat: 41.689335, lng: 41.7048111 },
          zoom: 14,
          styles: mapStyle,
          disableDefaultUI: true,
        });

        //create a marker
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const marker = new window.google.maps.Marker({
          position: { lat: 41.689335, lng: 41.7048111 }, // Same as map center
          map: map,
          title: "Marker Location", // Optional tooltip
          // Optional: Add custom icon
          // icon: 'path/to/custom/icon.png'
        });

        mapInstanceRef.current = map;
      }
    };

    loadGoogleMaps();

    return () => {
      const scripts = document.getElementsByTagName("script");
      for (let i = scripts.length - 1; i >= 0; i--) {
        if (scripts[i].src.includes("maps.googleapis.com")) {
          scripts[i].remove();
        }
      }
    };
  }, []);

  return <div ref={mapRef} style={{ width: "100%", height: "300px" }} />;
};

export default MapComponent;
