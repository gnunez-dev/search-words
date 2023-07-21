import { styled } from 'styled-components'

export const Content = styled.header`
  width: calc(100% - 40px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 20px 65px;
  min-height: 250px;
  margin-inline: auto 0;
  border-radius: 0 0 0 120px;
  background-color: ${p => p.theme.secondary};
  gap: 20px;
`
export const Title = styled.h1`
  width: 100%;
  text-align: center;
  font-size: 3rem;
  font-weight: 300;
  color: ${p => p.theme.text};
`

/* 
  dominant
  secondary
  accent
  text
*/