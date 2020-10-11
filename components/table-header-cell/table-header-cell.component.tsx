import React from 'react';
import SortIcon from '../sort-icon';

export interface ITableHeaderCellProps {
  sortValue: number;
  hasSort: boolean;
  onSortChange: (value: number) => void;
}

const sortLabel = {
  '1': ' (Descending Order)',
  '0': '',
  '-1': ' (Ascending Order)',
};

const TableHeaderCell: React.FC<ITableHeaderCellProps> = ({
  children,
  hasSort,
  sortValue = 0,
  onSortChange,
}) => {
  const handleSortChange = () => {
    if (sortValue === 0) {
      return onSortChange(-1);
    } else if (sortValue === -1) {
      return onSortChange(1);
    } else if (sortValue === 1) {
      return onSortChange(0);
    }
  };

  return (
    <th className="text-left border-b border-gray-400 border-solid text-gray-800 hover:text-gray-900 hover:bg-gray-200 font-bold text-sm">
      {!hasSort && <span className="px-2 py-2">{children}</span>}
      {hasSort && (
        <button
          className="flex w-full px-2 py-2 justify-start items-center font-bold text-sm"
          onClick={handleSortChange}
          type="button"
          aria-label={`${children}${sortLabel[sortValue.toString()]}`}
        >
          <span>{children}</span>
          <SortIcon value={sortValue} />
        </button>
      )}
    </th>
  );
};

export default TableHeaderCell;
