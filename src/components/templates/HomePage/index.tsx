import { createContext, useEffect, useState } from 'react';
import { Header } from '../../organisms'
import * as style from './style'
import { searchContextType } from '../../../types';
import { getOrSaveWord } from '../../../lib';
import { Result } from '../../atoms';
//import WORDS_DATA from '../../../lib/data';

const defaultValueContext:searchContextType = {input:'', dataSearch: [{label:'', value:''}], handleChange: (value:string)=>{console.log(value)}, handleSearch: () =>{}}
export const SearchContext = createContext<searchContextType>(defaultValueContext);

const HomePage = () => {

  const [input, setInput] = useState('')
  const [dataSearch, setDataSearch] = useState<any>()
  
  const handleChange = (value: string) => setInput(value)

  const getData = async () => {
    const url = `https://${process.env.REACT_APP_API_HOST}/words/${input}/`
    const optionsApi = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': `${process.env.REACT_APP_API_KEY}`,
        'X-RapidAPI-Host': `${process.env.REACT_APP_API_HOST}`
      }
    };
    try {
      const response = await fetch(url, optionsApi);
      const result = await response.json();
      return result
    } catch (error) {
      console.error(error);
    }
  }

  const handleSearch = async () => {
    getOrSaveWord(input, setDataSearch, getData)
  }
  const contextValue: searchContextType = {input, dataSearch, handleChange, handleSearch}

  return (
    <SearchContext.Provider value={contextValue}>
      <style.Main>
        <Header/>
        { (input && dataSearch) ?
            <Result {...dataSearch} />
          :
            ( input !== '' && 
              <style.NoFound>
                {`We couldn't find results for:`}
                <br/>
                <strong>{input}</strong>
              </style.NoFound>
            )
        }
      </style.Main>
    </SearchContext.Provider>
  )
}
export default HomePage