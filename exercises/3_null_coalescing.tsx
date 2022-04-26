import React from "react";

interface DoughnutsLeftProps {
  amount?: number;
}

// Make sure the component displays "No data" message only when `amount` is `undefined` or `null` using null coalescing operator.
export const DoughnutsLeft: React.FC<DoughnutsLeftProps> = ({ amount }) => {
  return (
    <div>
      <h1>Doughnuts Left</h1>
      <p>{amount || 'No data'}</p>
    </div>
  );
}
