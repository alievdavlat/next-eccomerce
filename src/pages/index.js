import HeaderSlider from '@/components/headerSlider/HEaderSlider'
import Head from 'next/head'
import { headerSLiderItems } from '@/constants'
import Banners from '@/sections/Banners'
import OurProduct from '@/sections/OurProduct'




export default function Home() {
  return (
    <>
      <Head>
        <title>
          lapTopSHop
        </title>
        <meta http-equiv="X-UA-Compatible" content="IE=7" />
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

        <main>
          <HeaderSlider showItems={1} toScroll={1} slideData={headerSLiderItems} showText={true}/>
          <Banners/>
          <OurProduct/>
        </main>
    </>  )
}
