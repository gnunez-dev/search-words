import * as style from './style'

type itemResultType = { examples?: string[], synonyms?: string[], partOfSpeech?: string, definition?: string }

const ItemInfo = ({title, data}: {title: string, data: string[] | string }) => {
  return (
    <style.ItemInfo>
      <style.Subtitle4>{title}</style.Subtitle4>
      { Array.isArray(data) ?
          <style.ItemsList>
            { data.length > 0  &&
              data.map( item => <style.ItemList key={item}>{item}</style.ItemList> ) }
          </style.ItemsList>
        : 
        <style.Text>{data}</style.Text> }
    </style.ItemInfo>
  )
}

const ItemResult = ({ examples, synonyms, partOfSpeech, definition }: itemResultType) => {
  return (
    <style.ItemResultContent>
      { definition && <ItemInfo title={'Definition'} data={definition}/> }
      { examples && <ItemInfo title={'Examples'} data={examples}/> }
      { synonyms && <ItemInfo title={'Synonyms'} data={synonyms}/> }
      { partOfSpeech && <ItemInfo title={'Part Of Speech'} data={partOfSpeech}/> }
    </style.ItemResultContent>
  )
}

const Result = (data: any) => {
  return (
    <>
      <style.Word>{data.word}</style.Word>
      <style.ResultContent>
        <style.ResultSection $withProp='calc(80% - 15px)'>
          <style.Subtitle>Results</style.Subtitle>
            { data?.results && 
              <style.ItemInfo $gapProp='30px'>
               {data.results.map((result: any, index:number) => <ItemResult key={index} {...result}/> )}
            </style.ItemInfo> }
        </style.ResultSection>
        <style.ResultSection $withProp='calc(20% - 15px)'>
          { (data?.syllables && data?.syllables?.count > 0) && 
            <style.ItemInfo>
              <style.Subtitle>Syllables</style.Subtitle>
              <style.Text>{`Count: ${data?.syllables.count}`}</style.Text>
              <style.ItemsList>
                { data?.syllables.list.map(
                  (item: string) => <style.ItemList key={item}>{item}</style.ItemList>)}
              </style.ItemsList>
            </style.ItemInfo> }
          { data?.pronunciation?.all &&
            <style.ItemInfo>
              <style.Subtitle>Pronunciation</style.Subtitle>
              <style.Text>{data?.pronunciation?.all}</style.Text>
            </style.ItemInfo> }
          { data?.frequency &&
            <style.ItemInfo>
              <style.Subtitle>Frequency</style.Subtitle>
              <style.Text>{data?.frequency}</style.Text>
            </style.ItemInfo> }
        </style.ResultSection>
      </style.ResultContent>
    </>
  )
}
export default Result




/* export const data = {
  "syllables": {
    "list": [ "but" ],
    "count": 1
  },
  "pronunciation": {
    "all": "bət"
  },
  "word": "but", //
  "results": [
    {
      "examples": [
        "hopes that last but a moment"
      ],
      "synonyms": [
        "just",
        "merely",
        "only",
        "simply"
      ],
      "partOfSpeech": "adverb",
      "definition": "and nothing more"
    }
  ], //
  "frequency": 6.67
} */
