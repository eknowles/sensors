import Head from 'next/head';
import React from 'react';
import Header from '../components/header';
import Table from '../components/table';

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Head>
        <title>Table</title>
      </Head>
      <Header />
      <Table />
    </div>
  );
}
