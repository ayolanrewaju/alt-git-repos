import { Outlet } from 'react-router-dom'
import { Navbar, Footer } from '../components'

function SharedLayout() {
  return (
    <>
      <Navbar />

      <main className='main'>
        <Outlet />
      </main>

      <Footer />
    </>
  )
}

export default SharedLayout