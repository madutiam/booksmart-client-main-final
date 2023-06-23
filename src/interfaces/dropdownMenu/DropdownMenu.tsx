import React from "react"
import {
  Arrow,
  Content,
  Group,
  Item,
  Label,
  Root,
  Trigger
} from "./DropdownMenu.styles"
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"

export const DropdownMenu = Root
export const DropdownMenuTrigger = Trigger
export const DropdownMenuGroup = Group
export const DropdownMenuItem = Item
export const DropdownMenuLabel = Label

export const DropdownMenuContent = ({
  children
}: {
  children: React.ReactNode
}) => {
  return (
    <DropdownMenuPrimitive.Portal>
      <Content>
        {children}
        <Arrow />
      </Content>
    </DropdownMenuPrimitive.Portal>
  )
}
