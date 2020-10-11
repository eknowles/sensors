import Head from 'next/head';
import React from 'react';
import Table from '../components/table';
import useReadingsTable from '../hooks/readings-table/use-readings-table';

// const x = {
//   _id: '5f760d10a9cc8ef57a9ee4ed',
//   id: 'Box-B2-CO',
//   box_id: 'Box-B2',
//   sensor_type: 'CO',
//   unit: 'ppm',
//   name: 'Carbon monoxide',
//   range_l: 0,
//   range_u: 1000,
//   longitude: -0.06507,
//   latitude: 51.51885,
//   reading: 982,
//   reading_ts: '2019-09-10T01:00:00',
// };

export default function Home() {
  const { data, columns } = useReadingsTable();
  return (
    <div className="bg-gray-100 min-h-screen">
      <Head>
        <title>App</title>
      </Head>
      <Table columns={columns} data={data} />
    </div>
  );
}
