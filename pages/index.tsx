import Head from 'next/head';
import React from 'react';
import Table from '../components/table';

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Head>
        <title>App</title>
      </Head>
      <Table />
    </div>
  );
}
