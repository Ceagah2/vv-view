import styled from 'styled-components'
import {theme} from '../../../styles/theme'

export const Container = styled.footer`
  width: 90vw;
  height: 20vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 450px) {
    width: 100%;
    height: 100%;
    flex-direction: column;
  }
`
export const TextContent = styled.div`
  width: 45vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  @media (max-width: 450px) {
    width: 90%;
    gap: 10px;
    margin-bottom: 20px;
  }
`
export const TextTitle = styled.h2`
  font-size: ${theme.sizes.heading};
  font-family: ${theme.fonts.heading};
  color: ${theme.colors.navy};
  text-align: center;

  @media (max-width: 450px) {
    font-size: ${theme.sizes.subheading};
  }
`
export const Text = styled.p`
  font-size: ${theme.sizes.body};
  font-family: ${theme.fonts.body};
  color: ${theme.colors.navy};
  text-align: center;
  line-height: 1.5;
`
export const SocialContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
`

export const SignText = styled.span`
  font-size: ${theme.sizes.small};
  font-family: ${theme.fonts.heading};
  color: ${theme.colors.navy};
  text-align: center;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
    text-decoration: underline;
    text-decoration-color: ${theme.colors.royalPink};
    text-decoration-thickness: 2px;

    transition: all 0.3s ease;
  }
`
export const SignIcon = styled.span`
  font-size: ${theme.sizes.small};
  font-family: ${theme.fonts.heading};
  color: ${theme.colors.royalPink};
  text-align: center;
`