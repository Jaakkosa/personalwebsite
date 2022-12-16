import React, { createContext } from 'react'
import '../index.css'
import { motion } from "framer-motion";


const Lines = () => {



    function getWindowDimensions() {
        const { innerWidth: width, innerHeight: height } = window;
        return {
          width,
          height
        };
      }


    const x = getWindowDimensions().width * 2
    const y = 0
const Viiva = (props) => {
  return( <motion.div style={{top : props.random, left: props.left}}
    className="shootingLine"
    animate={{x,y}}
    transition={{ type: "spring", stiffness : 2}}>
  <div className='Line' style={{top : props.random}}></div>    
    </motion.div> )
}



// ei toimi koska ei ole random numero 0 ja korkeuden välillä
return(
  <div className='viivojenPaikka'>
  <Viiva random = {String(Math.random() * 1000 + 'px')} left = {(String(Math.random() * 100 - 25) + 'vw')}/> 
  <Viiva random = {String(Math.random() * 1000 + 'px')} left = {(String(Math.random() * 100 - 25) + 'vw')}/>  
  <Viiva random = {String(Math.random() * 1000 + 'px')} left = {(String(Math.random() * 100 - 25) + 'vw')}/> 
  <Viiva random = {String(Math.random() * 1000 + 'px')} left = {(String(Math.random() * 100 - 25) + 'vw')}/> 
  <Viiva random = {String(Math.random() * 1000 + 'px')} left = {(String(Math.random() * 100 - 25) + 'vw')}/> 
  <Viiva random = {String(Math.random() * 1000 + 'px')} left = {(String(Math.random() * 100 - 25) + 'vw')}/> 
  <Viiva random = {String(Math.random() * 1000 + 'px')} left = {(String(Math.random() * 100 - 25) + 'vw')}/> 
  <Viiva random = {String(Math.random() * 1000 + 'px')} left = {(String(Math.random() * 100 - 25) + 'vw')}/> 
  <Viiva random = {String(Math.random() * 1000 + 'px')} left = {(String(Math.random() * 100 - 25) + 'vw')}/> 
  <Viiva random = {String(Math.random() * 1000 + 'px')} left = {(String(Math.random() * 100 - 25) + 'vw')}/> 
  <Viiva random = {String(Math.random() * 1000 + 'px')} left = {(String(Math.random() * 100 - 25) + 'vw')}/> 
  <Viiva random = {String(Math.random() * 1000 + 'px')} left = {(String(Math.random() * 100 - 25) + 'vw')}/> 
  </div>
)
}

export {Lines}