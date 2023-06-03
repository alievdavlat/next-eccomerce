import Navbar from '@/components/navbar/Navbar'
import { Context } from '@/pages/_app'
import React, { useContext } from 'react'


function Layout({children}) {
  const { mode } = useContext(Context)
 
  return ( 

    <div  className={`${mode ? '' : 'bg-slate-900'}`}>
      <header className='w-full'>
        <Navbar/>
      </header>


      {children}


  
    </div>
  )
}

export default Layout
