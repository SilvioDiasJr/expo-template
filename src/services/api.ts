import axios from 'axios'

import AsyncStorage from '@react-native-async-storage/async-storage'

import { authKey } from '@/contexts/auth.context'
import { IUserDTO } from '@/dtos/user.dto'

export const API = axios.create({
  baseURL: `${process.env.EXPO_API_URL}`,
})

API.interceptors.request.use(async function (config) {
  const storageUserData = await AsyncStorage.getItem(authKey)

  if (storageUserData) {
    const data: IUserDTO = JSON.parse(storageUserData)
    config.headers.Authorization = data.access_token
      ? `Bearer ${data.access_token}`
      : ''
  }

  return config
})
