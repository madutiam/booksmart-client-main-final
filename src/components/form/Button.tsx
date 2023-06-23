import { styled } from "styled-components"
import { variant } from "styled-system"

interface ButtonProps {
  variant?: string | ("outlinedSecondary" | "rounded" | "outlined")[]
}

export const Button = styled.button<ButtonProps>`
  background-color: #f2b675;
  padding: 0.4rem 0.8rem;
  border-radius: 0.4rem;
  font-weight: 700;
  text-transform: uppercase;
  color: #360a07;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border: 1px solid #f5ab5c;
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
    cursor: wait;
  }

  svg {
    color: #360a07;
  }

  &:hover {
    background-color: #f5ab5c;
  }

  ${variant({
    variants: {
      rounded: {
        borderRadius: "1rem"
      },
      outlined: {
        backgroundColor: "transparent",
        color: "#f5ab5c",
        border: "2px solid #f5ab5c",
        "&:hover": {
          backgroundColor: "transparent"
        }
      },
      secondary: {
        color: "#f2b675",
        border: "2px solid #f5ab5c"
      }
    }
  })}
`
