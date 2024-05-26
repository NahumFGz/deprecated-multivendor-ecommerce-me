import { createAxiosAuthInstance } from './axiosInstance'

export async function getProfileApi (accessToken) {
  try {
    const axiosInstance = createAxiosAuthInstance(accessToken)
    const response = await axiosInstance.get('/api/profile/')
    const { data, status } = response

    if (status === 200) {
      return data
    } else {
      throw new Error('Get profile failed')
    }
  } catch (error) {
    throw new Error('Get profile failed')
  }
}

export async function patchProfileApi (accessToken, profile) {
  try {
    const axiosInstance = createAxiosAuthInstance(accessToken)
    const response = await axiosInstance.patch('/api/profile/', profile)
    const { data, status } = response

    if (status === 200) {
      return data
    } else {
      throw new Error('Patch profile failed')
    }
  } catch (error) {
    throw new Error('Patch profile failed')
  }
}
