import axios from 'axios'
import { loginRefreshApi } from './authService'
import { useAuthStore } from '../../store/useAuthStore'

const BASE_URL = import.meta.env.VITE_BASE_API_URL

function createAxiosInstance () {
  return axios.create({
    baseURL: BASE_URL,
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

function createAxiosAuthInstance () {
  const token = useAuthStore((store) => store.token)
  const setToken = useAuthStore((store) => store.setToken)
  const cleanStore = useAuthStore((store) => store.cleanStore)

  const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
      'Content-Type': 'application/json'
    }
  })

  axiosInstance.interceptors.request.use(
    (config) => {
      const accessToken = token?.access
      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`
      }
      return config
    },
    (error) => {
      return Promise.reject(error)
    }
  )

  axiosInstance.interceptors.response.use(
    (response) => {
      return response
    },
    async (error) => {
      const originalRequest = error.config
      if (error.response && error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true
        const refreshToken = token?.refresh
        if (refreshToken) {
          try {
            console.log('Refreshing token')
            const rotateToken = await loginRefreshApi(refreshToken)
            setToken(rotateToken)
            originalRequest.headers.Authorization = `Bearer ${rotateToken.access}`
            return axiosInstance(originalRequest)
          } catch (err) {
            console.log('Error refreshing token', err)
            cleanStore()
            // Opcional: redirigir al usuario a la página de inicio de sesión
            // window.location.href = '/login'
          }
        }
      }
      return Promise.reject(error)
    }
  )

  return axiosInstance
}

export { createAxiosInstance, createAxiosAuthInstance }
