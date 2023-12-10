import { ISectionText } from '../../../types'
import * as S from './styles'

export const SectionText = ({children}:ISectionText) => {
  return(
    <S.Container>
      {children}
    </S.Container>
  )
}