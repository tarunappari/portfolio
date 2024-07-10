import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import styled from "styled-components";
import { motion } from "framer-motion";
import Sidebar from "./Sidebar";

const Navbar = () => {
  return (
    <NavContainer>
      <Sidebar />
      <motion.div
        initial={{ opacity: 0, scale: 0.3 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      ></motion.div>
      <div className="profileLinks">
        <a href="https://github.com/tarunappari" target="_blank">
          <GitHubIcon className="icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/tarun-appari-77ba93280/"
          target="_blank"
        >
          <LinkedInIcon className="icon" />
        </a>
        <a href="https://www.facebook.com/tarun.appari" target="_blank">
          <FacebookIcon className="icon" />
        </a>
        <a href="https://www.instagram.com/_imnomonk____/" target="_blank">
          <InstagramIcon className="icon" />
        </a>
      </div>
    </NavContainer>
  );
};

export default Navbar;

let NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding: 1rem 3rem;
  .profileLinks {
    display: flex;
    gap: 1rem;
    .icon {
      font-size: 1.5rem;
    }
    .icon:hover {
      cursor: pointer;
      transition: 0.3s ease;
      color: #3a80e9;
    }
  }

  @media only screen and (max-width: 550px){
    .profileLinks{
      position: relative;
      left: 7rem;
    }
  }

  @media only screen and (max-width: 450px){
    .profileLinks{
      position: relative;
      left: 15rem;
    }
  }
`;
