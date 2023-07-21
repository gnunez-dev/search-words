export interface SearchBarProps {
  option: string
  onChangeOption: (value: string) => void
  inputValue: string
  onChangeValue: () => void
  onSearch: () => void
}