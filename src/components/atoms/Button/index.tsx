import { ButtonProps } from "../../../types"
import * as style from './style'

const Button = ({
  label,
  onClick,
  $borderRadius
}: ButtonProps) => {
  return (
    <style.ButtonContent
      onClick={onClick}
      $borderRadius={$borderRadius}
    >{label}</style.ButtonContent>
  )
}
export default Button