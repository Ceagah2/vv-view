import * as S from './styles'
import { MenuData } from '../../../constants/menu-data'
export const NavBar = () => {
  const Parallax = 'https://placehold.co/1240x1080?text=Parallax'
  return(
    <S.Container bgImage={Parallax}> 
        <S.MenuLink href='#'>
          <S.Logo src="https://placehold.co/75x75?text=Logo" alt="Vale Viagens Logotipo."/>
        </S.MenuLink>
      <S.Menu>
        {MenuData.map((item) => (
          <S.MenuItem key={item.id}>
            <S.MenuLink href={item.link}>{item.name}</S.MenuLink>
          </S.MenuItem>
        ))}
      </S.Menu>
    </S.Container>
  )
}