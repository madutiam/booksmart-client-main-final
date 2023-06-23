import { styled } from "styled-components"


export const Container = styled.main`
  flex: 1;
  
  margin: 0 auto;
  width: 80%;
  padding: 0;
  height: 100vh;

  @media (max-width: 728px) {
    width: 100% !important;
  }
`

export const GlobalContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`
