import { ISection } from "../../../types"
import { SectionTitle } from "../../atoms/SectionTitle"
import * as S from './styles'

export const Section = ({ children, position, delay, title }: ISection) => {
  return(
    < S.Container
      animate = {{
        opacity: 1,
        x: 0,
      }}
      initial = {{
        opacity: 0,
        x: -20,
      }}
      transition = {{
        duration: 0.5,
        ease: 'easeInOut',
        delay: delay || 0,
      }}
      position={position }
    >
      <SectionTitle>{title}</SectionTitle>
      <S.ChildContainer>
        {children}
      </S.ChildContainer>
    </S.Container>
  )
}