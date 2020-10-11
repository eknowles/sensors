import React, { useState } from 'react';
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((r) => r.json());

const fields = {
  id: {
    id: 'id',
    label: 'ID',
    hasSort: false,
    hasFilter: false,
    render: (d) => d.id,
  },
  box_id: {
    id: 'box_id',
    label: 'Box',
    hasSort: true,
    hasFilter: true,
    render: (d) => d.box_id,
  },
  sensor_type: {
    id: 'sensor_type',
    label: 'Sensor',
    hasSort: true,
    hasFilter: true,
    render: (d) => d.sensor_type,
  },
  name: {
    id: 'name',
    label: 'Name',
    hasSort: false,
    hasFilter: true,
    render: (d) => d.name,
  },
  reading: {
    id: 'reading',
    label: 'Reading',
    hasSort: false,
    hasFilter: true,
    render: (d) => <div className="flex w-full justify-end">{d.reading}</div>,
  },
  unit: {
    id: 'unit',
    label: 'Unit',
    hasSort: false,
    hasFilter: false,
    render: (d) => d.unit,
  },
  reading_ts: {
    id: 'reading_ts',
    label: 'Timestamp',
    hasSort: true,
    hasFilter: false,
    render: (d) => new Date(d.reading_ts).toLocaleString(),
  },
};

const columns = [
  fields.id,
  fields.box_id,
  fields.name,
  fields.reading,
  fields.unit,
  fields.sensor_type,
  fields.reading_ts,
];

const formatSort = (obj: any) => {
  const fields = Object.keys(obj)
    .map((k) => {
      if (obj[k] === 1) {
        return k;
      } else if (obj[k] === -1) {
        return `-${k}`;
      }
      return false;
    })
    .filter(Boolean);

  if (fields.length) {
    return `&sort=${fields.join(',')}`;
  }

  return '';
};

const useReadingsTable = () => {
  const fields = columns.map((col) => col.id);
  const [sortValues, setSortValues] = useState({});
  const limit = 50;
  const skip = 0; // paginate this later

  const { data, error } = useSWR(
    `/api/search?limit=${limit}&skip=${skip}&fields=${fields.join(
      ','
    )}${formatSort(sortValues)}`,
    fetcher
  );

  const setColumnSort = (field: string, value: number) => {
    setSortValues({ ...sortValues, [field]: value });

    // update search...
  };

  return {
    setColumnSort,
    sortValues,
    columns,
    data,
    error,
  };
};

export default useReadingsTable;
