import React, { createContext, useContext, useEffect, useState } from 'react'

import AsyncStorage from '@react-native-async-storage/async-storage'

import { IUserDTO } from '@/dtos/user.dto'
import { API } from '@/services/api'

interface IAuthContextData {
  user: IUserDTO | null
  signIn(email: string, password: string): Promise<void>
  logOut(): void
}

interface AuthProviderProps {
  children: React.ReactNode
}

export const AuthContext = createContext({} as IAuthContextData)

export const authKey = '@project:user'

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<IUserDTO | null>(null)



  async function signIn(cpf: string, password: string) {
    try {
      const { data } = await API.post('/auth/login', {
        cpf,
        password
      })


      const userInformation: IUserDTO = {
        ...data.data.meusdados,
        token: data.data.token,
        requestStatus: data.status
      }



      await AsyncStorage.setItem(authKey, JSON.stringify(userInformation))
      setUser(userInformation)



      API.defaults.headers.common.Authorization = `Bearer ${userInformation.access_token}`

    } catch (error: any) {
      throw new Error(error.response.data.message)
    }
  }

  async function logOut() {
    await AsyncStorage.removeItem(authKey)
    setUser(null)
  }

  // Verificação global de resposta da api
  API.interceptors.response.use(
    function (response) {
      return response
    },
    function (error) {
      if (error.response?.status === 401) {
        logOut()
      }
      return Promise.reject(error)
    },
  )

  useEffect(() => {
    async function checkIfUserIsAlreadyLoggedIn() {
      const userStorage = await AsyncStorage.getItem(authKey)


      if (userStorage) {
        const userInformation: IUserDTO = JSON.parse(userStorage)
        setUser(userInformation)



        API.defaults.headers.common.Authorization = `Bearer ${userInformation.access_token}`
      }
    }

    checkIfUserIsAlreadyLoggedIn()
  }, [])

  return (
    <AuthContext.Provider
      value={{ user, signIn, logOut }}
    >
      {children}
    </AuthContext.Provider>
  )
}

