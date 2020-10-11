import Head from 'next/head';
import React from 'react';
import Header from '../components/header';

import dynamic from 'next/dynamic';

const MapNoSSR = dynamic(() => import('../components/map'), { ssr: false });

export default function MapPage() {
  return (
    <div className="bg-gray-100 min-h-screen relative">
      <Head>
        <title>Map</title>
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
          integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
          crossOrigin=""
        />
      </Head>
      <div
        className="absolute top-0 left-0 ml-16 mt-3 z-50 shadow-2xl"
        style={{ zIndex: 99999999 }}
      >
        <Header />
      </div>
      <MapNoSSR />
    </div>
  );
}
