import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar"
import { styled } from "styled-components"

export const Root = styled(Avatar)`
  height: 20rem;
`

export const Image = styled(AvatarImage)`
  border: 2px solid #0002;
  border-radius: 0.25rem;
  width: 100%;
  height: 20rem;
  object-fit: cover;
`

export const Fallback = styled(AvatarFallback)`
  background-color: #69140e;
  color: #fff;
  padding: 0.25rem;
  border-radius: 0.25rem;
  width: 100%;
  height: 20rem;
  display: flex;
  place-items: center;
  text-align: center;
  justify-content: center;
  color: #f2b675aa;
  font-size: 1rem;
  font-weight: 700;
`
