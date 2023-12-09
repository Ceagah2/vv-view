import styled from 'styled-components'
import { theme } from '../../../styles/theme'


export const Container = styled.h2`
  font-size: ${theme.sizes.heading};
  font-family: ${theme.fonts.heading};
  color: ${theme.colors.navy};
  border-bottom: 1px solid ${theme.colors.navy};
`