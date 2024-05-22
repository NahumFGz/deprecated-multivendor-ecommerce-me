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

export async function registerApi (registerFormData) {
  try {
    const axiosInstance = createAxiosInstance()
    const response = await axiosInstance.post('/api/auth/register/', registerFormData)
    return response.data
  } catch (error) {
    if (error.response && error.response.data) {
      return error.response.data // Aquí devolvemos la respuesta del servidor, incluso si es un error
    }
    throw new Error('No se pudo conectar con la API') // Aquí lanzamos un error solo si no hay respuesta del servidor
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

export async function logoutAllApi (accessToken) {
  try {
    const axiosInstance = createAxiosAuthInstance(accessToken)
    const response = await axiosInstance.post('/api/auth/logout-all/')
    const { data, status } = response

    if (status === 200) {
      return data
    } else {
      throw new Error('Logout all failed')
    }
  } catch (error) {
    throw new Error('Logout all failed')
  }
}

export async function resetPasswordApi (email) {
  try {
    const axiosInstance = createAxiosInstance()
    const response = await axiosInstance.post('/api/auth/password-reset/', { email })
    const { data, status } = response

    if (status === 200) {
      return data
    } else {
      throw new Error('Reset password failed')
    }
  } catch (error) {
    throw new Error('Reset password failed')
  }
}

export async function refreshTokenApi (refreshToken) {
  try {
    const axiosInstance = createAxiosInstance()
    const response = await axiosInstance.post('/api/auth/refresh/', { refresh: refreshToken })
    const { data, status } = response

    if (status === 200) {
      return data
    } else {
      throw new Error('Refresh token failed')
    }
  } catch (error) {
    throw new Error('Refresh token failed')
  }
}
