import styled from 'styled-components';
import { theme } from '../../../styles/theme';

export const Container = styled.div`
  width: 20vw;
  perspective: 1000px; 
  cursor: pointer;
`;

export const CardSide = styled.div`
  width: 100%;
  height: 100%;
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
`;

export const CardFront = styled(CardSide)`
  transform: rotateY(0);
    background: ${theme.colors.sun};
`;

export const CardBack = styled(CardSide)`
  transform: rotateY(180deg); 
  background: ${theme.colors.sun};
`;

export const CardImage = styled.img`
  width: 100%;
  border-radius: 8px;
  object-fit: cover;
  margin-top: -22px;
`;

export const CardTitle = styled.h3`
  font-size: ${theme.sizes.subheading};
  font-family: ${theme.fonts.heading};
  color: ${theme.colors.navy};
  margin-top: 20px;
`;
export const DescriptionContainer = styled.div`
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 80%;
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
`;

export const CardValue = styled.span`
  font-size: ${theme.sizes.heading};
  font-family: ${theme.fonts.body};
  color: ${theme.colors.white};
`;
