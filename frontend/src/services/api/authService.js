import { createAxiosInstance, createAxiosAuthInstance } from './axiosInstance'

export async function loginApi (email, password) {
  try {
    const axiosInstance = createAxiosInstance()
    const response = await axiosInstance.post('/api/auth/login/', { email, password })
    const { data, status } = response

    if (status === 200) {
      return data
    } else {
      throw new Error('Login failed')
    }
  } catch (error) {
    throw new Error('Login failed')
  }
}

export async function authMeApi (accessToken) {
  try {
    const axiosInstance = createAxiosAuthInstance(accessToken)
    const response = await axiosInstance.get('/api/auth/me/')
    const { data, status } = response

    if (status === 200) {
      return data
    } else {
      throw new Error('Auth failed')
    }
  } catch (error) {
    throw new Error('Auth failed')
  }
}
