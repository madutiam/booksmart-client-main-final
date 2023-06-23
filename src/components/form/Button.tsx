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
        boxShadow: '0px 4px 4px 0px #00000040 inset',
        backgroundColor: '#91543d',
        color: "white",
        fontSize: '18px',
        border: 'none',
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
