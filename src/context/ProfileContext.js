import { createContext, useContext, useEffect, useState } from 'react';
import { getProfile } from '../services/profiles';
import { useUser } from './UserContext';

export const ProfileContext = createContext();

const ProfileProvider = ({ children }) => {
  const { user } = useUser();

  const [profile, setProfile] = useState({
    name: '',
    displayName: '',
    win: '',
    loss: '',
    bio: '',
    avatar: '',
  });

  useEffect(() => {
    // avoid an error on load when user logged out by wrapping this in
    // an if
    if (user.id) {
      const fetchData = async () => {
        const [resp] = await getProfile(user.id);
        setProfile(resp);
      };
      fetchData();
    }
  }, [user.id]);

  const context = { profile, setProfile };
  return (
    <ProfileContext.Provider value={context}>
      {children}
    </ProfileContext.Provider>
  );
};

const useProfile = () => {
  const context = useContext(ProfileContext);
  if (context === undefined) {
    throw new Error('useProfile must be rendered inside a ProfileProvider');
  }
  return context;
};

export { ProfileProvider, useProfile };
