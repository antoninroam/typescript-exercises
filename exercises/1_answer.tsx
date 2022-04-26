import React from "react";

interface Profile {
  name: string;
  email: string;
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
      <p>Nationality: {profile.nationality?.toUpperCase()}</p>
    </div>
  );
}
