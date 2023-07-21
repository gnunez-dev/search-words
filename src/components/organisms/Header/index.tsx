import BtnMode from '../../atoms/BtnMode'
import { SearchBar } from '../../molecules'
import * as style from './style'

const Header = () => {
  return (
    <style.Content>
      <BtnMode/>
      <style.Title>Search Words</style.Title>
      <SearchBar/>
    </style.Content>
  )
}
export default Header