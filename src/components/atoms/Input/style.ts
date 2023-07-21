import { styled } from 'styled-components'
import { InputStyleProps } from '../../../types'

export const InputContent = styled.input<InputStyleProps>`
  width: 100%;
  max-width: ${ p => p?.$maxWidth ?? '100%' };
  padding: 7px 15px;
  border-radius: ${p => p?.$borderRadius ?? '0'};
  border: 0;
  height: 40px;
  color: ${p => p.theme.accent};
  &:focus-visible {
    outline: 0;
    border: 1px solid ${p => p.theme.accent};
  }
`

/* 
  dominant
  secondary
  accent
  text
*/