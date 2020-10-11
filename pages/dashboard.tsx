import Head from 'next/head';
import React from 'react';
import Header from '../components/header';

export default function Dashboard() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Head>
        <title>Dashboard</title>
      </Head>
      <Header />
      Dashboard
    </div>
  );
}
