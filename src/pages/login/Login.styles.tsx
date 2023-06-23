import styled from "styled-components"

export const Container = styled.div`
  text-transform: uppercase;

  background-color: #69140e;
  color: #fff;
  border-radius: 1.5rem;
  padding: 1rem 1rem 3rem;
  margin: 0 auto;
  height: 40rem;
  width: 35rem;

  max-width: 40rem;
  max-height: 50rem;
  display: grid;
  gap: 1rem;
  border: 2px solid #69140e;

  img {
    margin: auto;
   
    
  }

  @media (max-width: 650px) {
    width: 25rem;
  }
`

export const Form = styled.form`
  display: grid;
`
