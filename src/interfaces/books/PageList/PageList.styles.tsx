import { styled } from "styled-components"

export const Container = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
 

  @media (max-width: 600px) {
    justify-content: center;
  }
`

export const Item = styled.li`
  flex: 1 0 5rem;
  max-width: 15rem;
  min-width: 15rem;
`
