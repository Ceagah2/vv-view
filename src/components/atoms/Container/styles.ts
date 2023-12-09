import styled from 'styled-components';
import { theme } from '../../../styles/theme';

export const Main = styled.main`
  width: 100vw;
  min-height: 100vh;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${theme.colors.background};
`