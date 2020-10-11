import React from 'react';

export interface ITableHeaderCellProps {
  sort: number;
  onClick: () => void;
}

const SortIcon = ({ value }) => {
  if (value === 0) {
    return null;
  }

  const pathAsc =
    'M6 22l6-8h-4v-12h-4v12h-4l6 8zm11.694-19.997h2.525l3.781 10.997h-2.421l-.705-2.261h-3.935l-.723 2.261h-2.336l3.814-10.997zm-.147 6.841h2.736l-1.35-4.326-1.386 4.326zm-.951 11.922l3.578-4.526h-3.487v-1.24h5.304v1.173l-3.624 4.593h3.633v1.234h-5.404v-1.234z';
  const pathDesc =
    'M6 2l-6 8h4v12h4v-12h4l-6-8zm18 9v2h-8v-1.984l.009-.012 5.086-7.004h-5.095v-1.993h7.985v1.887l-5.318 7.106h5.333zm-4.946 4.011h1.586l2.374 6.989h-1.521l-.442-1.436h-2.471l-.455 1.436h-1.466l2.395-6.989zm-.093 4.348h1.719l-.848-2.75-.871 2.75z';

  const path = value === 1 ? pathAsc : pathDesc;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="ml-auto fill-current w-5 h-5"
    >
      <path d={path} />
    </svg>
  );
};

const sortLabel = {
  '-1': ' (Descending Order)',
  '0': '',
  '1': ' (Ascending Order)',
};

const TableHeaderCell: React.FC<ITableHeaderCellProps> = ({
  children,
  sort = 0,
  onClick,
}) => {
  return (
    <th
      className="text-left border-b border-gray-400 border-solid"
      title="Click to reorder"
    >
      <button
        className="flex w-full px-2 py-2 justify-start items-center text-gray-800 hover:text-gray-900 hover:bg-gray-200 font-bold text-sm"
        onClick={onClick}
        type="button"
        aria-label={`${children}${sortLabel[sort.toString()]}`}
      >
        <span>{children}</span>
        <SortIcon value={sort} />
      </button>
    </th>
  );
};

export default TableHeaderCell;
