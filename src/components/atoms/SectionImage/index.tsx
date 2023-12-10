import { ISectionImage } from '../../../types'
import * as S from './styles'
export const SectionImage = ({image} : ISectionImage) => {
  return(
    <S.Container> 
      <S.Image src={image} alt='Imagem destacada' />
    </S.Container>
  )
}