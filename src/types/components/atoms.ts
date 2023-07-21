export interface InputProps {
  type: string
  name: string
  value: string
  onChange: (value: string) => void
  $borderRadius?: string
}
export interface InputStyleProps {
  $maxWidth?: string
  $borderRadius?: string
}

export interface ButtonProps {
  label: string
  onClick: () => void
  $borderRadius?: string
}
export interface ButtonStyleProps {
  $borderRadius?: string
}