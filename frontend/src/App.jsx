import { Navigation } from './routes/Navigation'
import { ToastContainer } from 'react-toastify'

function App () {
  return (
    <>
      <Navigation />
      <ToastContainer
        position='bottom-center'
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
      />
    </>
  )
}

export default App
