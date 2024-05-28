import { Header } from '../components/Header'
import { HeaderSearch } from '../components/HeaderSearch'

export function HomeLayout ({ children }) {
  return (
    <>
      <HeaderSearch />
      <Header />
      <div>
        {children}
      </div>
    </>
  )
}
