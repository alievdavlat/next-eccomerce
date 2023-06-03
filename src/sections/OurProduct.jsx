import React from 'react'
import { SectionTexts, SectionTitle } from '@/components/sectionText/SectionText'
import { ourProductsItems } from '@/constants'
import ProductCard from '@/components/productCard/ProductCard'
import { useContext } from 'react';
import { Context } from '@/pages/_app';
import axios from 'axios';



function OurProduct() {

  const { mode } = useContext(Context)
  const [products, setProducts] = React.useState()
  const getData = async () => {
    const res = await axios.get('https://646bc1637d3c1cae4ce4425a.mockapi.io/items')
    const data = res.data
    setProducts(data)

  }

  React.useEffect(() => {
    getData()
  }, [])

  return (
    <div className='px-12 relative'>
          <div className='flex items-center justify-center flex-col mb-[50px]'>
          <SectionTitle title={'Our products'}/>
          <SectionTexts  text={'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, culpa?'}/>
          </div>
          <br /><br />
        <div className='mb-[50px] flex items-center justify-center gap-10'>
          {
            ourProductsItems.map((item, idx) => <h4 key={idx} className={`font-bold ${mode ? 'text-black' : 'text-white'} cursor-pointer text-[16px] hover:text-blue-800`}>{item}</h4> )
          }
        </div>
            <div className='absolute gradient-03'/>
          <div  style={{ margin:'50px 0px 0px 0px', display:'flex', gap:'32px', flexWrap:"wrap", justifyContent:"center"}} className='max-[420px]:flex-col'>
            {
              products?.filter(product => product.id < 5).map(item => <ProductCard products={products} setProducts={setProducts}  key={item.id} {...item}/>)
            }
          </div>
    </div>
  )
}

export default OurProduct


