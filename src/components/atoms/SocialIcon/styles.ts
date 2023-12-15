import styled from 'styled-components'
import {theme} from '../../../styles/theme'

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-right: 20px;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
    scale: 1.1;
    transition: 0.5s ease-in-out all;
  }
`
export const Icon = styled.div``

export const IconName = styled.span`
  font-size: ${theme.sizes.body};
  font-family: ${theme.fonts.body};
  color: ${theme.colors.navy};
`