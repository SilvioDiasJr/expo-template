import React from 'react'

import { NavigationContainer } from '@react-navigation/native'

import { useAuth } from '@/hooks/useAuth'

import { PublicRoutes } from './public.routes'
import { PrivateRoutes } from './private.routes'

export const Routes: React.FC = () => {
  const { user } = useAuth()

  return (
    <NavigationContainer>
      {user ? <PrivateRoutes /> : <PublicRoutes />}
    </NavigationContainer>
  )
}
