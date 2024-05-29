import { useLocation } from 'react-router-dom'
import { HeaderPrimary } from '../components/HeaderPrimary'
import { HeaderSecondadry } from '../components/HeaderSecondadry'

export function HomeLayout ({ children }) {
  const location = useLocation()
  console.log(location.pathname)

  return (
    <>
      <HeaderPrimary />
      <HeaderSecondadry />
      <div>
        {children}
      </div>
    </>
  )
}
