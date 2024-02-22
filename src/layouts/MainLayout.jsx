import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const MainLayout = ({children}) => {
  return (
    <div className=' my-8 min-h-screen flex justify-between flex-col'>
        <Navbar />
            {children}
        <Footer />  
    </div>
  )
}

export default MainLayout