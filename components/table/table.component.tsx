import React from 'react';
import TableHeaderCell from '../table-header-cell';

export interface IColumn {
  id: string;
  label: string;
  render: (dataItem: any) => string;
}

export interface ITableProps {
  data: any[];
  columns: IColumn[];
}

const Table: React.FC<ITableProps> = ({ columns, data }) => {
  return (
    <table className="w-full">
      <thead>
        <tr>
          {columns.map((col) => (
            <TableHeaderCell sort={0} onClick={() => undefined} key={col.id}>
              {col.label}
            </TableHeaderCell>
          ))}
        </tr>
      </thead>
      <tbody>
        {data &&
          data.map((dataItem) => (
            <tr key={dataItem.id} className="hover:bg-gray-200">
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
