import React from "react"
import { Fallback, Image, Root } from "./Avatar.styles"
import { AvatarProps } from "@radix-ui/react-avatar"

interface Props extends AvatarProps {
  src: string
  fallback: string
  delayMs: number
  props?: AvatarProps
}

const Avatar = ({ src, fallback, delayMs, ...props }: Props) => {
  return (
    <Root {...props}>
      <Image src={src} />
      <Fallback delayMs={delayMs}>{fallback}</Fallback>
    </Root>
  )
}

export default Avatar
