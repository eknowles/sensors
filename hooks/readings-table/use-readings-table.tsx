import React from 'react';
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((r) => r.json());

const columns = [
  { id: 'id', label: 'ID', render: (item) => item.id },
  {
    id: 'sensor_type',
    label: 'Sensor Type',
    render: (item) => item.sensor_type,
  },
  { id: 'name', label: 'Name', render: (item) => item.name },
  {
    id: 'reading',
    label: 'Reading',
    render: (item) => (
      <div className="flex w-full justify-end">{item.reading}</div>
    ),
  },
  { id: 'unit', label: 'Unit', render: (item) => item.unit },
  { id: 'reading_ts', label: 'Timestamp', render: (item) => item.reading_ts },
];

const useReadingsTable = () => {
  const fields = columns.map((col) => col.id);
  const limit = 30;
  const skip = 0; // paginate this later
  const { data, error } = useSWR(
    `/api/search?limit=${limit}&skip=${skip}&fields=${fields.join(',')}`,
    fetcher
  );

  return {
    columns,
    data,
    error,
  };
};

export default useReadingsTable;
