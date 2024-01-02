

import React, {useEffect, useRef} from 'react'
import {motion, useInView, useAnimation} from 'framer-motion'

interface Props {
  children: JSX.Element;
  width?: "fit-content" | "100%";
}

const Reveal = ({ children, width = "fit-content"}: Props) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const mainControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible")
    }
  }, [isInView])

  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: {opacity: 0, x: 300},
          visible: {opacity: 1, x: 0},
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.9, delay: 0.4}}
      >
        {children}
      </motion.div>
    </div>
  )
}

export default Reveal