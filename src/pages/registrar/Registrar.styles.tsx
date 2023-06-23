import styled from "styled-components"

export const Container = styled.div`
  background-color: #69140e;
  color: #fff;
  border-radius: 1.5rem;
  padding: 2rem 1rem;
  margin: auto;
  margin-top: 0;
  max-width: 40rem;
  max-height: 80rem;
  display: grid;
  gap: 1rem;
  border: 2px solid #69140e;
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
  margin-top: 1.5rem;
  justify-self: center;
  gap: 1rem;
  align-items: end;
`
