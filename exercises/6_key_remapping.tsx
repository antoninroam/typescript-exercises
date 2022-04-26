
interface OutdatedLibraryType {
  darkMode: () => void;
  newUserProfile: () => void;
}

// Change types of `updatedLibrary` properties to boolean by creating additional type that remaps types of `OutdatedLibraryType`
const updatedLibrary: OutdatedLibraryType = {
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
