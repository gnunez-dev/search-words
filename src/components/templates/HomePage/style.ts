import { styled } from 'styled-components'

export const Main = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`
export const NoFound = styled.h3`
  width: 90%;
  max-width: 280px;
  color: ${p => p.theme.subtitle};
  font-size: 1.2rem;
  text-align: center;
  font-style: italic;
  font-weight: 300;
  border: 1px solid ${p => p.theme.subtitle};
  padding: 15px;
`