import { styled } from 'styled-components'

export const Content = styled.header`
  width: calc(100% - 40px);
  display: flex;
  padding: 50px 20px;
  min-height: 320px;
  margin-inline: auto 0;
  border-radius: 0 0 0 120px;
  background-color: ${p => p.theme.main};
`