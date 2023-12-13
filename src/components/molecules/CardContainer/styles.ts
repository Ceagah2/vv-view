import styled from "styled-components";

export const Container = styled.div`
  width: 92vw;
  height: 120vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between; 
  gap: 20px;
  margin-top: 20px;

  @media (min-width: 768px) {
    justify-content: center; 
  }

  @media (min-width: 1024px) {
    justify-content: flex-start; /* Alinha os cards à esquerda em telas maiores */
  }
`;
