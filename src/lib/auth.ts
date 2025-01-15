import { jwtDecode } from 'jwt-decode'

interface User {
  id: string
  email: string
  name: string
}

interface DecodedToken {
  user: User
  exp: number
}

export async function loginUser(
  password: string,
  email: string,
): Promise<void> {
  // In a real application, you would make an API call here
  // For this example, we'll simulate a successful login with a mock token
  if (email === 'user@example.com' && password === 'password') {
    const mockToken =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiMTIzIiwiZW1haWwiOiJ1c2VyQGV4YW1wbGUuY29tIiwibmFtZSI6Ikpvw6NvIGRhIFNpbHZhIn0sImV4cCI6MTkyNTk5NjY5OX0.rOuUCTGkHcXQQZZqPJwZgRBJTTLGMqLQVlZXWZZZZZZ'
    localStorage.setItem('token', mockToken)
    return
  }
  throw new Error('Invalid credentials')
}

export function logoutUser(): void {
  localStorage.removeItem('token')
}

export function getCurrentUser(): User | null {
  const token = localStorage.getItem('token')
  if (!token) return null

  try {
    const decoded = jwtDecode<DecodedToken>(token)
    if (Date.now() >= decoded.exp * 1000) {
      localStorage.removeItem('token')
      return null
    }
    return decoded.user
  } catch {
    return null
  }
}

export function isAuthenticated(): boolean {
  return getCurrentUser() !== null
}
