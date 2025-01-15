import { useEffect, useState } from 'react'

export function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem('token')
    setIsAuthenticated(!!token)
  }, [])

  const login = (username: string, password: string) => {
    // Mock login function
    if (username === 'user' && password === 'password') {
      localStorage.setItem('token', 'mock_token')
      setIsAuthenticated(true)
      return true
    }
    return false
  }

  const logout = () => {
    localStorage.removeItem('token')
    setIsAuthenticated(false)
  }

  return { isAuthenticated, login, logout }
}
