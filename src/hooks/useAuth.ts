import { useContext } from 'react'

import { AuthContext } from '@/contexts/auth.context'

export function useAuth() {
  const data = useContext(AuthContext)
  return data
}
