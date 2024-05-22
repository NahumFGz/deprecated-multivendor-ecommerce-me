import axios from 'axios'
const BASE_URL = import.meta.env.VITE_BASE_API_URL

function createAxiosInstance () {
  return axios.create({
    baseURL: BASE_URL,
    timeout: 5000,
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

function createAxiosAuthInstance (token) {
  return axios.create({
    baseURL: BASE_URL,
    timeout: 5000,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    }
  })
}

export { createAxiosInstance, createAxiosAuthInstance }
