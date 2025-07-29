import Navbar from './Narbar'
import { Outlet } from 'react-router'
import Footer from './Footer'

const PageLayout = () => {
  return (
    <div className='min-h-screen '>
        <Navbar />
        <Outlet />
        <Footer />
    </div>
  )
}

export default PageLayout