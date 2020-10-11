import React from 'react';

export interface ISortIconProps {
  value: number;
}

const SortIcon: React.FC<ISortIconProps> = ({ value }) => {
  let path = '';

  switch (value) {
    case 0:
      path =
        'M8 10v4h4l-6 8-6-8h4v-4h-4l6-8 6 8h-4zm10.19-1.016h3.237l.581 1.807h1.992l-3.11-8.791h-2.078l-3.138 8.792h1.921l.595-1.808zm1.641-4.974l1.11 3.459h-2.251l1.141-3.459zm-1.393 16.439h4.562v1.551h-6.787v-1.551l4.493-5.684h-4.38v-1.557h6.662v1.473l-4.55 5.768z';
      break;
    case 1:
      path =
        'M6 22l6-8h-4v-12h-4v12h-4l6 8zm11.694-19.997h2.525l3.781 10.997h-2.421l-.705-2.261h-3.935l-.723 2.261h-2.336l3.814-10.997zm-.147 6.841h2.736l-1.35-4.326-1.386 4.326zm-.951 11.922l3.578-4.526h-3.487v-1.24h5.304v1.173l-3.624 4.593h3.633v1.234h-5.404v-1.234z';
      break;
    case -1:
      path =
        'M6 2l-6 8h4v12h4v-12h4l-6-8zm18 9v2h-8v-1.984l.009-.012 5.086-7.004h-5.095v-1.993h7.985v1.887l-5.318 7.106h5.333zm-4.946 4.011h1.586l2.374 6.989h-1.521l-.442-1.436h-2.471l-.455 1.436h-1.466l2.395-6.989zm-.093 4.348h1.719l-.848-2.75-.871 2.75z';
      break;
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={`ml-auto fill-current w-5 h-5 ${
        value === 0 ? 'opacity-25' : 'opacity-75'
      }`}
    >
      <path d={path} />
    </svg>
  );
};

export default SortIcon;
