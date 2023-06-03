import React from "react";
import { bannerCardsItem } from "@/constants";
import { staggerContainer } from "@/utils/motion";
import Info from "@/components/info/Info";
import { motion } from "framer-motion";
import BannerCard from "@/components/bannerCard/BannerCard";
import styles from "@/styles";

function Banners() {

  const [active, setActive] = React.useState('card-1') 


  return(
    <section className={`${styles.paddings} `} id="explore">
  <motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView={"show"}
    viewport={{ once: false, amount: 0.25 }}
    className={`${styles.innerWidth}  px-12  mx-auto  flex flex-col`}>
      
      <Info/>

    <div className="mt-[70px] flex max-[420px]:hidden  flex-row min-h-[70vh] gap-5">
      {bannerCardsItem.map( (item, idx) => (
        <BannerCard 
        key={item.id}
        {...item}
        index={idx}
        active={active}
        handleClick={setActive}
        />
      ))}
    </div>
  </motion.div>
</section>


    )
}

export default Banners;
