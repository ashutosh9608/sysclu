import { useEffect, useState } from 'react';
import { useAuth, UserDataType } from './AuthContext';

export const useUserData = () => {
  const { getUserData } = useAuth();
  const [userData, setUserData] = useState<UserDataType | undefined>();

  useEffect(() => {
    const data = getUserData();
    if (data) {
      setUserData(data);
    }
  }, []);

  return userData;
};