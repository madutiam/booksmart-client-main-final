import { styled } from "styled-components"

export const Container = styled.ul`
  display: flex;
  gap: 1rem;
  justify-content: left;
  max-width: 100%;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
`

export const Item = styled.li`
  flex: 1 0 5rem;
  max-width: 15rem;
  min-width: 15rem;
`
