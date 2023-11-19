import { useLoginContext } from 'context/LoginContext';
import { useCallback } from 'react';

export const useLogout = () => {
  const { setIsLogin } = useLoginContext();

  const handleLogout = useCallback(
    (callback?: () => void) => {
      if (typeof window !== 'undefined') {
        localStorage.removeItem('loginToken');
        localStorage.removeItem('name');
        localStorage.removeItem('phoneNum');
        localStorage.removeItem('kakaoId');
      }

      setIsLogin(false);
      callback && callback();
    },
    [setIsLogin]
  );

  return { handleLogout };
};
