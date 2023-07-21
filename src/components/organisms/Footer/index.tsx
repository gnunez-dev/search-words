import { useContext } from 'react'
import * as style from './style'
import { ThemeContext } from '../../../App'

const Footer = () => {
  const theme = useContext(ThemeContext)
  return (
    <style.FooterContent>
      {/* @ts-ignore */}
      <button onClick={theme.handleTheme}>{theme.theme}</button>
    </style.FooterContent>
  )
}
export default Footer