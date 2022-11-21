import { AxiosError } from 'axios';
import { createContext, ReactNode, useEffect, useState } from 'react';
import { getUserByIdApi } from '../services/getUserByIdApi';
import { loginValidate } from '../services/loginValidate';
import { getTokenFromLocalStorage } from './LocalStorage';

type UserContextProps = {
  children: ReactNode;
}

const IUserDataType = {
  id: '',
  user_name: '',
  password: '',
  role: '',
  account_id: '',
  account: {
    id: '',
    balance: 0,
    agency: '',
    number: '',
    debitAccountHistory: [{} as ITransaction],
    creditAccountHistory: [{} as ITransaction],
  },
  token: '',
}

export type ITransaction = {
  debited_account_id: string;
  credited_account_id: string;
  value: number
  id: string
  created_at: string 
}

export type IUserDataType = {
  id: string;
  user_name: string;
  password: string;
  role: string;
  account_id: string;
  account: {
    id: string;
    balance: number;
    agency: string;
    number: string;
    debitAccountHistory: ITransaction[] | [];
    creditAccountHistory: ITransaction[] | [];
  },
  token: string
}

type UserContextType = {
  userData: IUserDataType;
  setUserData: React.Dispatch<React.SetStateAction<IUserDataType>>,
}

const initialValue = {
  userData: IUserDataType,
  setUserData: () => {}
}

export const UserContext = createContext<UserContextType>(initialValue);

export const UserContextProvider = ({ children }: UserContextProps) => {
  const [userData, setUserData] = useState(initialValue.userData);

  useEffect(() => {
    if (getTokenFromLocalStorage('token') && !userData.id.length) {
      (async () => {
        const token = getTokenFromLocalStorage('token');        
        
        const userId = await loginValidate(token);
        if (userId instanceof AxiosError) {
          return alert(`Sua requisição falhou (Token Invalid)==> ${userId.response?.data.error}`)
        }

        const userToSaveData = await getUserByIdApi(userId);
        if (userToSaveData instanceof AxiosError) {
          return alert(`Sua requisição falhou (User Not Found)==> ${userToSaveData.response?.data.error}`)
        }
  
        return setUserData(userToSaveData);
      })()
    }
  }, [])

  return (
    <UserContext.Provider value={ {userData, setUserData} }>
      {children}
    </UserContext.Provider>
  );
};
