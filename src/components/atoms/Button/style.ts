import {styled} from 'styled-components'
import { ButtonStyleProps } from '../../../types'

export const ButtonContent = styled.button<ButtonStyleProps>`
  width: max-content;
  padding: 10px 25px;
  cursor: pointer;
  border: 0;
  border-radius: ${p => p?.$borderRadius ?? '0'};
  background-color: ${p => p.theme.accent};
  color: ${p => p.theme.subtitle};
`

/* 
  dominant
  secondary
  accent
  text
*/