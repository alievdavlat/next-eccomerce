import Layout from '@/layout/Layout'
import React, {createContext} from 'react'
import '@/styles/globals.css'




export const Context = createContext()

export default function App({ Component, pageProps }) {
  const [mode , setMode] = React.useState(true)
  return(
  
 <Context.Provider value={{mode,setMode}}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
 </Context.Provider>
  
  )
}
