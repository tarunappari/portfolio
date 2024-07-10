import styled from "styled-components";
import Navbar from "../../Navbar/Navbar";
import whiteShirt from "../../../images/white-crop.png";
import { motion } from "framer-motion";
import scroll from "../../../images/scroll.png";

const HomePage = () => {
  let textVariant = {
    initial: {
      x: 150,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
    scrollButton: {
      opacity: 0,
      y: 10,
      transition: {
        duration: 2,
        repeat: Infinity,
      },
    },
  };

  let sliderVariant = {
    initial: {
      x: 8,
      y: -5,
    },
    animate: {
      x: "-220%",
      y: 0,
      transition: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 20,
      },
    },
  };

  return (
    <HomeContainer>
      <Navbar />
      <div className="home">
        <motion.div
          variants={textVariant}
          initial="initial"
          animate="animate"
          className="imgDiv"
        >
          <img src={whiteShirt} alt="img" className="img" />
        </motion.div>
        <motion.div
          className="info"
          variants={textVariant}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariant}>TARUN APPARI</motion.h2>
          <motion.h1 variants={textVariant}>Front-End Developer</motion.h1>
          <motion.div className="buttons" variants={textVariant}>
            <a href="#Portfolio">
              <motion.button className="filledBtn" variants={textVariant}>
                See the Works
              </motion.button>
            </a>
            <a href="#Contact">
              <motion.button className="outlinedBtn" variants={textVariant}>
                Contact Me<span>.</span>
              </motion.button>
            </a>
          </motion.div>
          <motion.div
            variants={textVariant}
            animate="scrollButton"
            className="scroll"
          >
            <img src={scroll} alt="img" className="scrollImg" />
          </motion.div>
          <motion.div
            className="slidingText"
            variants={sliderVariant}
            initial="initial"
            animate="animate"
          >
            Front-End React Developer
          </motion.div>
        </motion.div>
      </div>
    </HomeContainer>
  );
};

export default HomePage;

let HomeContainer = styled.div`
  .home {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 1rem;
    margin-top: 1rem;
    position: relative;
    overflow: hidden;
    .info {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      h2 {
        letter-spacing: 1rem;
        color: #3a80e9;
      }
      h1 {
        font-size: 4rem;
      }
      .scroll {
        padding: 1rem;
      }
      .scrollImg {
        width: 2rem;
      }
      .slidingText {
        position: absolute;
        font-size: 50vh;
        bottom: -6rem;
        white-space: nowrap;
        color: #ffffff09;
        width: 200%;
        z-index: -1;
      }
    }
    .imgDiv {
      height: 83vh;
    }
    .img {
      width: 22rem;
      height: 92vh;
      margin-top: -2em;
    }
  }

  @media only screen and (max-width: 1024px) {
    .home {
      flex-direction: column-reverse;
    }
    .info {
      min-width: 99vw;
      align-items: flex-start;
      padding-left: 6rem;
      padding-left: 4rem;
      h1 {
        font-size: 3rem;
      }
      .slidingText {
        font-size: 40vh;
        top: 20rem;
      }
    }
    .imgDiv {
      max-height: 65vh;
    }
    .img {
      min-width: 26rem;
      max-height: 70vh;
      margin-top: -4rem !important;
    }
  }

  @media only screen and (max-width: 800px) {
    .info {
      padding-left: 5rem;
      h1 {
        font-size: 2.8rem !important;
      }
      h2{
        font-size: 1.5rem;
      }
      .slidingText {
        font-size: 40vh !important;
        top: 16rem;
      }
    }
    .imgDiv {
      max-height: 50vh;
      margin-top: -2rem !important;
    }
    .img {
      min-width: 18rem;
      max-width: 18rem;
      max-height: 60vh;
      margin-top: -3rem !important;
    }
  }

  @media only screen and (max-width: 800px) {
    .info {
      padding-left: 5rem;
      h1 {
        font-size: 2.8rem !important;
      }
      h2{
        font-size: 1.5rem;
      }
      .slidingText {
        font-size: 40vh !important;
        top: 16rem;
      }
    }
    .imgDiv {
      max-height: 50vh;
      margin-top: -2rem !important;
    }
    .img {
      min-width: 18rem;
      max-width: 18rem;
      max-height: 60vh;
      margin-top: -3rem !important;
    }
  }

  @media only screen and (max-width: 550px) {
    .home{
      min-width: 130vw !important;
      min-height: 110vh !important;
    }
    .info {
      padding-left: 2rem;
      h1 {
        font-size: 2rem !important;
      }
      h2{
        font-size: 1rem;
      }
      .slidingText {
        font-size: 40vh !important;
        top: 16rem;
      }
    }
    .imgDiv {
      max-height: 50vh;
      margin-top: -2rem !important;
    }
    .img {
      min-width: 16rem;
      max-width: 16rem;
      max-height: 70vh;
      margin-top: -4rem !important;
    }
  }

  @media only screen and (max-width: 430px){
    .home{
      min-width: 155vw !important;
      min-height: 120vh !important;
    }
    .info {
      padding-left: 0rem;
      .slidingText {
        top: 19rem;
      }
    }
  }

  @media only screen and (max-width: 380px){
    .home{
      min-width: 140vw !important;
      min-height: 120vh !important;
    }
    .info {
      padding-left: 0rem;
      .slidingText {
        top: 19rem;
      }
    }
  }

`;
