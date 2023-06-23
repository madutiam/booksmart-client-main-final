import { Title } from "@components/Text"
import { styled } from "styled-components"

export const Container = styled.div`
  display: grid;
  gap: 5rem;
`

export const Prase = styled.div`
  display: grid;
  grid-template-columns: calc(100% - 1.5rem);
  background-size: cover;
  height: 30rem;
  color: #fff;
  z-index: 1;
  align-content: center;
  max-width: 60rem;
  padding: 0 1rem;

  p {
    justify-self: end;
  }

  @media (max-width: 570px ) {
    position: relative;
    bottom: 2rem;
  }
`

export const PraseText = styled(Title)`
  font-size: 3rem;
  font-family: "Playfair Display SC", serif;
  font-weight: 400;

  @media (max-width: 740px) {
    font-size: 2rem;
  }
`

export const Image = styled.img`
  position: absolute;
  z-index: -1;
  object-fit: cover;
  width: 100%;
  height: 30rem;
  left: 0;
  top: 5%;
`

export const Section = styled.div`
  text-align: center;
  display: grid;
  gap: 2rem;
  position: relative;
`

export const BarSection = styled.div`
  text-align: center;
  display: grid;
  gap: 2rem;
  position: relative;
`

export const Cards = styled.div`
  display: grid;
`

export const Buttons = styled.div`
  grid-area: 1 / -1;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  z-index: 1;
  opacity: 0;

  button {
    width: 100%;
  }
`

export const Content = styled.ul`
  display: flex;
  gap: 1rem;
  list-style: none;
  justify-content: center;
  flex-wrap: wrap;
  grid-area: 1 / -1;
`

export const CardItem = styled.li`
  flex: 1 0 20rem;
  background-color: #69140e;
  text-align: center;
  padding: 1rem;
  color: #fff;
  border-radius: 0.5rem;
  font-size: 1.5rem;
  font-family: 'Inter', sans-serif;
  display: flex;
  height: 10rem;
  scale: 0.7;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  opacity: 0.7;
  border: 2px solid #f2b675;
  transition: all 0.3s ease-in-out;

  &.active {
    scale: 1;
    opacity: 1;
  }
`

export const Active = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  justify-items: center;
  gap: 1rem;
  margin-top: 2rem;

  span {
    opacity: 0.7;
    width: 0.8rem;
    height: 0.8rem;
    border-radius: 50%;
    background-color: #f2b675;

    &[data-active="true"] {
      opacity: 1;
      background-color: #69140e;
    }
  }
`

export const Background = styled.span`
  position: absolute;
  background-color: #f2b675aa;
  width: 100%;
  height: 85%;
  z-index: -1;
  left: 0;
  bottom: 0;
  box-shadow: -400px 0px 0px 0px #f2b675aa, 400px 0px 0px 0px #f2b675aa;
`

export const Final = styled.div`
  display: flex;
  row-gap: 1rem;
  justify-content: space-between;
  justify-items: center;
  flex-wrap: wrap;

  div {
    display: grid;
    gap: 1rem;
    justify-items: center;
    text-align: center;
  }

  h2 {
    font-size: 2rem;
  }

  @media (max-width: 1024px) {
    
    
    flex-direction: column;
    row-gap: 4rem;
    flex-grow: 0;
  }
`
