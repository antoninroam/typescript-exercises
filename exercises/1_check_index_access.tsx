import React from "react";

// This example is to show the way to force Typescript to check when accessing index signatures
interface Profile {
  name: string;
  email: string;

  // index signature
  [key: string]: string;
}

interface ProfileProps {
  profile: Profile;
}

export const ProfileDetails: React.FC<ProfileProps> = ({ profile }) => {
  return (
    <div>
      <h1>Profile details</h1>
      <p>Name: {profile.name}</p>
      <p>Email: {profile.email}</p>
      <p>Nationality: {profile.nationality.toUpperCase()}</p>
    </div>
  );
}

// add "noUncheckedIndexedAccess": true flag to `tsconfig.json` and see the changes
/*
  Be mindful though that following code will result in an error
  let arr = [1, 2, 3, 4];
  arr.forEach((e, i) => {
    const n: number = arr[i]; // Error
    // Type 'number | undefined' is not assignable to type 'number'.
    console.log(n);
  });

  However, you still can access the element directly without using index
*/