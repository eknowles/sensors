import React from 'react';
import QueryForm from '../query-form';

export interface IQuerySectionProps {
}

const QuerySection: React.FC<IQuerySectionProps> = ({ children }) => {
  return (
    <section className="p-4 bg-white border-solid border-gray-300 border-b flex items-center">
      <div className="uppercase text-sm font-bold text-gray-700 mr-4">Query</div>
      <QueryForm />
    </section>
  );
};

export default QuerySection;
