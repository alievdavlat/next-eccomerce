import React, { useContext } from "react";

// images 
import Image from "next/image";
import labTopLogo from '../../assets/jpg/428001.png'
import flag from '../../assets/svg/flag.svg'
// icons 
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import SearchIcon from '@mui/icons-material/Search';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LightModeIcon from '@mui/icons-material/LightMode';
import NightsStayIcon from '@mui/icons-material/NightsStay';


import { motion } from "framer-motion";
import { navVariants} from "@/utils/motion";
import { navbarItems } from "@/constants";
import Link from "next/link";
import { Context } from "@/pages/_app";

function Navbar() {
  const { mode,  setMode } = useContext(Context)
  
  return (
    <>
    <motion.div
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className="flex flex-col w-full bg-slate-900">


        <div className="w-full flex items-center justify-between py-12 relative px-10 max-[420px]:flex-col max-[420px]:gap-10 ">

          <div className="flex items-center gap-20 max-[420px]:flex-col max-[420px]:gap-10 ">
            <ul className="flex items-center gap-5 max-[420px]:gap-14">
              <li className="h-[20px] cursor-pointer"><FacebookIcon sx={{color:'white', cursor:"pointer"}} /></li>
              <li className="h-[20px] cursor-pointer"><TwitterIcon sx={{color:'white',cursor:"pointer"}}/></li>
              <li className="h-[20px] cursor-pointer"><YouTubeIcon sx={{color:'white',cursor:"pointer"}}/></li>
              <li className="h-[20px] cursor-pointer"><InstagramIcon sx={{color:'white',cursor:"pointer"}}/></li>

            </ul>

            <div className="absolute w-[50%] inset-0 gradient-02 ga "  />  

            <div className="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="white"
                className="w-6 h-6 mb-1">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>

              <a href="#" className="font-normal text-[18px] text-white cursor-pointer">
                +998999331564
              </a>
            </div>

          </div>

            <ul className="flex items-center gap-10">
                  <li onClick={() => setMode(p => !p)}>
                      {
                        mode ? <NightsStayIcon  sx={{fontSize:"25px", color:'white', cursor:'pointer'}} /> : <LightModeIcon sx={{fontSize:"25px", color:'white',cursor:'pointer'}}/> 
                      }
                </li>
                <li className="flex gap-2 items-center font-bold text-white leading-none cursor-pointer hover:text-blue-900 transition-all duration-150">
                  Settings
                </li>
                <li className="flex gap-2 items-center font-bold text-white leading-none cursor-pointer hover:text-blue-900 transition-all duration-150">
                  USD$
                </li>
                <li className="flex gap-2 items-center font-bold text-white leading-none cursor-pointer hover:text-blue-900 transition-all duration-150">
                  <Image src={flag} alt='flag' />
                  English
                </li>
            </ul>


        </div>
    </motion.div>

    <nav className="w-full flex items-center justify-between p-10 z-50 mx-auto max-[420px]:flex-col">
      <Link href={'/'} >
      <div className="flex items-center z-50">
        <Image src={labTopLogo} alt="logo" className="w-[70px] mb-1" />
          <h3 className={`font-bold text-3xl ${mode ? 'text-slate-800' : 'text-white'} cursor-pointer`}>LapTops</h3>
      </div>
      </Link>

      <ul className="flex items-center gap-20 max-[420px]:gap-8 ">
        {
          navbarItems.map((items, idx) => <li className={`hover:text-blue-800  ${mode ? 'text-black' : 'text-white'} curor-pointer  max-[420px]:mb-[20px] max-[420px]:text-[16px]  max-[420px]:w-full font-semibold`} key={idx}>{items}</li> )
        }
      </ul>

      <ul className="flex items-center gap-10 max-[420px]:gap-14">
       
        <li>
          <SearchIcon sx={{fontSize:"25px" , color: `${mode ? 'black': 'white'}`}}/>
        </li>
        <li>
          <FavoriteBorderIcon sx={{fontSize:"25px" , color: `${mode ? 'black': 'white'}`}}/>
        </li>
        <li>
          <LocalMallIcon sx={{fontSize:"25px" , color: `${mode ? 'black': 'white'}`}}/>
        </li>
      </ul>
    </nav>
    </>

  );
}

export default Navbar;
