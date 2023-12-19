import styled from 'styled-components';
import { theme } from '../../../styles/theme';
import {motion} from 'framer-motion';

export const Container = styled.div`
  width: 20vw;
  perspective: 1000px; 
  cursor: pointer;
  margin-bottom: 30px;

  @media (max-width: 450px) {
    width: 80%;
    height: 400px;
  }
`;

export const Card = styled(motion.div)` 
  perspective: 1000px;
  margin-bottom: 20px;
  width: 100%;
  height: 100%;

  @media (max-width: 450px) {
    width: 100%; 
    height: 400px;
  }
`;

export const CardSide = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  backface-visibility: hidden; 
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.5s ease;

  @media (max-width: 450px) {
    width: 100%;
    height: 400px;
  }
`;

export const CardFront = styled(CardSide)`
  transform: rotateY(0);
  width: 100%;
  height: 100%;
  background: ${theme.colors.sun};

   @media (max-width: 450px) {
    width: 100%;
     height: 400px;
  }
`;

export const CardBack = styled(CardSide)`
  transform: rotateY(180deg); 
  width: 100%;
  height: 100%;
  background: ${theme.colors.sun};

   @media (max-width: 450px) {
    width: 100%;
    height: 400px;
    padding: 20px;
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 86%;
  border-radius: 8px;
  object-fit: cover;
  margin-top: -22px;

   @media (max-width: 450px) {
    width: 90%;
    height: 300px;
    margin-top: 0;
  }
`;

export const CardTitle = styled.h3`
  font-size: ${theme.sizes.subheading};
  font-family: ${theme.fonts.heading};
  color: ${theme.colors.navy};
  padding: 20px;
`;
export const DescriptionContainer = styled.div`
  width: 70%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

`
export const CardText = styled.p`
  font-size: ${theme.sizes.body};
  font-family: ${theme.fonts.body};
  color: ${theme.colors.navy};
  margin-top: 20px;
  padding: 20px;
`;

export const ValueContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-left: 20px;
  border-radius: 50%;
  padding: 20px;
  background: ${theme.colors.emerald};

  @media (max-width: 450px) {
    width: 80%;
  }

  
`;

export const CardValue = styled.span`
  font-size: ${theme.sizes.heading};
  font-family: ${theme.fonts.body};
  color: ${theme.colors.white};
  @media (max-width: 450px) {
     font-size: ${theme.sizes.body};

  }
`;
