import { Carousel, NavBar } from "../../atoms";
import * as S from './styles'

export const Header = () => {
  return(
    <S.Container>
      <NavBar />
      <Carousel />
    </S.Container>
  )
}