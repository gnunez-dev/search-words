import { useContext } from 'react'
import { Button, Input } from '../../atoms'
import * as style from './style'
import { SearchContext } from '../../templates/HomePage'

const SearchBar = () => {
  const context = useContext(SearchContext)
  return (
    <style.SearchBarContent>
      <Input type={'text'} name={'search'} value={context.input} onChange={context.handleChange} $borderRadius={'20px 0 0 20px'}/>
      <Button label={'Search'} onClick={context.handleSearch} $borderRadius={'0 20px 20px 0'}/>
    </style.SearchBarContent>
  )
}
export default SearchBar