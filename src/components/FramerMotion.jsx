import React from 'react'
import { motion } from 'framer-motion'
import PropTypes from "prop-types"

function FramerMotion({children}) {
  return (
    <motion.div
        initial={{opacity:0, x:"200px"}}
        whileInView={{opacity:1,x:"0px"}}
        transition={{duration:0.8}}
        viewport={{ once: true }}

    >
        {children}
    </motion.div>
  )
}
FramerMotion.propTypes = {
    children: PropTypes.node.isRequired
  };
  

export default FramerMotion