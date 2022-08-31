import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  max-width: 70%;
  margin: 0 auto;

  @media (max-width: 540px) {
    max-width: unset;
  }
`;
