import React from 'react'
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import { infoItems } from '@/constants';
import Image from 'next/image';

function Info() {
  return (
    <div className='flex items-center bg-[#5A5AC9] py-[80px] max-[420px]:px-[40px] justify-center max-[420px]:flex-col max-[420px]:w-full max-[420px]:mb-[300px] gap-[60px] my-[80px]'>
        {
          infoItems.map(item => (
            <div key={item.id} className='flex items-center justify-center gap-10 w-[300px] border-r-[1px] h-[130px]'>
            <div>
                <Image src={item.imgUrl} alt='info img' className='w-[70px]' />
              </div>
              <div className='pr-[30px]'>
                <h1 className='font-bold text-white text-lg mb-[8px]'>
                {item.title}
                </h1>
                <p className='text-white text-[16px]'>{item.text}</p>
              </div>
            </div>
      
          ))
        }
    </div>
  )
}

export default Info
