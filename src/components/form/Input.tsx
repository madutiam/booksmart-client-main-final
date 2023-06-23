import styled from "styled-components"

export const Input = styled.input`
    padding: 1.25rem 1rem;
    border-radius: 6rem;
    font-size: 18px;
    background-color: #f1b675;
    margin: .25rem auto;
    width: 450px;


    @media (max-width: 650px ) {
      width: 50vw;
      padding: .7rem .875rem;
    }

`

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  
  margin: 0 auto 1rem;

  span {
    margin-left: 1rem;
    font-family: 'Playfair Display SC';
    font-weight: 700;
  }
`
