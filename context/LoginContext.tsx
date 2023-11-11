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
  isLogin: boolean;
  setIsLogin: Dispatch<SetStateAction<boolean>>;
}

const LoginContext = createContext<LoginContextType>({
  isLogin: false,
  setIsLogin: () => {},
});

export const useLoginContext = () => useContext(LoginContext);

export const LoginProvider = ({ children }: { children: ReactNode }) => {
  const [isLogin, setIsLogin] = useState(false);

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
