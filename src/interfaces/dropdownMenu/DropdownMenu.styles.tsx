import styled from "styled-components"
import * as DropdownMenu from "@radix-ui/react-dropdown-menu"

export const Root = styled(DropdownMenu.Root)``

export const Trigger = styled(DropdownMenu.Trigger)`
  background: transparent;
`

export const Content = styled(DropdownMenu.Content)`
  background-color: #69140e;
  color: #460804;
  padding: 0.5rem;
  z-index: 10;
  border-radius: 0.25rem;
  border: 2px solid #f2b675;
`

export const Group = styled(DropdownMenu.Group)`
  display: grid;
  gap: 0.5rem;
`

export const Label = styled(DropdownMenu.Label)``

export const Item = styled(DropdownMenu.Item)`
  background-color: #f2b675;
  padding: 0.3rem 1.5rem;
  padding-left: 1rem;
  border-radius: 0.25rem;
  font-size: 1rem;
  font-weight: 600;
  text-align: left;
  cursor: pointer;
  text-transform: uppercase;

  &:hover {
    background-color: #f5ab5c;
  }
`

export const Arrow = styled(DropdownMenu.Arrow)`
  fill: #f2b675;
`
