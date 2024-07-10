import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
      *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
      }

      body{
        background-color: #111111;
        color: #fff;
      }

      html{
        scroll-snap-type: y mandatory;
        scroll-behavior : smooth;
      }

      a{
        text-decoration: none;
        color: inherit;  
      }

      .filledBtn{
        color: #fff;
        background-color: #3A80E9;
        border: 2px solid #3A80E9;
        padding: 0.5rem 1.3rem;
        border-radius: 2rem;
        font-size: 0.9rem;
        transition: 0.3s;
        cursor: pointer;
      }

      .filledBtn:hover{
        background-color: transparent;
      }

      .outlinedBtn{
        color: #fff;
        background-color: transparent;
        border: 2px solid #3A80E9;
        padding: 0.5rem 1.3rem;
        border-radius: 2rem;
        margin-left: 2rem;
        font-size: 0.9rem;
        transition: 0.3s;
      }

      .outlinedBtn:hover{
        background-color: #3A80E9;
        cursor: pointer;
      }

       /* Styling the main scrollbar */
   ::-webkit-scrollbar {
        width: 0.3rem;  /* Width of the scrollbar */
    }

/* Styling the thumb part of the scrollbar */
::-webkit-scrollbar-thumb {
  background-color: grey;  /* Color of the scrollbar thumb */
  border-radius: 5px;      /* Rounded corners for the thumb */
}

//cursor

.cursor {
  position: fixed;
  transform: translateX(-50%) translateY(-50%);
  pointer-events: none;
  background-color: #3a80e9;
  z-index: 10000;
  border: 2px solid #3a80e9;
  height: 0.3rem;
  width: 0.3rem;
  border-radius: 50%;
  transition: all 200ms ease-out;
}

.cursor-pointer {
  position: fixed;
  border-radius: 50%;
  transform: translateX(-50%) translateY(-50%);
  pointer-events: none;
  background-color: transparent;
  z-index: 10000;
  border: 2px solid #3a80e9;
  height: 2rem;
  width: 2rem;
  transition: all 400ms ease-out;
}

@media only screen and (max-width: 600px) {
  .cursor-pointer,
  .cursor {
    display: none;
  }
}

@media only screen and (max-width: 800px) {
      .outlinedBtn{
        border: 2px solid #3A80E9;
        padding: 0.5rem 1.3rem;
        border-radius: 2rem;
        margin-left: 2rem;
        font-size: 0.7rem;
      }
      .filledBtn{
        border: 2px solid #3A80E9;
        padding: 0.5rem 1.3rem;
        border-radius: 2rem;
        font-size: 0.7rem;
      }
}

@media only screen and (max-width: 550px) {
      .outlinedBtn{
        border: 2px solid #3A80E9;
        padding: 0.4rem 1rem;
        border-radius: 2rem;
        margin-left: 2rem;
        font-size: 0.6rem;
      }
      .filledBtn{
        padding: 0.4rem 1rem;
        border-radius: 2rem;
        font-size: 0.6rem;
      }
}
`;
