import React, { createContext, useCallback, useState, useContext } from 'react';
import api from '../services/api';

interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthState {
  user: User;
  token: string;
}

interface LogInFormData {
  email: string;
  password: string;
}

interface AuthContextData {
  user: User;
  logIn(data: LogInFormData): Promise<void>;
  logOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@Plantone:token');
    const user = localStorage.getItem('@Plantone:user');

    if (token && user) {
      return {
        token,
        user: JSON.parse(user),
      };
    }

    return {} as AuthState;
  });

  const logIn = useCallback(async ({ email, password }: LogInFormData) => {
    const response = await api.post<AuthState>('sessios', {
      email,
      password,
    });

    const { user, token } = response.data;

    localStorage.setItem('@Plantone:token', token);
    localStorage.setItem('@Plantone:user', JSON.stringify(user));

    setData({ token, user });
  }, []);

  const logOut = useCallback(() => {
    localStorage.removeItem('@Plantone:token');
    localStorage.removeItem('@Plantone:user');

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  return context;
}
