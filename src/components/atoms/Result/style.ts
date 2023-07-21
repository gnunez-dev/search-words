import { styled } from 'styled-components'

interface ResultSectionProps {
  $withProp?: string
}
interface ItemInfoProps {
  $gapProp?: string
}
export const ResultContent = styled.div`
  width: 100%;
  max-width: 1600px;
  display: flex;
  flex-direction: row;
  gap: 30px;
  padding: 0 20px 50px 20px;
  @media(max-width: 768px){
    flex-direction: column;
  }
`
export const ResultSection = styled.section<ResultSectionProps>`
  width: ${p => p?.$withProp ?? '100%'};
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media(max-width: 768px){
    width: 100%;
  }
` 
export const Word = styled.h2`
  width: 100%;
  text-align: center;
  font-size: 2rem;
  font-weight: 500;
  color: ${p => p.theme.title};
  text-transform: capitalize;
`
export const ItemResultContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid ${p=> p.theme.secondary};
  gap: 15px;
  padding: 20px;
  border-radius: 8px;
`
export const ItemInfo = styled.div<ItemInfoProps>`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${p => p?.$gapProp ?? '0'};
`
export const Subtitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 400;
  padding: 0 0 5px 0;
  color: ${p => p.theme.title};
  text-transform: capitalize;
`
export const Subtitle4 = styled.h4`
  font-size: 1rem;
  font-style: italic;
  font-weight: 300;
  color: ${p => p.theme.subtitle};
  padding: 0 0 5px 0;
  text-transform: capitalize;
`
export const Text = styled.p`
  color: ${p => p.theme.text};
  padding: 0 0 0 10px;
  text-transform: capitalize;
  font-size: 0.9rem;
`
export const ItemsList = styled.ul`
  padding: 0 0 0 30px;
  display: flex;
  flex-direction: column;
`
export const ItemList = styled.li`
  width: 100%;
  color: ${p => p.theme.text};
  text-transform: capitalize;
  font-size: 0.9rem;
`

/* 
  dominant
  secondary
  accent
  text
*/