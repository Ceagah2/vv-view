import styled from "styled-components";

export const Container = styled.div`
  width: 50vw;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
   @media (max-width: 450px) {
    width: 100%;
    margin-top: 20px;
  }
`

export const Image = styled.img`
  width: 45vw;
  margin-left: 5vw;
  object-fit: cover;
  object-position: center;
  border-radius: 16px;

  @media (max-width: 450px) {
    width: 80vw;
  }
`