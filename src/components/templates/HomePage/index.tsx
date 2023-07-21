import { createContext, useEffect, useState } from 'react';
import { Footer, Header } from '../../organisms'
import * as style from './style'
import { searchContextType } from '../../../types';
import { getWordsAndDocuments } from '../../../lib';
import { Result } from '../../atoms';
//import { addCollectionAndDocuments } from '../../../lib';
//import WORDS_DATA from '../../../lib/data';

const defaultValueContext:searchContextType = {input:'', dataSearch: [{label:'', value:''}], handleChange: (value:string)=>{console.log(value)}, handleSearch: () =>{}}
export const SearchContext = createContext<searchContextType>(defaultValueContext);

const HomePage = () => {

  const [input, setInput] = useState('hatchback')
  const [dataSearch, setDataSearch] = useState<any>()

  useEffect(() => {
    getWordsAndDocuments()
      .then( response => console.log({response}))
  }, [])
  
  const handleChange = (value: string) => setInput(value)
  const handleSearch = async () => {
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
      setDataSearch(result)
    } catch (error) {
      console.error(error);
    }
  }
  const contextValue: searchContextType = {input, dataSearch, handleChange, handleSearch}

  return (
    <SearchContext.Provider value={contextValue}>
      <style.Main>
        <Header/>
        { dataSearch &&
          <Result {...dataSearch} /> }
        <Footer/>
      </style.Main>
    </SearchContext.Provider>
  )
}
export default HomePage