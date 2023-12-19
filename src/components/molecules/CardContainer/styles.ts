import styled from "styled-components";

export const Container = styled.div`
  width: 92vw;
  height: 120vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between; 
  gap: 20px;
  margin-top: 100px;

  @media (min-width: 768px) {
    justify-content: center; 
    gap: 40px;
  }

  @media (min-width: 1024px) {
    justify-content: flex-start;
  }

  @media (max-width: 450px) {
    width: 100%;
    height: auto;
    justify-content: center;
    flex-direction: column;
    align-items: center; 
    margin-top: 0;
  }
`;