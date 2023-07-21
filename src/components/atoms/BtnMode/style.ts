import { styled } from 'styled-components'

export const BtnModeContent = styled.button`
  width: 35px;
  height: 35px;
  border-radius: 50px;
  border: 1px solid ${p => p.theme.text};
  padding: 5px;
  background-color: ${p => p.theme.dominant};
  cursor: pointer;
`