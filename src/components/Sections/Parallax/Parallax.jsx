import styled from "styled-components";
import mountain from "../../../images/mountains.png";
import stars from "../../../images/stars.png";
import planet from "../../../images/planets.png";
import { useRef } from "react";
import { motion,useScroll, useTransform } from "framer-motion";

const Parallax = () => {
    
    let ref = useRef()

    let {scrollYProgress} = useScroll({
        target:ref,
        offset:['start start','end start']
    })

    let yBg = useTransform(scrollYProgress,[0,1],['0%','100%'])
    let yText = useTransform(scrollYProgress,[0,1],['0%','300%'])

  return (
    <ParallaxContainer ref={ref}>
      <div className="parallax"
        >
        <motion.h1 style={{y:yText}}>What I Did ?</motion.h1>
        <motion.div className="mountain"></motion.div>
        <motion.div style={{x:yBg}} className="stars"></motion.div>
        <motion.div style={{y:yBg}} className="planets"></motion.div>
      </div>
    </ParallaxContainer>
  );
};

export default Parallax;

let ParallaxContainer = styled.div`
  height: 100%;
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  .parallax {
    display: flex;
    justify-content: center;
    align-items: center;
    h1 {
      font-size: 4rem;
    }
    .mountain {
      background-image: url(${mountain});
      background-position: bottom;
      background-size: cover;
      width: 100%;
      height: 100%;
      position: absolute;
      z-index: 2;
    }
    .stars {
      background-image: url(${stars});
      background-position: top;
      background-size: cover;
      width: 100%;
      height: 100%;
      position: absolute;
    }
    .planets {
      background-image: url(${planet});
      background-position: 150%;
      background-size: cover;
      width: 100%;
      height: 100%;
      position: absolute;
    }
  }
`;
