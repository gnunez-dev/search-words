import { useRef } from "react"
import { InputProps } from "../../../types"
import * as style from './style'

const Input = ({
  type,
  name,
  value,
  onChange,
  $borderRadius
}: InputProps) => {
  return (
    <style.InputContent
      type={type}
      name={name}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      $borderRadius={$borderRadius}
    />
  )
}
export default Input