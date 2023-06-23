import * as Switch from "@radix-ui/react-switch"
import { styled } from "styled-components"

export const SwitchRoot = styled(Switch.Root)`
  width: 42px;
  height: 25px;
  background-color: #f2b675;
  border-radius: 9999px;
  position: relative;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  cursor: pointer;
  border: 1px solid #faa244;

  &[data-state="checked"] {
    background-color: #69140e;
  }
`

export const SwitchInput = styled(Switch.Thumb)`
  display: block;
  width: 21px;
  height: 21px;
  background-color: white;
  border-radius: 9999px;
  transition: transform 100ms;
  transform: translateX(2px);
  will-change: transform;

  &[data-state="checked"] {
    transform: translateX(19px);
  }
`
