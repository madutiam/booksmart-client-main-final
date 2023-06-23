import { styled } from "styled-components"

export const Container = styled.footer`
  background-color: #69140e;
  padding: 0.5rem 1rem;
  color: #fff;
  display: grid;
  gap: 4rem;
  height: 15rem;
  margin-top: 10rem;
  position: relative;
`

export const Info = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`

export const Item = styled.div`
  flex: 1 1 10rem;
  display: grid;
  gap: 0.5rem;
  align-items: start;
  align-content: start;

  h3 {
    font-size: 1.5rem;
  }

  img {
    position: absolute;
    bottom: 0;
    right: 0;
  }

  @media (max-width: 850px) {
    img {
      display: none;
    }
  }
`

export const Rights = styled.div`
  justify-self: center;
  color: #f2b675;
`
