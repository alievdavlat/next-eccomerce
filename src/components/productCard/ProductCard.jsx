import React from 'react'
import { useContext } from 'react';
import { Context } from '@/pages/_app';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Image from 'next/image';
import like from '../../assets/jpg/like.png'



function ProductCard({img, id, name, type,memory, products,setProducts,branch,screen,  model, added,  price}) {
  const { mode } = useContext(Context)
  const [ isLiked , setIsLiked ] = React.useState(false)


    const handleLike = () => {
      if (!isLiked) {
          setIsLiked(true)
      } else if(isLiked){
        setIsLiked(false)
      }
    }

      React.useEffect(() => {
          if (products.length) {
            const findIndexData = products.find(item => item.id === id)
            if(findIndexData){
              setIsLiked(true)
            }
          }
      }, [])
  return (
    <div className={`w-[350px] h-[500px] pb-4 relative rounded-md ${mode ? 'bg-white': 'bg-[#aaa]'}`}>
        <div className='absolute'>
            {
            isLiked ?     <span onClick={handleLike}> <Image  src={like} className='cursor-pointer mt-[10px]' alt='like' width={30}/> </span> : <span onClick={handleLike}> <FavoriteBorderIcon    sx={{fontSize:'30px', margin:"10px 0px 0px 0px", cursor:"pointer"}}/> </span>
            }   
       </div>
        {
          branch === 'new' &&  <div className='bg-[#5A5AC9] rounded-[5px] p-1 px-2' style={{position:'absolute', right:'10px', top:"10px"}}>
           <p className='text-[16px] text-white'>
             New
           </p>
         </div>
        }
       <div className='w-full h-[60%] mb-[50px]'>
          <img src={img} className='w-full object-cover' alt="img"  />
        </div> 
        <div  className='p-2'>
          <h4 className='text-[21px] font-bold mb-[20px]'>{name}</h4>
          <div className='flex items-start justify-start flex-col'>
          <p className='font-normal '> <b>memory:</b> {memory}</p>
          <p className='font-normal'><b>screen: </b>{screen}</p>
          <div className='flex items-center justify-between w-full'>     
                  <p className='font-normal'><b>price: </b>{price}</p>
                  <div>
                      {added ? <DeleteForeverIcon sx={{fontSize:'30px'}}/> : <ShoppingCartIcon sx={{fontSize:'30px'}}/> }
                  </div>
          </div>
          </div>
        </div>
    </div>
  )
}

export default ProductCard
