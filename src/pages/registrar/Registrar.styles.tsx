import styled from "styled-components"

export const Container = styled.div`
  background-color: #fff;
  border-radius: 0.5rem;
  padding: 1rem;
  margin: auto;
  margin-top: 4rem;
  max-width: 30rem;
  max-height: 40rem;
  display: grid;
  gap: 1rem;
  border: 2px solid #f5ab5c;
`

export const Background = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  z-index: -1;
  left: 0;
  top: 0;
`

export const Form = styled.form`
  display: grid;
`

export const Error = styled.span`
  color: red;
  font-size: 0.8rem;
  margin-top: 0.2rem;
`

export const ButtonGroup = styled.div`
  display: flex;
  justify-self: end;
  gap: 1rem;
  align-items: end;
`
