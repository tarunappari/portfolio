import styled from "styled-components";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import flashtype from '../../../images/flashtype.png'
import crypto from '../../../images/crypto.png'
import meshop from '../../../images/meshop.png'

let items = [
  {
    id: 1,
    title: "FlashType",
    img: flashtype,
    desc: "FlashTypee is a typing speed website where user can calculate his typing speed in different time modes and can create an account store his results which will be a great use for analysis.",
    link:'https://flashtypee.netlify.app/'
  },
  {
    id: 2,
    title: "Crypto Tracker",
    img: crypto,
    desc: "This is a website where user can track the live state of 100 different types of crypto currencies . User can even compare 2 different types of currencies in compare page to know which is best this wensite has record of crypto currency from past one year ",
    link:'https://crypto-currency-trackerr.netlify.app/'
  },
  {
    id: 3,
    title: "Me Shop",
    img: meshop,
    desc: 'This website was build by only using HTML,CSS,JavaScript. this is a shopping which provides authenticaton for user to login. This even has cart where you can purchase the products that you like payments can be done through using razor pay',
    link:'https://tarunappari.github.io/Meshop/'
  },
];

let Single = ({ item }) => {

    let ref = useRef()

    let {scrollYProgress} = useScroll({
        target:ref,
    })

    let y = useTransform(scrollYProgress,[0,1],[-300,300])
  return(
    <div className="project">
            <div className="imgContainer" ref={ref}>
                <img src={item.img} alt="img" />
            </div>
            <motion.div style={{y}} className="projectInfo">
                <h1>{item.title}</h1>
                <p>{item.desc}</p>
                <a href={item.link} target="_blank"><button>Live Site</button></a>
            </motion.div>
    </div>
  )
};

const Projects = () => {
  let ref = useRef();

  let { scrollYProgress } = useScroll({target:ref,offset:['end end','start start']});

  let scaleX = useSpring(scrollYProgress,{
    stiffness:100,
    damping:30,
  })
  return (
    <ProjectCoontainer>
      <div className="projects" ref={ref}>
        <div className="progress">
          <h1>Featured Works</h1>
          <motion.div style={{scaleX }} className="progressBar"></motion.div>
        </div>
        {items.map((item) => (
          <Single item={item} key={item.id} />
        ))}
      </div>
    </ProjectCoontainer>
  );
};

export default Projects;

let ProjectCoontainer = styled.div`
    .projects{
        position: relative;
        .progress{
            position: sticky;
            top: 0;
            left: 0;
            padding-top: 1rem;
            text-align: center;
            color: orange;
            font-size: 2rem;
            .progressBar{
                height: 0.5rem;
                background-color: white;
            }
        }
        .project{
            height: 100vh;
            scroll-snap-align: center;
            display: grid;
            justify-content: center;
            align-items: center;
            grid-template-columns: 1fr 1fr;
            .imgContainer{
                padding-top: 2rem;
                justify-self: center;
            }
            .projectInfo{
                width: 40vw;
                display: flex;
                flex-direction: column;
                gap: 1.2rem;
                align-items: flex-start;
                h1{
                    font-size: 2rem;
                }
                p{
                    color: gray;
                }
                button{
                    padding: 0.3rem 1.3rem;
                    font-size: 1rem;
                    border-radius: 1.9rem;
                    background-color: orange;
                    border: none;
                    border: 2px solid orange;
                    transition: 0.3s;
                }
                button:hover{
                    background-color: transparent;
                    color: white;
                    border: 2px solid orange;
                }
            }
            img{
                width: 29rem;
            }
        }
    }

    @media only screen and (max-width: 950px){
      margin-top: 3rem;
      min-width: 110vw;
      .project{
        display: flex !important;
        flex-direction: column;
        padding-top: 1rem;
        .projectInfo{
        transform: none !important;
        min-width: 90%;
        justify-content: center !important;
        align-items: center !important;
        padding-top: 2rem;
        gap: 0.5rem !important;
      }
      }
    }

    @media only screen and (max-width: 765px){
      margin-top: 1rem;
      min-width: 110vw;
      .progress{
        h1{
          font-size: 2.3rem;
        }
        .progressBar{
                height: 0.3rem !important;
            }
      }
      .projectInfo{
        gap: 0rem !important;
                h1{
                    font-size: 1.7rem !important;
                }
                p{
                    font-size: 0.8rem;
                }
                button{
                    padding: 0.2rem 1.1rem !important;
                    font-size: 0.8rem !important;
                }
            }
            img{
                width: 20rem !important;
            }
    }

    @media only screen and (max-width: 565px){
      margin-top: 7rem;
      min-width: 130vw;
      .progress{
        h1{
          font-size: 2.3rem;
        }
        .progressBar{
                height: 0.3rem !important;
            }
      }
      .project{
        min-height: 120vh !important;
      }
      .projectInfo{
        gap: 0rem !important;
                h1{
                    font-size: 1.7rem !important;
                }
                p{
                    font-size: 0.9rem;
                }
                button{
                    padding: 0.2rem 1.1rem !important;
                    font-size: 0.8rem !important;
                }
            }
            img{
                width: 25rem !important;
            }
    }

    @media only screen and (max-width: 450px){
      margin-top: 10rem;
      min-width: 150vw;
      .progress{
        h1{
          font-size: 1.9rem;
        }
        .progressBar{
                height: 0.2rem !important;
            }
      }
      .projectInfo{
                h1{
                    font-size: 1.5rem !important;
                }
                p{
                    font-size: 0.7rem;
                }
                button{
                    padding: 0.2rem 1.1rem !important;
                    font-size: 0.8rem !important;
                }
            }
            img{
                width: 23rem !important;
            }
    }
    
`;
