import { motion } from "framer-motion";
import styled from "styled-components";
import Navbar from "../../Navbar/Navbar";

let variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.3,
    },
  },
};

const Contact = () => {
  return (
    <div>
      <ContactContainer>
        <motion.div
          className="container"
          variants={variants}
          initial="initial"
          whileInView="animate"
        >
          <motion.div variants={variants} className="myInfo">
            <motion.h1 variants={variants}>Let's Work Together</motion.h1>
            <motion.div className="info" variants={variants}>
              <h3>Email &nbsp;: &nbsp;&nbsp; </h3>
              <p>tarunappri23@gmail.com</p>
            </motion.div>
            <motion.div className="info" variants={variants}>
              <h3>Phone &nbsp; :&nbsp; &nbsp;</h3>
              <p>+917095427959</p>
            </motion.div>
            <motion.div className="info" variants={variants}>
              <h3>Address &nbsp; : &nbsp;&nbsp;</h3>
              <p>7-102,Devarapalli,Ravulapalem(M),</p>
              <p>East Godavari(D),Andhra Pradesh</p>
              <p>Pin : 533223</p>
            </motion.div>
          </motion.div>
          <motion.div variants={variants} className="userInfo">
            <form
              action="https://formsubmit.co/el/roseti"
              method="POST"
              className="userInfo"
            >
              <input type="text" placeholder="Name" name="name" />
              <input type="email" placeholder="Email" name="email"/>
              <textarea rows={8} placeholder="Message" name="message"/>
              <button type="submit">Submit</button>
            </form>
          </motion.div>
        </motion.div>
        <Navbar />      
      </ContactContainer>
    </div>
  );
};

export default Contact;

let ContactContainer = styled.div`
  .container {
    height: 90vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-content: center;
    scroll-snap-align: center;
    .myInfo {
      display: flex;
      justify-content: center;
      padding-left: 5rem;
      align-items: flex-start;
      flex-direction: column;
      gap: 1.7rem;
      color: #d7d7d7;
      font-size: 90%;
      h1 {
        font-size: 3rem;
      }
      p {
        color: grey;
      }
      h3 {
        padding-bottom: 0.2rem;
      }
    }
    .userInfo {
      display: flex;
      flex-direction: column;
      padding: 2rem;
      gap: 1rem;
      input,
      textarea {
        background-color: transparent;
        outline: none;
        border: 0.1rem solid grey;
        padding: 0.5rem 1rem;
        border-radius: 0.5rem;
        color: #dedcdc;
        font-size: 0.9rem;
      }
      button {
        padding: 0.6rem;
        font-size: 0.9rem;
        border: none;
        border-radius: 0.5rem;
        background-color: #fca910;
        font-weight: 500;
      }
    }
  }

  @media only screen and (max-width: 960px){
    .container{
      min-height: 100vh;
    }
  }

  @media only screen and (max-width: 770px){
    .container{
      min-height: 110vh;
      grid-template-columns: 1fr !important;
      margin-top: 3rem;
    }
    .myInfo {
      padding-left: 2rem !important;
      gap: 1rem !important;
      font-size: 85% !important;
      margin-top: 1rem;
      .info{
        display: flex;
        align-items: center;
      }
      h1 {
        font-size: 2rem !important;
      }
      p {
        font-size: 0.8rem;
      }
      h3 {
        padding-bottom: 0rem !important;
      }
    }
    .userInfo{
      margin-top: -1rem;
    }
  }

  @media only screen and (max-width: 641px){
    .container{
      min-height: 120vh;
    }
    .myInfo {
      padding-left: 4em !important;
      gap: 0.5rem !important;
      h1 {
        font-size: 1.5rem !important;
      }
      p {
        font-size: 0.6rem;
      }
    }
    .userInfo{
      margin-top: -1rem;
    }
  }

  @media only screen and (max-width: 641px){
    .container{
      min-height: 120vh;
      min-width: 130vw;
    }
  }
  
  @media only screen and (max-width: 450px){
    .container{
      min-width: 155vw;
      min-height: 135vh;
      border: 2px solid red;
    }
  }
`;