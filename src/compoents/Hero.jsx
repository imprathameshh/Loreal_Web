import React from 'react'
import { RiShoppingBagFill } from 'react-icons/ri'
import { BiRightArrowCircle } from 'react-icons/bi'
import { motion } from 'framer-motion'
import HeroImg from '../assets/hero.png'

const Hero = () => {

  const transition = { duration: 3, type: "spring" }

  return (
    <div className='hcontainer'>
      <div className='hside'>
        <span className='text1'>Skin Protection Skin</span>
        <div className='text2'>
          <span>Trendy Collection</span>
          <span>Seedily say has sutable disposal and boy. Excersice joy man child rejoiced. </span>
        </div>
      </div>

      <div className="wrapper">
        <motion.div
          initial={{ bottom: "2rem" }}
          whileInView={{ bottom: "0rem" }}
          className='blueCircle'
          transition={transition}
        ></motion.div>

        <motion.img
          transition={transition}
          initial={{ bottom: "-2rem" }}
          whileInView={{ bottom: "0rem" }}
          src={HeroImg} alt="" width={600} />


        <motion.div
          transition={transition}
          initial={{right:"58%"}}
          whileInView={{right:"38%"}}
          className='card2'>
          <RiShoppingBagFill />
          <div className='signup'>
            <span>Best SignUp offer</span>
            <div><BiRightArrowCircle /></div>
          </div>
        </motion.div>
      </div>

      <div className="hside">
        <div className="traffic">
          <span>1.5m</span>
          <span>Monthly Traffic</span>
        </div>
        <div className='customers'>
          <span>100k</span>
          <span>Happy Customers</span>
        </div>
      </div>

    </div>
  )
}

export default Hero
