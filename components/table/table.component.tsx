import React from 'react';
import useReadingsTable from '../../hooks/readings-table/use-readings-table';
import TableHeaderCell from '../table-header-cell';

const Table: React.FC = () => {
  const { data, columns, setColumnSort, sortValues } = useReadingsTable();

  return (
    <table className="w-full">
      <thead>
        <tr>
          {columns.map((col) => (
            <TableHeaderCell
              hasSort={col.hasSort}
              sortValue={sortValues[col.id] || 0}
              onSortChange={(value) => setColumnSort(col.id, value)}
              key={col.id}
            >
              {col.label}
            </TableHeaderCell>
          ))}
        </tr>
      </thead>
      <tbody>
        {data &&
          data.map((dataItem) => (
            <tr key={dataItem._id} className="hover:bg-gray-200">
              {columns.map((col) => (
                <td
                  key={col.id}
                  className="text-left px-2 py-1 border-b border-gray-400 border-solid text-gray-700"
                >
                  {col.render(dataItem)}
                </td>
              ))}
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default Table;
