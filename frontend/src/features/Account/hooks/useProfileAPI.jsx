import { useAuthStore } from '../../../store/useAuthStore'
import { getProfileApi, patchProfileApi } from '../../../services/api/profileAPI'

export function useProfileAPI () {
  const token = useAuthStore((state) => state.token)
  const profileStore = useAuthStore((state) => state.profile)

  const getProfile = async () => {
    try {
      const response = await getProfileApi(token?.access)
      return response
    } catch (error) {
      throw new Error('Error getting profile')
    }
  }

  const patchProfile = async (profile) => {
    try {
      const response = await patchProfileApi(token?.access, profileStore.id, profile)
      return response
    } catch (error) {
      throw new Error('Error updating profile')
    }
  }

  return { getProfile, patchProfile }
}
