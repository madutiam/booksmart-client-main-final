import styled from "styled-components"

export const Container = styled.div`
  display: grid;
  gap: 5rem;
`

export const Profile = styled.div`
  background-color: #f2b675;
  display: grid;
  gap: 1rem;
  grid-template-columns: auto 1fr;
  max-width: 30rem;
  padding: 0.5rem;
  border-radius: 4.5rem;
  border: 2px solid #f5ab5c;
`

export const Username = styled.div`
  font-size: 1.2rem;
  font-weight: 500;
  line-height: 100%;
`

export const Type = styled.div`
  font-size: 1rem;
  background-color: #69140e;
  color: #fff;
  padding: 0.2rem 0.4rem;
  border-radius: 0.2rem;
  width: fit-content;
  height: fit-content;
  text-transform: uppercase;
  font-weight: 600;
`

export const Info = styled.div`
  display: grid;
  align-content: start;
  gap: 0.5rem;
`

export const Section = styled.section``
