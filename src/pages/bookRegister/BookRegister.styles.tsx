import { Input } from "@components/form/Input"
import styled from "styled-components"

export const Container = styled.div`
  display: grid;
  gap: 3rem;
`

export const Form = styled.form`
  display: grid;
  column-gap: 2rem;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const Details = styled.div`
  display: flex;
  gap: 1rem;
  align-content: center;
`

export const SmallInput = styled(Input)`
  flex: 1 0 1rem;
`
