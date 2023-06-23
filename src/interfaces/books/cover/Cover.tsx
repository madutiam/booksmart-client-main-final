import React from "react"
import { Fallback, Image, Root } from "./Cover.styles"
import { AvatarProps } from "@radix-ui/react-avatar"

interface Props extends AvatarProps {
  src: string
  fallback: string
  delayMs: number
  props?: AvatarProps
}

const Cover = ({ src, fallback, delayMs, ...props }: Props) => {
  return (
    <Root {...props}>
      <Image src={src} />
      <Fallback delayMs={delayMs}>{fallback}</Fallback>
    </Root>
  )
}

export default Cover
