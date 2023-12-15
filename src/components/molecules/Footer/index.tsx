import * as S from './styles'
import { INSTAGRAM_LINK } from '../../../constants/social-media-links'
import {SocialIcon} from '../../atoms'
import { whatsAppGenericMessage } from '../../../constants/whatsapp-api'
export const Footer = () => {
  const message = 'Olá, gostaria de saber mais sobre como viajar com vocês. Podem me dar mais detalhes?'
  const handleNavigate = () => {
    window.open('https://ceagah-dev-portfolio.netlify.app/', '_blank')
  }
  return(
    <S.Container>
      <S.TextContent>
        <S.TextTitle>Nāo perca tempo!</S.TextTitle>
        <S.Text>Nos acompanhe nas nossas redes sociais e fique por dentro das novidades</S.Text>
        <S.Text>Copyright © {new Date().getFullYear()}. Todos os direitos reservados.</S.Text>
        <S.SignText onClick={handleNavigate}>Feito com muito <S.SignIcon>❤</S.SignIcon> por Carlos Ceagah.</S.SignText>
      </S.TextContent>
      <S.TextContent>
        <S.TextTitle>Redes sociais</S.TextTitle>
        <S.SocialContainer>
          <SocialIcon name='Instagram' link={INSTAGRAM_LINK}/>
          <SocialIcon name='Whatsapp' link={whatsAppGenericMessage(message)}/>
        </S.SocialContainer>
      </S.TextContent>
    </S.Container>
  )
}