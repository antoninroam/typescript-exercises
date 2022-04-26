import React from "react";

interface DoughnutsLeftProps {
  amount?: number;
}

export const DoughnutsLeft: React.FC<DoughnutsLeftProps> = ({ amount }) => {
  return (
    <div>
      <h1>Doughnuts Left</h1>
      <p>{amount ?? 'No data'}</p>
    </div>
  );
}
