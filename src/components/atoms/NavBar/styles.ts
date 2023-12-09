import styled from 'styled-components'
import { theme } from '../../../styles/theme';

type TContainer = {
  bgImage: string
}

export const Container = styled.nav<TContainer>`
  width: 100%;
  height: 50vh;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-around;
  margin-bottom: 20px;
  background-image: url(${(props) => props.bgImage}); 
  background-size: cover;
  background-attachment: fixed; 
  background-position: center;
  overflow: hidden;
`;
export const Logo = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  cursor: pointer;
  &:hover {
    scale: 1.2;
    transition: 0.2s ease-in-out;
    margin-bottom: 10px;
  }
`;
export const Menu = styled.ul`
  width: 50%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  `;
export const MenuItem = styled.li`
  list-style: none;
  cursor: pointer;
  font-size: ${theme.sizes.subheading};
  font-family: ${theme.fonts.description};
  color: ${theme.colors.white};
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
  text-decoration: none;
  &:hover {
    scale: 1.1;
    transition: 0.2s ease-in-out;
  }
`;
export const MenuLink = styled.a`
  text-decoration: none;
    color: ${theme.colors.white};
`;