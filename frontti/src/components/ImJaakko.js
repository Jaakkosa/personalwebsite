import React from 'react'
import ReactDOM from 'react-dom/client'
import '../index.css'
import { motion } from "framer-motion";

const ImJaakko = () => {

    const line1 = "I'm Jaakko"
    const sentence = {
        hidden: { opacity: 1 },
        visible: {
          opacity: 1,
          transition: {
            delay: 0.5,
            staggerChildren: 0.1,
          }
        }
      };
    
      const letter = {
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0
        }
      };

    

      return(
        <motion.h1
        className='imjaakkotext'
         variants={sentence} initial="hidden" animate="visible">
          {
          line1.split("").map((char, index) => {
            return (
              <motion.span key={char + "-" + index} variants={letter}>
                {char}
              </motion.span>
            );
          })}
        </motion.h1>)

}
export { ImJaakko }