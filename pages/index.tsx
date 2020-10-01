import Head from 'next/head';
import React from 'react';
import QuerySection from '../components/query-section';

export default function Home() {
  return (
    <div>
      <Head>
        <title>App</title>
      </Head>
      <QuerySection />
    </div>
  );
}
