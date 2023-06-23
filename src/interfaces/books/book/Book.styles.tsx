import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const Title = styled.span`
  display: block;
  font-weight: bold;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const Author = styled.span`
  display: block;
  text-align: left;
  opacity: 0.7;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const Info = styled.div`
  background-color: #f2b675;
  color: #69140e;
  padding: 0.5rem;
  border-radius: 0.25rem;
`
