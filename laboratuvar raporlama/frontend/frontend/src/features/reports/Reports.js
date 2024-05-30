import React from 'react';
import { useGetReportsQuery } from '../api/apiSlice';

const Reports = () => {
  const { data, error, isLoading } = useGetReportsQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Reports</h1>
      <ul>
        {data && data.map((report) => (
          <li key={report.id}>{report.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Reports;
