import { styled } from 'styled-components'

export const Content = styled.header`
  width: calc(100% - 40px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px 20px 65px;
  min-height: 280px;
  margin-inline: auto 0;
  border-radius: 0 0 0 120px;
  background-color: ${p => p.theme.secondary};
  gap: 20px;
`
export const ContentBtnMode = styled.nav`
  width: 100%;
  display: flex;
  justify-content: flex-end;
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