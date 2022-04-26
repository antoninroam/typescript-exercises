import React from "react";

interface AccountBalanceProps {
  amount: string | number;
}

// Might be helpful in some cases
// function assertNumber(value: any): asserts value is number {
//   if (typeof value !== "number") {
//     throw new Error("Expected a number");
//   }
// }

export const AccountBalance: React.FC<AccountBalanceProps> = ({ amount }) => {
  const formatNumber = (value: number) => {
    return `$${value.toFixed(2)}`;
  }

  const formattedAmount = typeof amount === "number" ? formatNumber(amount) : amount;

  return (
    <div>
      <h1>Account balance</h1>
      <p>{formattedAmount}</p>
    </div>
  );
}