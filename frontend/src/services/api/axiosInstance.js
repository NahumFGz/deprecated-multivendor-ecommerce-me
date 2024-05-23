import axios from 'axios'
import { getItem as getLocalItem, setItem as setLocalItem, removeItem as removeLocalItem } from '../storage/localStorage'
import { loginRefreshApi } from './authService'

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
  const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
      'Content-Type': 'application/json'
    }
  })

  axiosInstance.interceptors.request.use(
    (config) => {
      const token = getLocalItem('token')
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
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
        const refreshToken = getLocalItem('refreshToken')
        if (refreshToken) {
          try {
            console.log('Refreshing token')
            const data = await loginRefreshApi(refreshToken)
            setLocalItem('token', data.access)
            originalRequest.headers.Authorization = `Bearer ${data.access}`
            return axiosInstance(originalRequest)
          } catch (err) {
            removeLocalItem('token')
            removeLocalItem('refreshToken')
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
