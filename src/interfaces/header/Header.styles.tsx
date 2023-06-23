import { Button } from "@components/form/Button"
import { styled } from "styled-components"

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #69140e;
  color: #fff;
  padding: 0.5rem 1rem;
  position: sticky;
  top: 0;
  z-index: 3;
  gap: 1rem;
  margin-bottom: 3rem;

  @media (max-width: 740px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`

export const LogoImage = styled.img`
  object-fit: cover;
  max-height: 5rem;
  max-width: 100%;
`

export const Nav = styled.nav`
  display: flex;
  gap: 1rem;
  align-items: center;

  svg {
    color: #f2b675;
  }

  @media (max-width: 740px) {
    gap: 0.5rem;
  }
`

export const UserButton = styled(Button)`
  background-color: transparent;
  border: none;
  padding: 0;

  &:hover {
    background-color: transparent;

    svg {
      color: #f5ab5c;
    }
  }
`
