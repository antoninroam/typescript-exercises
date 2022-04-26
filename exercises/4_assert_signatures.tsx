import React from "react";

interface AccountBalanceProps {
  amount?: string | number;
}

// Make sure the amount is formatted properly depending on type. 
// `typeof` operator can be used to check the type of a variable.
export const AccountBalance: React.FC<AccountBalanceProps> = ({ amount }) => {
  const formatNumber = (value: number) => {
    return `$${value.toFixed(2)}`;
  }

  return (
    <div>
      <h1>Account balance</h1>
      <p>{formatNumber(amount)}</p>
    </div>
  );
}
