import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

interface LoginContextType {
  isLogin: boolean | undefined;
  setIsLogin: Dispatch<SetStateAction<boolean | undefined>>;
}

const LoginContext = createContext<LoginContextType>({
  isLogin: undefined,
  setIsLogin: () => {},
});

export const useLoginContext = () => useContext(LoginContext);

export const LoginProvider = ({ children }: { children: ReactNode }) => {
  const [isLogin, setIsLogin] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    const token = localStorage.getItem('loginToken');
    if (token) {
      setIsLogin(true);
    }
  }, []);

  return (
    <LoginContext.Provider value={{ isLogin, setIsLogin }}>
      {children}
    </LoginContext.Provider>
  );
};
