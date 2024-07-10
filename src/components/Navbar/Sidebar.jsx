import { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import Toggle from "./Toggle";
import Links from "./Links";

const Sidebar = () => {
  let [open, setOpen] = useState(false);

  let variants = {
    open: {
      clipPath: "circle(1200px at 50px 50px)",
      transition: {
        delay: 0.1,
        type: "spring",
        stiffnesss: 200,
        damping: 20,
      },
    },
    closed: {
      clipPath: "circle(20px at 40px 40px)",
      transition: {
        delay: 0.2,
        type: "spring",
        stiffnesss: 400,
        damping: 40,
      },
    },
  };

  return (
    <SidebarContainer>
      <motion.div className="sidebar" animate={open ? "open" : "closed"}>
        <motion.div className="bg" variants={variants}>
          <Links />
        </motion.div>
        <Toggle setOpen={setOpen} />
      </motion.div>
    </SidebarContainer>
  );
};

export default Sidebar;

let SidebarContainer = styled.div`
  z-index: 3;
  position: absolute;
  .sidebar {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;
    color: black;
    .bg {
      position: fixed;
      top: -1rem;
      left: 0;
      background: #fff;
      width: 300px;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .links {
      position: absolute;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      font-size: 1.3rem;
      font-weight: 500;
    }
    .button {
      position: fixed;
      border: none;
      cursor: pointer;
      top: 0.88rem;
      left: 1.95rem;
    }
  }

  @media only screen and (max-width: 880px){
    .bg{
      min-height: 110vh;
    }
  }

  @media only screen and (max-width: 580px){
    .bg{
      min-height: 150vh;
      width: 250px !important;
    }
  }
`;
