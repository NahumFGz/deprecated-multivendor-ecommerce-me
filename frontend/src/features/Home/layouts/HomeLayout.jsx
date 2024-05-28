import { HeaderPrimary } from '../components/HeaderPrimary'
import { HeaderSecondadry } from '../components/HeaderSecondadry'

export function HomeLayout ({ children }) {
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
