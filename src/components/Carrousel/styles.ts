import styled from 'styled-components';
import { theme } from '../../styles/theme';

type TProps = {
  bgImage: string;
};

export const Container = styled.div`
  width: 90vw;
  height: 40vh;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

export const SlideContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const ImageContainer = styled.div<TProps>`
  width: 100%;
  height: 40vh;
  background: url(${props => props.bgImage});
  background-position: right;
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TextContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 20px; 
  z-index: 9;
`;

export const Title = styled.h2`
  font-family: ${theme.fonts.heading};
  font-size: ${theme.sizes.banner};
  color: ${theme.colors.white};
  text-shadow: 1px 1px 1px ${theme.colors.navy};
`;

