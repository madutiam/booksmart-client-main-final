import styled, {keyframes} from "styled-components"
import { Container } from "src/styles/styles"




const slideIn = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const ButtonsSection = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 1rem;
    margin-top: 1.5rem;


    button {
        width: 150px;
        font-size: 18px;
        font-weight: 700;
        text-transform: uppercase;
        color: white;
        padding: 1.5rem 0;
        background-color: #f5ab5c;
    }

    button:focus {
        background-color: #c17359;
    }


    button:hover {
        cursor: pointer;
        background-color: #69140e;
    }


    & button:first-child {
        border-radius: 1.5rem 0 0 1.5rem;
    }

    & button:last-child {
        border-radius: 0 1.5rem 1.5rem 0;
    }
  


`

export const PopUpContainer = styled.div`
    position: fixed;
    z-index: 2;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    animation: slideIn 0.5s forwards;
    display: flex;
    align-items: center;
    justify-content: center;
   
`

export const PopUp = styled.div`
width: 500px;

background-color: #ffe9b0;

display: flex;
flex-direction: column;
color: #360a07;
animation: ${fadeIn} .8s forwards;
opacity: 0;

padding-bottom: 1rem;
border-radius: 1rem;
border: 2px solid #69140e;

h1 {
    font-size: 24px;
   border-bottom: 1px solid #69140e;
    padding: 1.5rem 1rem;
    border-radius: .7rem .7rem 0 0;
}

p {
    font-size: 18px;
    font-family: 'Inter';
    font-weight: 500;
    margin: 1.5rem .5rem;
}

div {
    margin: 1rem;
   
    
}

button {
   padding: .5rem 1rem;
    background-color:  #f5ab5c;
    color: #360a07;
    border-radius: .5rem;
    margin: 1rem;
    text-transform: uppercase;
    font-weight: 700;
    font-family: 'Inter';
    cursor: pointer;
}

`

export const PopDiv = styled.div`
    display: flex;
    flex-direction: column;
    
    justify-content: space-between;
`

export const TitleContainer = styled.div`
    margin: 6rem 10vw 0;
    padding-left: 8px;
    border-left: 4px solid #69140e;
`

export const FaqPage = styled.main`
align-text: center;
margin: 0 auto; 
max-width: 100vw;

`

export const ImgContainer = styled.div`
margin: 0 2.5vw;
margin-top: 2rem;
`

export const Img = styled.img`
    width: 80vw;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 1024px) {
        width: 100%
    }
`

export const FaqGrid = styled.div`
    width: 80vw;    
    margin: 3rem auto 8rem;   
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    column-gap: 2rem;
    row-gap: 6rem;
    
    @media (min-width: 1680px) {
       width: 70vw;
    }


    @media (max-width: 1280px) {
        
        row-gap: 3rem;
    }
`

export const GridItem = styled.div`
   
    display: grid;
    min-width: 250px;
    max-width: 250px;
    min-height: 250px;
    max-height: 250px;
    border-radius: 10px;
    padding: 1rem;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 2fr 1fr;
    background-color: #d8c39d;

    h3 {
        font-size: 24px;
        font-weight: 500;
        
    }

    p {
        padding-top: 1rem;
        font-size: 18px;
        font-weight: 400;
    }

    a {
        cursor: pointer;
        display: flex;
        align-items: end;
        color: #69140e;
    }

    a:hover {
        color: #911d16;
    }
`

export const GridLastItem = styled.div`
display: grid;
min-width: 250px;
max-width: 250px;
min-height: 250px;
max-height: 250px;
border-radius: 10px;
color: #fff;
padding: 1rem;
grid-template-columns: 1fr;
grid-template-rows: 1fr 2fr 1fr;
background-color: #c17359;



h3 {
    font-size: 24px;
    font-weight: 500;
    
}

p {
    padding-top: 1rem;
    font-size: 18px;
    font-weight: 400;
}

a {
    cursor: pointer;
    display: flex;
    align-items: end;
    color: #d9d9d9;
}

a:hover {
    color: #911d16;
}

`

export const HelpContainer = styled.div`
    width: 50%;
    min-height: 620px;
    max-height: 620px;
    background-color: #bca585;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 3rem 1rem;

    h1 {
        font-size: 34px;
        font-weight: 500;
        color: #69140e;
    }

   p {
    font-size: 24px;
   }
`

export const InputDiv = styled.div`
    width: 100%;
    padding: 6rem 10rem 3rem;
`

export const AltHelpContainer = styled.div`
    width: 50%;
    min-height: 620px;
    max-height: 620px;
    background-color: #a0876f;
`
export const HelperContainer = styled.div`
    display: flex;
    flex-direction: row;
    padding: 3rem 0
`

// export const Container = styled.div`
//   background-color: #fff;
//   border-radius: 0.5rem;
//   padding: 1rem;
//   margin: auto;
//   margin-top: 4rem;
//   max-width: 30rem;
//   max-height: 40rem;
//   display: grid;
//   gap: 1rem;
//   border: 2px solid #f5ab5c;
// `

export const Background = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  z-index: -1;
  left: 0;
  top: 0;
`

export const Form = styled.form`
  display: grid;
`

export const Error = styled.span`
  color: red;
  font-size: 0.8rem;
  margin-top: 0.2rem;
`

export const ButtonGroup = styled.div`
  display: flex;
  justify-self: end;
  gap: 1rem;
  align-items: end;
`