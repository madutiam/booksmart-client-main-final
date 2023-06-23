import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar"
import { styled } from "styled-components"

export const Root = styled(Avatar)``

export const Image = styled(AvatarImage)`
  width: 7rem;
  height: 7rem;
  border-radius: 100%;
  border: 2px solid #f19736;
`

export const Fallback = styled(AvatarFallback)`
  background-color: #69140e;
  color: #fff;
  width: 7rem;
  height: 7rem;
  font-size: 2rem;
  padding: 0.5rem;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #f19736;
`
