import React from "react";

interface ButtonProps {
  onClick?: () => void;
  fullName?: string[];
  loading?: boolean;
}

// Fix the Typescript errors using optional chaining
export const Button: React.FC<ButtonProps> = ({ onClick, fullName, loading }) => {
  const handleClick = () => {
    if (!loading) {
      onClick();
    }
  }
  return (
    <button onClick={handleClick}>
      {fullName[0]}
    </button>
  );
}
