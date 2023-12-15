import { useState, useEffect } from "react"
import * as S from './styles.ts'
import {theme} from "../../../styles/theme"
import { ISocial } from "../../../types"
import { FaInstagram, FaWhatsapp } from "react-icons/fa";


export const SocialIcon = (props: ISocial) => {
  const [icon, setIcon] = useState<React.ReactNode>()
  const { name, link } = props

  const handleIcon = () => {
    switch(name){
      case 'Instagram':
        setIcon(<FaInstagram size={50} color={theme.colors.royalPink}/>)
        break;
      case 'Whatsapp':
        setIcon(<FaWhatsapp size={50} color={theme.colors.emerald}/>)
        break;
      default:
        setIcon(<FaInstagram size={50}/>)
    }
  }

  useEffect(() => {
    handleIcon()
  },[])
  return(
    <S.Container>
      <S.Icon  onClick={() => window.open(link, '_blank')}>{icon}</S.Icon>
      <S.IconName>{name}</S.IconName>
    </S.Container>
  )
}