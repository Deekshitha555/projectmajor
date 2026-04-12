// src/contexts/AuthContext.tsx
"use client"

import { createContext, useContext, useState, useEffect, useCallback } from 'react'

type AuthContextType = {
  isAuthenticated: boolean
  login: () => void
  logout: () => void
  checkAuth: () => boolean
}

const AuthContext = createContext<AuthContextType | null>(null)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const checkAuth = useCallback(() => {
    // More robust cookie check
    const tokenExists = document.cookie
      .split('; ')
      .some((cookie) => cookie.startsWith('authToken='))
    
    setIsAuthenticated(tokenExists)
    return tokenExists
  }, [])

  const login = useCallback(() => {
    setIsAuthenticated(true)
  }, [])

  const logout = useCallback(() => {
    // Clear cookie
    document.cookie = 'authToken=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;'
    setIsAuthenticated(false)
  }, [])

  useEffect(() => {
    // Initial check
    checkAuth()
    
    // Optional: Check auth every 30 seconds
    const interval = setInterval(checkAuth, 30000)
    return () => clearInterval(interval)
  }, [checkAuth])

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, checkAuth }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}