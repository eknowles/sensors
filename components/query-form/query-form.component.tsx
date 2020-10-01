import React, { useState } from 'react';
import PlusButton from '../plus-button';

export interface IQueryFormProps {}

const fieldSet = {
  name: {
    label: 'name',
    operators: ['='],
    values: [
      'Ambient temperature',
      'Carbon monoxide',
      'Nitrogen dioxide',
      'Ozone',
      'Relative humidity',
    ],
  },
  sensor_type: {
    label: 'sensor',
    operators: [{ label: '=', value: '=' }],
    values: ['CO', 'NO2', 'O3', 'RH', 'TEMP'],
  },
  box_id: {
    label: 'box',
    operators: [{ label: '=', value: '=' }],
    values: ['Box-A1', 'Box-A2', 'Box-B1', 'Box-B2'],
  },
};

const AVAILABLE_TYPES = Object.keys(fieldSet);

const QueryForm: React.FC<IQueryFormProps> = ({ children }) => {
  const [fields, setFields] = useState([]);

  const addFilter = () => {
    setFields([...fields, { type: AVAILABLE_TYPES[0] }]);
  };

  return (
    <div className="flex items-center">
      {fields.map((field, index) => (
        <div
          className="flex items-center justify-center px-1 text-green-800 bg-green-200 rounded-full mr-3"
          key={index}
        >
          <select
            name="type"
            id="type"
            className="bg-transparent font-medium hover:underline cursor-pointer appearance-none px-2"
          >
            {AVAILABLE_TYPES.map((type) => (
              <option value={type}>{fieldSet[type].label}</option>
            ))}
          </select>
          <select
            name="operator"
            id="operator"
            className="bg-transparent font-medium hover:underline cursor-pointer appearance-none px-2"
          >
            <option value="=">=</option>
          </select>
          <button className="p-2 flex items-center justify-center text-green-400 hover:text-green-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-3 h-3 fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z" />
            </svg>
          </button>
        </div>
      ))}
      <PlusButton onClick={() => addFilter()} />
    </div>
  );
};

export default QueryForm;
