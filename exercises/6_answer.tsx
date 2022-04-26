
interface OutdatedLibraryType {
  darkMode: () => void;
  newUserProfile: () => void;
}

type UpdateLibraryType<Type> = {
  [Property in keyof Type]: boolean;
}

const updatedLibrary: UpdateLibraryType<OutdatedLibraryType> = {
  darkMode: false,
  newUserProfile: true
}

export const UserProfile: React.FC<{ userName?: string }> = ({ userName }) => {
  const { darkMode, newUserProfile } = updatedLibrary;
  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      <h1>{newUserProfile ? 'User profile' : `Hello ${userName}`}</h1>
    </div>
  );
}
