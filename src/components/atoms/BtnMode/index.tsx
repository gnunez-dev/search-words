import { useContext } from "react"
import { ThemeContext } from "../../../App"
import IconMode from "./icon"
import * as style from './style'

const BtnMode = () => {
  const theme = useContext(ThemeContext)
  
  return (
    <>
      {/* @ts-ignore */}
      <style.BtnModeContent onClick={theme.handleTheme}>
      {/* @ts-ignore */}
        <IconMode mode={theme.theme} />
      </style.BtnModeContent>
    </>
  )
}
export default BtnMode