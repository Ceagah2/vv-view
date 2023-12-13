import { useState, useEffect } from 'react'
import { motion } from 'framer-motion';
import { ICard } from '../../../types'
import { whatsappMessage } from '../../../constants/whatsapp-api';

import { FaUmbrellaBeach } from "react-icons/fa";
import { GiTrail } from "react-icons/gi";
import { BiSolidDrink } from "react-icons/bi";
import { RiAliensLine } from "react-icons/ri";
import { MdModeOfTravel } from "react-icons/md";
import { GiChocolateBar } from "react-icons/gi";
import { TbAirBalloon } from "react-icons/tb";

import * as S from './styles'

export const Card = (props: ICard) => {
  const [icon, setIcon] = useState<React.ReactNode>()
  const [isHovered, setIsHovered] = useState(false);
  const {name, id, description, image, category, date, value} = props

  const handleBooking = (name: string, date: string) => {
    window.open(whatsappMessage(name, date), '_blank');
  }
  
  const handleIcon = () => {
    switch(category){
      case 'Praia':
        setIcon(<FaUmbrellaBeach />)
        break;
      case 'Trilha':
        setIcon(<GiTrail />)
        break;
      case 'Cerveja':
        setIcon(<BiSolidDrink />)
        break;
      case 'SaoThome':
        setIcon(<RiAliensLine />)
        break;
      case 'Viagem':
        setIcon(<MdModeOfTravel />)
        break;
      case 'Chocolate':
        setIcon(<GiChocolateBar />)
        break;
      case 'Balao':
        setIcon(<TbAirBalloon />)
        break;
      default:
        setIcon(<GiTrail />)
    }
  }

  useEffect(() => {
    handleIcon();
  },[]);

  
  return (
    <S.Container key={id} onClick={() => handleBooking(name, date)}>
      <motion.div
        className="card-content"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        initial={{ rotateY: 0 }}
        animate={{ rotateY: isHovered ? 180 : 0 }}
        transition={{ duration: 0.5 }}
        style={{
          width: '100%',
          height: '100%',
          position: 'relative',
          transformStyle: 'preserve-3d',
        }}
      >
        <S.CardFront className="front">
          <S.CardImage src={image} alt={name} />
          <S.CardTitle>{name} {icon}</S.CardTitle>
        </S.CardFront>
        <S.CardBack className="back">
          <S.DescriptionContainer>
            <S.CardText>{description}</S.CardText>
            <S.CardText>Data: {date}</S.CardText>
          </S.DescriptionContainer>
          <S.ValueContainer>
            <S.CardValue>R$ {value}</S.CardValue>
          </S.ValueContainer>
        </S.CardBack>
      </motion.div>
    </S.Container>
  );
};